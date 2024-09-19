import axios from "axios"
import {showAlert} from "../Show Alert/reducer";
export const CARTITEMS = "CARTITEMS";

export const cartItems = (payload) => ({ type: CARTITEMS, payload })

export const AddToCart = (items) => (dispatch) => {

    let item = {
        id: items._id,
        name: items.name,
        image: items.images[0],
        inPrice: items.price,
        upPrice: items.price,
        count: 1
    }

    axios.post("https://mobi-world-api.vercel.app/cart", item)
        .then(({ data }) => {
            dispatch(showAlert({show:true, type:'success',  message:data.message}));
        })
        .catch((err) => {
            dispatch(showAlert({show:true, type:'info',  message:'Unable to add, please try again'}))
        })
}

export const GetCart = () => (dispatch) => {

    axios.get(`https://mobi-world-api.vercel.app/cart`)
        .then(({ data }) => {
            dispatch(cartItems(data))
        })
}

export const UpdateCart = (items, id, price, count) => (dispatch) => {

    items = {
        ...items,
        upPrice: price * count,
        count
    }

    axios.put(`https://mobi-world-api.vercel.app/cart/${id}`, items)
        .then(({ data }) => {
            dispatch(showAlert({show:true, type:'success',  message:data.message}));
            dispatch(GetCart())
        })
}

export const DeleteCart = (id) => (dispatch) => {

    axios.delete(`https://mobi-world-api.vercel.app/cart/${id}`)
        .then(({ data }) => {
            dispatch(showAlert({show:true, type:'success',  message:data.message}));
            dispatch(GetCart())
        })
        .catch((err) => {
            dispatch(showAlert({show:true, type:'success',  message:'Not able to delete now, Try again'}));
        })
}
