import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { GetMobile } from "../../Redux/Mobiles/action"
import Style from "./mobile.module.css"
import { Button } from "@mui/material"
import {AddToCart} from "../../Redux/Cart/action"
import { v4 as uuid } from 'uuid';
import {Loading} from "../loading"

export const Single = () =>{
    const {name} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const phone = useSelector((store)=>store.mobiles.item_info[0])
    const {loading,error} = useSelector((store)=> store.mobiles)
    const [image,setImage] = useState(phone?.images[0])
    useEffect(()=>{
        dispatch(GetMobile(name))
    },[])

    useEffect(()=>{
        setImage(phone?.images[0])
    },[]) 

    if(loading)
    {
        return <Loading></Loading>
    }

    return <div className={Style.Details}>
        <div className={Style.Images}>
            <div className={Style.mainImage}>
                <img className={Style.image} src={image} alt=""/> 
            </div>
            <div  className={Style.smallImageBox}>
                {phone?.images.map((img)=>{
                   return <div key={uuid()} onClick={()=>{setImage(img)}}>
                        <img className={Style.image} src={img}alt="" />
                    </div>
                })}
            </div>
        </div>
        <div className={Style.specs}>
            <h1>{phone?.name}</h1>
            <p><b>Launch Date : </b>  {phone?.launch_date}</p>
            <p><b>OS : </b>  {phone?.os}</p>
            <p><b>Screen Size: </b> {phone?.screen} inches</p>
            <p><b>Display : </b>  {phone?.display}</p>
            <p><b>PPI : </b> ~{phone?.PPI} PPI</p>
            <p><b>Camera :</b> Rear Camera:- {phone?.camera.rear} MP, Front Camera:- {phone?.camera.front} MP</p>
            <p><b>RAM: </b> {phone?.ram} GB</p>
            <p><b>Chipset : </b>  {phone?.chipset}</p>
            <p><b>Processor: </b> {phone?.processor} processor</p>
            <p><b>Internal Storage : </b>  {phone?.storage}</p>
            <p><b>Memory Card : </b> Expandable upto {phone?.sdCard}</p>
            <p><b>Weight : </b> {phone?.weight} g</p>
            <p><b>Battery : </b> {phone?.battery} mAh, Li-Po Battery</p>
            <p className={Style.Price} > ₹ {phone?.price}/-</p>
            
            <div className={Style.buttonBox}>
                <Button className={Style.cartButton}  
                variant="contained"
                onClick={()=>{
                    dispatch(AddToCart(phone))
                    navigate("/mobiles/cart")
                }}>Add to Cart</Button>
            </div>

        </div>
    </div>
}