import React,{useState,useEffect,createContext} from 'react';
import { getproducts } from '../services/api';

export const productsContext = createContext()

const ContextProvider = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const fetchAPI = async () =>{
                setProducts(await getproducts())
            }
        fetchAPI()    
    }, [])

    
    return (
        <productsContext.Provider value={products} >
            {props.children}
        </productsContext.Provider>
    )
};

export default ContextProvider;