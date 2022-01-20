import axios from "axios";

// redux
import { GET_FOOD_LIST, GET_FOOD } from "./food.type";

export const getFood = (foodId) => async (dispatch) => {
    try{
        const Food = await axios({
            method: "GET",
            url: `http://localhost:5000/food/${foodId}`,
        })

        dispatch({ type: GET_FOOD, payload: Food.data})
    }catch(error){
        dispatch({type: "ERROR", payload: error})
    }
}


export const getFoodList = (menuId) => async (dispatch) => {
    try{
        const Menu = await axios({
            method: "GET",
            url: `http://localhost:5000/menu/list/${menuId}`,
        })

        dispatch({ type: GET_FOOD_LIST, payload: Menu.data})
    }catch(error){
        dispatch({type: "ERROR", payload: error})
    }
}