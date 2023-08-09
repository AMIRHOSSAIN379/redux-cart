import { ADD_TO_CART, DECREMENT_TO_CART, INCREMENT_TO_CART } from './actionType'

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