import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = ()=>{
    return {
        type : actionTypes.AUTH_START
    }
}
export const authSuccess = (token , userId)=>{
    return{
        type : actionTypes.AUTH_SUCCESS,
        token : token,
        userId : userId
    }
}
export const authFail = (error)=>{
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    }
}

export const logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return{
        type : actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeOut = (expirationTime)=>{
    return dispatch=>{
        setTimeout(()=>{
            console.log("Logout dispatched from setTime out")
            dispatch(logout());
        } , expirationTime * 1000)
    }
}

export const auth = (email , password , isSignup)=>{
    // console.log(isSignup);
    return dispatch=>{
        dispatch(authStart());
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDvIWEfdZPzMklT8MS6eTQXu6JEcD7UgqM';

        if(!isSignup) 
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvIWEfdZPzMklT8MS6eTQXu6JEcD7UgqM'
      
        const authData = {
            email : email,
            password : password,
            returnSecureToken : true
        }

        axios.post(url , authData)
            .then(res => {
                // console.log(res);
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem( 'token' , res.data.idToken);
                localStorage.setItem( 'expirationDate' , expirationDate);
                localStorage.setItem( 'userId' , res.data.localId);
                dispatch(authSuccess(res.data.idToken , res.data.localId));
                dispatch(checkAuthTimeOut(res.data.expiresIn))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));
            });
    }
}

export const authCheckState = ()=>{
    console.log("Auth check state running");
    return dispatch =>{
        const token = localStorage.getItem('token');
        if(token){
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            const userId = localStorage.getItem('userId');
            console.log("Token received");
            if(expirationDate > new Date()){
                console.log("Success");
                dispatch(authSuccess( token , userId ));
                dispatch(checkAuthTimeOut( (expirationDate.getTime() - new Date().getTime())/1000))
            } else{
                console.log("Failure")
            }
        } else{
            console.log("Logout dispatched");
            dispatch(logout());
        }
    }
}