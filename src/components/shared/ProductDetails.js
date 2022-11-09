import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { productsContext } from '../../context/ContextProvider';
import styles from './ProductDetails.module.css'

const ProductDetails = (props) => {
    const id = props.match.params.id;
    console.log(id)
    const data = useContext(productsContext)
    const production = data[id-1];
    console.log(production)
    return (
        <div className={styles.container} >
            <img src={production.image} alt="product" />
            <div className={styles.contentContainer}>
                <h3>{production.title}</h3>
                <p>{production.description}</p>
                <p>{`${production.price} $`}</p>
                <Link to='/products'>back to shop</Link>
            </div>
            
        </div>
    );
};

export default ProductDetails;