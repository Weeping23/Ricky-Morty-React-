import { useReducer, useState, useEffect } from 'react'
import { TYPES } from '../components/Cart/Actions/ShoppingActions';
import CartItem from '../components/Cart/CartItem';
import ProductItem from '../components/Cart/ProductItem';
import { shoppingInitialState, shoppingReducer} from '../components/Cart/Reducers/ShoppingReducers'

    export const ShoppingCart = () => {
    let [results, setResults] = useState([])
    let api = `https://rickandmortyapi.com/api/character`
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} = state;
    useEffect(() => {
        (async function () {
            fetch(api)
                .then((response) => response.json())
                .then((data) => setResults(data.results));
        })()
    }, [api])
    const addToCart = (id) => {
        console.log(id);
        dispatch ({ type: TYPES.ADD_TO_CART, payload: id });
    }

    const delFromCart = (id, all = false) => {
        if (all) {
            dispatch ({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
        }
        else {
            dispatch ({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
        }
    }

    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})
    }
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
            <article className='box'>
                <button onClick={clearCart}>Clear Cart</button>
                {cart.map((item, index) => (
                    <CartItem key={index} data={item} delFromCart={delFromCart} />
                ))}
            </article>
        </div>
    ) 
}

