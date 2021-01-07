import * as actionTypes from "./actionTypes";
import axios from '../../axios';

export const addIngredient = (name)=>{
    return {
        type : actionTypes.ADD_INGREDIENT,
        ingredientName : name
    };
}

export const removeIngredient = (name)=>{
    return {
        type : actionTypes.REMOVE_INGREDIENT,
        ingredientName : name
    };
}

export const setIngredients = (ingredients)=>{
    return {
        type : actionTypes.SET_INGREDIENTS,
        ingredients : ingredients
    }
}

export const setIngredientsFailed = ()=>{
    return {
        type : actionTypes.SET_INGREDIENTS_FAILED
    }
}

const sendRequest = (dispatch) =>{
    axios.get("https://react-my-burger-5c636.firebaseio.com/Ingredients.json")
            .then(res=>{
                dispatch(setIngredients(res.data));
            })
            .catch(error => {
                dispatch(setIngredientsFailed())
                console.log(error);
            });
}

export const initIngredient = ()=>{
    return dispatch =>{
        sendRequest(dispatch);
    }
}