const express = require("express");
const Cart = require("../Models/cart_model")
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const carts = await Cart.create(req.body)
        return res.status(201).send({message:"Item Added to Cart"})
    }
    catch(err)
    {
        return res.status(500).send({ error: err.message});
    }
})

router.get("",async(req,res)=>{
    try{
        const carts = await Cart.find().lean().exec()
        return res.status(200).send(carts)
    }
    catch(err)
    {
        return res.status(500).send({ error: err.message});
    }
})

router.put("/:id",async(req,res)=>{

    try{

        const carts = await Cart.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send({message:"Unit Updated"})
    }
    catch(err){
        return res.status(500).send({ error: err.message,message:"Failed to Update" });
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const carts = await Cart.findByIdAndDelete(req.params.id);
       return res.status(200).send({message:"Item Deleted"});
    }
    catch(err){
        return res.status(500).send({ error: err.message,message:"Could not delete" });
        
    }
})

router.delete("",async(req,res)=>{
    try{
        const carts = await Cart.deleteMany();
       return res.status(200).send({message:"Items Deleted"});
    }
    catch(err){
        return res.status(500).send({ error: err.message,message:"Could not delete" });
    }
})

module.exports = router;