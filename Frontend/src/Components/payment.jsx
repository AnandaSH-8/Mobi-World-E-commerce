import axios from "axios";
import { useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom"
import { showAlert } from "../Redux/Show Alert/reducer";

export const Payment = () => {

    const navigate = useNavigate()

    const Razorpay = useRazorpay();
    const [order, setOrder] = useState("")

    let total = {
        amount: JSON.parse(localStorage.getItem("total"))
    }
    const { phone } = JSON.parse(localStorage.getItem("formData"))

    let amount = total.amount * 100
    useEffect(() => {
        axios.post("https://mobi-world-api.vercel.app/razor/orderId", amount)
            .then(({ data }) => {
                setOrder(data.orderId)
            })
    }, [])

    const options = {
        "key": process.env.razorKey,
        "amount": amount,
        "currency": "INR",
        "name": "Mobi World",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": order,
        "handler": function (response) {

            axios.post("https://mobi-world-api.vercel.app/razor/verify", { response })
                .then(({ data }) => {
                    if (data.signatureIsValid) {
                        localStorage.setItem("id", JSON.stringify(response.razorpay_payment_id))
                        navigate("/mobile/confirm")
                    }
                    else {
                        dispatch(showAlert({show:true, type:'success',  message:"Payment Failed!. Please try again" }));
                        navigate("/mobile/checkout")
                    }
                })
        },
        "prefill": {
            "name": "Mobiworld",
            "email": "mobileworld@mobilWorld.com",
            "contact": phone || "888888888"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "orange"
        }
    };
    let rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.reason);
    });

    rzp1.open();

    return <div></div>
}

