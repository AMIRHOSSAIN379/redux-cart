import { ADD_TO_CART, CLEAR_CART, DECREMENT_TO_CART, DELETE_FROM_CART, INCREMENT_TO_CART } from './actionType'

export const addToCart  = (product) => {
     return {
        type: ADD_TO_CART,
        payload: product
     }
}
export const increment  = (productId) => {
    return {
       type: INCREMENT_TO_CART,
       payload: productId
    }
}
export const decrement  = (productId) => {
    return {
       type: DECREMENT_TO_CART,
       payload: productId
    }
}
export const deleteFromCart  = (productId) => {
   return {
      type: DELETE_FROM_CART,
      payload: productId
   }
}
export const clearCart  = () => {
   return {
      type: CLEAR_CART,
   }
}