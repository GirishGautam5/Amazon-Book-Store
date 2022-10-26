import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function Home(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder))
  }
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder))
  }

  return <>
    {category &&
      <h2>{category}</h2>}
    
   
    <ul className="filter">
      <li className="search">
        <form onSubmit={submitHandler}>
          <input name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
          <button className="fa fa-search p-3 fa-6x mx-2 btn "  style={{color:"black", backgroundColor: "#cd9042"}}></button>
        </form>
      </li>
      <li>
        Sort By {' '}
        <select name="sortOrder" onChange={sortHandler}>
          <option value="">Newest</option>
          <option value="lowest">Highest</option>
          <option value="highest">Lowest</option>
        </select>
      </li>
    </ul>
    {loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <div className="row">
          {
            products.map((product) =>

              <div key={product._id} className="col-md-3 mb-4">
          <div className="card" style={{'backgroundColor':'#f5f5f5','fontSize':'25px'}}>
          <Link to={'/product/' + product._id}>
            <img className="w-100" src={product.image}  alt="product"  />
            </Link>
            <h5 className="font-medium mt-2 text-info" style={{'fontSize': '2rem','fontWeight': 'bold'}}><b>{product.name}</b></h5>
            <h5 className="subtitle "  style={{'fontSize': '1.5rem'}}>by {product.author}</h5>
            <h5 className=''  style={{'fontSize': '1.5rem'}}>Category : {product.category}</h5>
            <h5 className="font-medium " style={{'fontSize': '2rem'}} >Price: {product.price} <i className="fa fa-inr" aria-hidden="true"></i></h5>
           </div>
          
            </div>
             )
          }
        </div>
}
  </>

}
export default Home;