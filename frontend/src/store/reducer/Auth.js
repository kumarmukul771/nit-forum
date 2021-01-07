import * as actionTypes from '../actions/actionTypes';
const initialState = {
    token : null,
    userId : null,
    loading : false,
    error : null
}

const reducer = (state = initialState , action)=>{
    switch (action.type){
        case actionTypes.AUTH_START :
            return {
                ...state,
                loading : true
            }
        case actionTypes.AUTH_SUCCESS :
            return{
                ...state,
                loading : false,
                token : action.token||localStorage.getItem('token'),
                userId : action.userId||localStorage.getItem('userId'), 
            }
        case actionTypes.AUTH_FAIL :
            return{
                ...state,
                loading : false,
                error : action.error
            }
        case actionTypes.AUTH_LOGOUT :
            return {
                ...state,
                token : null,
                userId : null
            }
    }
    return state;
}

export default reducer;