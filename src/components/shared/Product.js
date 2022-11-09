import React, { useContext } from 'react';
import { shorten, quantityCounter } from '../../helper/functions';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContextProvider';
import styles from './Product.module.css'
import trash from './../../trash.svg'

const Product = ({inf}) => {
    const {state, dispatch} = useContext(cartContext)
    const quantity = quantityCounter(state, inf.id)
    console.log(quantity)
    return (
        <div className={styles.container} >
            <img src={inf.image} alt="inf"/>
            <h3>{shorten(inf.title)}</h3>
            <p>{inf.price} $</p>
            <div className={styles.handle} >
                <Link to={`/products/${inf.id}`}>details</Link>
                <div className={styles.buttonHandle} >
                   {
                    !quantity ? <button className={styles.adddel} onClick={() => dispatch({type:"ADD_ITEM", payload:inf})}>add to cart</button> : 
                    <button className={styles.plus_} onClick={() => dispatch({type:"INCREASE", payload:inf})}>+</button>
                   }
                   {
                    (quantity > 0) && <span className={styles.counter}>{quantity}</span>
                   }
                   {
                    (quantity === 1) && <button className={styles.plus_} onClick={() => dispatch({type:"REMOVE_ITEM", payload:inf})}><img src={trash} alt="trash" /></button>
                    
                   }
                   {
                    (quantity > 1) && <button className={styles.plus_} onClick={() => dispatch({type:"DECREASE", payload:inf})}>-</button>
                   }
                   
                </div>
            </div>
        </div>
    );
};

export default Product;