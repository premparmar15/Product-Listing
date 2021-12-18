import React from 'react'
import { useSelector } from 'react-redux'


const ProductDetailComp = () => {
    const product = useSelector((state) => state.selectedProduct);
    const { carName, price, bodyType, description } = product;

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
                  <img className="ui fluid image" src={"../assets/images/frontleftside_1613131901.jpg"} alt={""} />
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