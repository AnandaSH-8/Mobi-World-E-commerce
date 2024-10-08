const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken")

const router = express.Router();

const validation = async(req,res,next) =>{
    
    if(!req.headers.authorization)
    {
        return res.send({message:"Token is Missing or not valid"})
    }
    else if(!req.headers.authorization.startsWith("Bearer"))
    {
        return res.send({message:"Wrong token"})
    }

    const token = req.headers.authorization.split(" ")[1]

    let result;
    try{
        result = jwt.verify(token,process.env.JWT)
    }
    catch(err)
    {
        return res.status(500).send({message:err.message})
    }
    
    req.user = result.user

    next()

}


router.get("",validation, async(req,res)=>{
    
    try{
        return res.send({user:req.user,message:"Signin Successfull"})
    }
    catch(error)
    {
       return res.status(500).send({ error: err.message});
    }
})

module.exports = router