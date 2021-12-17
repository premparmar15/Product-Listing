import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { fetchProduct, removeProduct } from '../redux/actions/productActions';

const ProductDetailComp = () => {
    const dispatch = useDispatch();
    const {productId} = useParams()
    const product = useSelector((state) => state.selectedProduct);
    console.log(product)
    const { image, carName, price, bodyType, description } = product;
    // useEffect(() => {
    //     if (productId && productId !== "") dispatch(fetchProduct(productId))
    //     return () => {
    //         dispatch(removeProduct())
    //     }
    // }, [dispatch,productId])
    return (
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt={bodyType} />
                </div>
                <div className="column rp">
                  <h1>{carName}</h1>
                  <h2 className="ui teal tag label">${price}</h2>
                  <h3 className="ui brown block header">{bodyType}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default ProductDetailComp;
