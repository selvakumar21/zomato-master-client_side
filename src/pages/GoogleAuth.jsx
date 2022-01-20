import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

//redux 
import { useDispatch } from 'react-redux';
import { googleAuth } from '../redux/reducer/auth/auth.action';

const GoogleAuth = () => {
    const {token} = useParams();
    const dispatch = useDispatch();
    


useEffect(() => {
   if(token) {
       dispatch(googleAuth(token)).then(() => window.location.href= "/delivery");
   }
}, [token])

return<>
Loading, Please wait...
</>;
}

export default GoogleAuth;
