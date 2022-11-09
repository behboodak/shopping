import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import shopping from '../../shopping-cart-outline-svgrepo-com.svg'
import { cartContext } from '../../context/CartContextProvider';
import styles from './Navbar.module.css';

const Navbar = () => {
    const {state} = useContext(cartContext)
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
            <div>
                <Link className={styles.products} to='/products'>products</Link>
            </div>
            
            <div className={styles.cart}>
                <Link  to='/cart'>
                    <span>{state.itemCounter}</span>
                    <img src={shopping} alt='shop' />
                </Link>
                
            </div>
        </div>
        </div>
        
    );
};

export default Navbar;