import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function Product(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
  }

  return <div>
    <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
    {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          <div className="container">
          <div className="details row col-md-6">
            <div className="details-image col-md-6 d-flex justify-content-end" >
              <img src={product.image} alt="product" width="300px" height="350px"></img>
            </div>
            <div className="details-info col-md-4">
              <ul>
                <li>
                  <h2 style={{fontWeight:"bold"}}>{product.name}</h2>
                </li>
                <li>
                <h4>By <span style={{color:"navy"}}>{product.author}</span></h4>
                  
          </li>
                <li>
                  Price: <b style={{color:"red"}}><i className="fa fa-inr" aria-hidden="true"></i>{product.price}</b>
                </li>
                <li>
                  Description:
            <div>
                    {product.description}
                  </div>
                </li>
              </ul>
            </div>
            </div>
            <div className="details-action col-md-6">
              <ul>
                <li>
                 
                  Price: <i className="fa fa-inr" aria-hidden="true"></i> {product.price}
                </li>
                <li style={{color:"green"}}>
                  Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                </li>
               
                <li>
                  {product.countInStock > 0 && <button onClick={handleAddToCart} className="button primary" >Add to Cart</button>
                  }
                </li>
              </ul>
            </div>
            
            </div>
          
        )
    }


  </div>
}
export default Product;