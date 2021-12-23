import { useReducer } from 'react'
import ProductItem from '../components/ProductItem';
import { shoppingInitialState, shoppingReducer} from '../components/Reducers/ShoppingReducers'

    export const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} = state;
    const addToCart = (id) => {
        console.log(id);
    }
    const delFromCart = () => {}
    const clearCart = () => {}
    return (
        <div>
            <h2>Cart Shop</h2>
            <h3>Products</h3>
            <article className='box grid-responsive'>
            {products.map((product) => (
                    <ProductItem key={product.id} data={product} addToCart={addToCart}/> 
                ))}
            </article>
            <h3>Cart</h3>
            <article className='box'></article>
        </div>
    ) 
}

