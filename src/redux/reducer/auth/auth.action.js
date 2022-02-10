import axios from "axios";

//redux types
import { SIGN_IN, SIGN_UP, GOOGLE_AUTH, SIGN_OUT } from "./auth.type";

//redux actions
import {clearUser, getSelf} from "../user/user.action"; 

export const signIn = (userData) => async(dispatch) => {
    try{
        const User = await axios({
            method: "POST",
            url: `https://zomato-master-serverside.herokuapp.com/auth/signin`,
            data: {credentials: userData},
        });
        
        localStorage.setItem("zomatoUser", JSON.stringify({token: User.data.token})
        );

        window.location.reload();

        return dispatch ({type: SIGN_IN , payload: User.data})
    }catch(error){
        return dispatch({ type: "ERROR", payload: error})
    }
}

export const signUp = (userData) => async(dispatch) => {
    try{
        const User = await axios({
            method: "POST",
            url: `https://zomato-master-serverside.herokuapp.com/auth/signup`,
            data: {credentials: userData},
        });

        localStorage.setItem("zomatoUser", JSON.stringify({token: User.data.token})
        );

        window.location.reload();

        return dispatch ({type: SIGN_UP , payload: User.data})
    }catch(error){
        return dispatch({ type: "ERROR", payload: error})
    }
}

export const signOut = () => async (dispatch) => {
    try{
        localStorage.removeItem("zomatoUser");
        clearUser();

        window.location.href =  `https://62058e974527c4275428f907--silly-joliot-950a87.netlify.app/delivery`;
        
        return dispatch ({type: SIGN_OUT , payload: {} })
    }catch(error){
        return dispatch({ type: "ERROR", payload: error})
    }
}

export const googleAuth = (token) => async(dispatch) => {
    try{
        localStorage.setItem("zomatoUser" , JSON.stringify({ token }))

        return dispatch ({type: GOOGLE_AUTH , payload: {} })
    }catch(error){
        return dispatch({ type: "ERROR", payload: error})
    }
}