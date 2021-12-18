import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

function ProductListComp() {
    //const products = useSelector((state) => state);
    
    const dispatch = useDispatch();
        useEffect(()=> {
            dispatch(fetchProducts())
        },[dispatch])
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListComp;