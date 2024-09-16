import axios from "axios";
import {showAlert} from "../Show Alert/reducer";

export const REGISTERED = "REGISTERED";

export const Registered = (payload) => ({ type: REGISTERED })

export const USER_DETAILS = "USER_DETAILS";

export const userDetails = (payload) => ({ type: USER_DETAILS, payload })

export const LOGOUT = "LOGOUT";

export const logOut = () => ({ type: LOGOUT })

export const Signup = (details) => (dispatch) => {
    dispatch(showAlert({show:true, type:'info',  message:'Please Wait...'}))
    axios.post(`https://mobi-world-api.vercel.app/signup`, details)
        .then(({ data }) => {
            dispatch(showAlert({show:true, type:'success',  message:data.message}));
            if (data.message == "User Registered") {
                dispatch(Registered())
            }
        })
}

export const Signin = (details) => (dispatch) => {

    dispatch(showAlert({show:true, type:'info',  message:'Please Wait...'}));
    axios.post(`https://mobi-world-api.vercel.app/signin`, details)
        .then(({ data }) => {
            dispatch(authentication(data.token))
        })
        .catch((error) => {
            dispatch(showAlert({show:true, type:'error',  message:'Incorrect UserName or Password'}));
        })
}

const authentication = (token) => (dispatch) => {
    let link = { headers: { authorization: `Bearer ${token}` } }
    axios.get(`https://mobi-world-api.vercel.app/auth`, link)
        .then(({ data }) => {
            let { user, message } = data

            localStorage.setItem("user", JSON.stringify(user))
            dispatch(showAlert({show:true, type:'success',  message}));
            if (message == "Signin Successfull") {
                dispatch(userDetails(data.user))
            }

        })
        .catch((error) => {
            dispatch(showAlert({show:true, type:'info',  message:'Something went wrong, Try Again'}));
        })
}
