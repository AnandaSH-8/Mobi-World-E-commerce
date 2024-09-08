import axios from "axios"
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

    axios.post("http://localhost:8888/cart", item)
        .then(({ data }) => {
            alert(data.message)
        })
        .catch((err) => {
            alert("Unable to add, Please Try Again")
        })
}

export const GetCart = () => (dispatch) => {

    axios.get(`http://localhost:8888/cart`)
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

    console.log(items)

    axios.put(`http://localhost:8888/cart/${id}`, items)
        .then(({ data }) => {
            alert(data.message)
            dispatch(GetCart())
        })
}

export const DeleteCart = (id) => (dispatch) => {

    axios.delete(`http://localhost:8888/cart/${id}`)
        .then(({ data }) => {
            alert(data.message)
            dispatch(GetCart())
        })
        .catch((err) => {
            alert("Not able to delete now, Try again")
        })
}
