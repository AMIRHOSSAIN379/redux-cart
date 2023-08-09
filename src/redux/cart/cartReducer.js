import { ADD_TO_CART, CLEAR_CART, DECREMENT_TO_CART, DELETE_FROM_CART, INCREMENT_TO_CART } from './actionType'
const updateLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}
const initialCartState = {
   cart : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}
const cartReducer = (state = initialCartState, action) => {
     switch(action.type){
        case ADD_TO_CART:
            const hasProduct = state.cart.find(item => item.id === action.payload.id) ? true : false;
            state.cart = hasProduct ? state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity+1} : item ) : [...state.cart, {...action.payload, quantity: 1}]
            updateLocalStorage(state.cart)
            return{
             ...state,
             cart: state.cart
        }
        case INCREMENT_TO_CART:
            state.cart = state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity+1} : item );
            updateLocalStorage(state.cart)
            return{
                ...state,
                cart: state.cart
           }
           case DECREMENT_TO_CART:
            const product = state.cart.find(item => item.id === action.payload);
            state.cart = product.quantity > 1 ? state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity-1} : item ) : state.cart
            updateLocalStorage(state.cart)
            return{
                ...state,
                cart: state.cart
           }
           case DELETE_FROM_CART:
            state.cart = state.cart.filter(item => item.id !== action.payload);
            updateLocalStorage(state.cart)
            return{
                ...state,
                cart: state.cart
           }
           case CLEAR_CART:
            updateLocalStorage([]) 
           return{
                ...state,
                cart: []
           }
        default:
            return state;
     }
}
export default cartReducer;