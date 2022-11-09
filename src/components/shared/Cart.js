import React, { useContext } from 'react';
import { cartContext } from '../../context/CartContextProvider';
import { shorten } from '../../helper/functions';
import styles from './Cart.module.css'

const Cart = (props) => {
    const {image, quantity, title, price} = props.data
    const {dispatch} = useContext(cartContext)
    return (
        <div className={styles.container}>
            <img src={image} alt="pic" />
            <div className={styles.title}>buttonContainer
                <h3>{shorten(title)}</h3>
                <h2>{price}</h2>
            </div>
            <div className={styles.quantityContainer}>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={()=> dispatch({type:"INCREASE", payload:props.data })}>+</button>
                {
                    quantity > 1 ? 
                    <button onClick={()=> dispatch({type:"DECREASE", payload:props.data })} >-</button> :
                    <button onClick={()=> dispatch({type:"REMOVE_ITEM", payload:props.data })} >del</button>
                }
            </div>
            
        </div>
    );
};

export default Cart;