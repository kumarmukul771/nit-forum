import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders : [],
    loading : false,
    purchased : false
}

const reducer = (state = initialState, action) =>{
    // console.log('order reducer');
    switch(action.type){
        case actionTypes.PURCHASE_BURGER_START :
            return {
                ...state,
                loading : true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS : 
            const newData = {
                ...action.orderData,
                id : action.id,
            }
            return {
                ...state,
                loading : false,
                orders : state.orders.concat(newData),
                purchased : true
            }

        case actionTypes.PURCHASE_BURGER_FAIL :
            return {
                ...state,
                loading : false,
                error : action.error,
                purchased : false
            }
        
        case actionTypes.INIT_PURCHASED :
            return {
                ...state,
                purchased : action.purchased
            }
        
        case actionTypes.FETCH_ORDER_SUCCESS : 
            return {
                ...state,
                orders : action.orders
            }
        
        case actionTypes.PURCHASE_BURGER_FAIL :
            return{
                ...state,
                error : action.error
            }
        
    }
    return state;
}

export default reducer;