import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/actions/productActions";

const ProductComponent = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.allProducts.products);
  
  const setProduct = (product) =>{
    dispatch(fetchProduct(product))
  }
  const renderList = products.map((product) => {
    const { carId, carName, image, price, bodyType } = product;

    return (
      <div className="four wide column" key={carId}>
        <Link to={`/product/${carId}`}>
          <div className="ui link cards" onClick={()=> setProduct(product)}>
            <div className="card">
              <div className="image">
                <img src={"./assets/images/frontleftside_1613131901.jpg"} alt={carName} />
              </div>
              <div className="content">
                <div className="header">{carName}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{bodyType}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;