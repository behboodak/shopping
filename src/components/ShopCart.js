import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart';
import styles from './ShopCart.module.css'

const ShopCart = () => {
    const {state, dispatch} = useContext(cartContext)
    return (
        <div className={styles.container}>
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
            <div className={styles.finalState}>
                {
                    state.itemCounter > 0 && <>
                        <p>number of products: {state.itemCounter}</p>
                        <p>total price: {state.total}</p>

                        <div className={styles.buttonContainer}>
                            <button onClick={()=> dispatch({type:"CLEAR", payload:state.selectedItems })} >clear</button>
                            <button onClick={()=> dispatch({type:"CHECKOUT", payload:state.selectedItems })} >CHECKOUT</button>
                        </div>
                    </>

                }
                {
                    state.checkout && <div>
                        <h1>ckecked out successully</h1>
                        <Link to="/products">by more</Link>
                    </div>
                }
                {
                    !state.checkout && state.itemCounter === 0 && <div>
                        <h1>want to by more?</h1>
                        <Link to="/products">by more</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShopCart;