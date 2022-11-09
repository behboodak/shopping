import React,{ useContext } from 'react';
import styles from './Store.module.css'

//context
import { productsContext } from '../context/ContextProvider';

//components
import Product from './shared/Product';

const Store = () => {

    const products = useContext(productsContext)
    console.log(products)
    return (
        <div className={styles.container}>
            {products.map(prodct => <Product 
                                    key={prodct.id} 
                                    inf={prodct} /> )}
        </div>
    );
};

export default Store;