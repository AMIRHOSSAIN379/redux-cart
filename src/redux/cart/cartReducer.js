import { ADD_TO_CART, DECREMENT_TO_CART, INCREMENT_TO_CART } from './actionType'
const initialCartState = {
   cart : []
}
const cartReducer = (state = initialCartState, action) => {
     switch(action.type){
        case ADD_TO_CART:
            const hasProduct = state.cart.find(item => item.id === action.payload.id) ? true : false;
            state.cart = hasProduct ? state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity+1} : item ) : [{...state.cart, ...action.payload, quantity: 1}]
        return{
             ...state,
             cart: state.cart
        }
        case INCREMENT_TO_CART:
            state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity+1} : item );
            return{
                ...state,
                cart: state.cart
           }
           case DECREMENT_TO_CART:
            const product = state.cart.find(item => item.id === action.payload);
            state.cart = product.quantity > 1 ? state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity-1} : item ) : state.cart
            return{
                ...state,
                cart: state.cart
           }
        default:
            return state;
     }
}
export default cartReducer;