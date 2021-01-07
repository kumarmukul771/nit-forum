import * as actionTypes from "./actionTypes";
import axios from '../../axios';

export const purchaseBurgerSuccess = (id , orderData)=>{
    return {
        type : actionTypes.PURCHASE_BURGER_SUCCESS,
        id : id,
        orderData : orderData
    }
}

export const purchaseBurgerFail = (error)=>{
    return {
        type : actionTypes.PURCHASE_BURGER_FAIL,
        error : error
    }
}

export const purchaseBurgerStart = ()=>{
    // console.log("purchaseBurgerStart")
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData , token)=>{
    // console.log('purchaseBurger');
    return dispatch =>{
        dispatch(purchaseBurgerStart());
        axios.post( '/orders.json?auth=' + token, orderData )
            .then( response => {
                dispatch(purchaseBurgerSuccess(response.data , orderData));
            } )
            .catch( error => {
                dispatch(purchaseBurgerFail(error));
            } );
    }
}

export const initPurchased = (purchased)=>{
    return {
        type : actionTypes.INIT_PURCHASED,
        purchased : purchased
    }
}

export const fetchOrderSuccess = (fetchOrders)=>{
    return {
        type : actionTypes.FETCH_ORDER_SUCCESS,
        orders : fetchOrders
    }
}

export const fetchOrderFail = (error)=>{
    return{
        type : actionTypes.FETCH_ORDER_FAIL,
        error : error
    }
}

export const fetchOrderStart = (token)=>{
    return dispatch=>{
        axios.get("/orders.json?auth=" + token)
        .then(response => {
            const fetchOrders = [];
            for(let key in response.data){
                fetchOrders.push({...response.data[key] ,id:key});
            }
            dispatch(fetchOrderSuccess(fetchOrders));
        })
        .catch(err=>dispatch(fetchOrderFail(err)))
    }
}