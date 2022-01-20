import {combineReducers} from "redux";

//reducers
import restaurant from "./restaurant/restaurant.reducer";
import image from "./image/image.reducer";
import food from "./food/food.reducer";
import review from "./review/review.reducer";
import auth from "./auth/auth.reducer";
import user from "./user/user.reducer";
import cart from "./cart/cart.reducer";


const rootReducer = combineReducers({
    restaurant , image , food, review , auth, user, cart,
})

export default rootReducer;