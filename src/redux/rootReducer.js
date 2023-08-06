import { combineReducers } from "redux";
import productReducer from "./cart/productReducer";

const rootReducer = combineReducers({
  product: productReducer
})
export default rootReducer;