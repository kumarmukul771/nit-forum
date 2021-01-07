import * as actionTypes from '../actions/actionTypes';
const initialState = {
    ingredients : null,
    totalPrice : 150,
    error : false,
    loading : false    
}

const INGREDIENT_PRICE = {
    salad : 5,
    meat : 50,
    cheese : 20,
    bacon : 30
};

const reducer = (state = initialState , action) => {
    // console.log(state);
    switch(action.type){
        case actionTypes.ADD_INGREDIENT :
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice : state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
            };

        case actionTypes.REMOVE_INGREDIENT :
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                },
                totalPrice : state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
            }
        case actionTypes.SET_INGREDIENTS :
            return {
                ...state,
                ingredients : action.ingredients,
                error : false,
                totalPrice : 150
            }
        
        case actionTypes.SET_INGREDIENTS_FAILED : 
            return {
                ...state,
                error : true,
                totalPrice : 150
            }
    }
    return state;
}

export default reducer;