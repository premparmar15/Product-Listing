import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchProduct } from '../redux/actions/productActions'

export const ProductDetailComp2 = (props) => {
    const {productId} = useParams()
    console.log("props",props)
    //const product = useSelector((state) => state.selectedProduct);
    console.log("product",props.selectedProduct)
    
    useEffect(() => {
        props.fetchProduct(productId)
      
    }, [])
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedProduct: state.selectedProduct
})

const mapDispatchToProps = {
    fetchProduct
}

export default connect( mapStateToProps,mapDispatchToProps)(ProductDetailComp2)

