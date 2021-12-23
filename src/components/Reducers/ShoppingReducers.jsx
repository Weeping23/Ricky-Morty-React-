import { TYPES } from "../Actions/ShoppingActions";

export const shoppingInitialState = {
    products: [
        {id:1, name:"Producto 1", price:10},
        {id:2, name:"Producto 2", price:10},
        {id:3, name:"Producto 3", price:10},
        {id:4, name:"Producto 3", price:10},
        {id:5, name:"Producto 3", price:10},
        {id:6, name:"Producto 3", price:10},
    ],
    cart: [],
};

export function shoppingReducer(state, action) {
    switch(action.type){
        case TYPES.ADD_TO_CART:{
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
        }
        case TYPES.CLEAR_CART:{
        }
        default:
            return (state)
    }
}
