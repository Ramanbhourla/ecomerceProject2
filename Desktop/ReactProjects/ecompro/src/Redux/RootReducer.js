import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import LoginReducer from "./LoginReducer";
import SingleProductReducer from "./SingleProductReducer";


const RootReducer = combineReducers(
    {
        SingleProductReducer : SingleProductReducer,
        CartReducer  : CartReducer,
        LoginReducer : LoginReducer,
    }
)



// const RootReducer = combineReducers({
//     LoginReducer : LoginReducer,
// })

export default RootReducer;