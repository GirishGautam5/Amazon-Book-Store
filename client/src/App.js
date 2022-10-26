import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Signinpage from './pages/Signin';
import Registerpage from './pages/Register';
import Productsedit from './pages/Productsedit';
import Shippingpage from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/Order';
import Profilepage from './pages/Profile';
import Successpage from './pages/Success';


function App() {
  
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  
  
  
  
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
        </button>
            
          </div>
          <div className="header_logo">
          <Link to="/" >
            <img
          
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"
        />
            </Link>
          </div>
         
          <div className="header-links">
            <Link to="/cart/:id?">Go to Cart
            <i className="fa fa-shopping-cart fa-2x mx-2 btn "  style={{color:"white"}}></i>
            </Link>
            {
              userInfo ? <Link to="/profile">{userInfo.name} </Link> :
                <Link to="/signin">Sign In 
                 <i className="fa fa-user p-3 fa-6x mx-2 btn "  style={{color:"white"}}></i>
                </Link>
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                 <i className="fa fa-user p-3 fa-6x mx-2 btn "  style={{color:"white"}}></i>
                <a href="#"  >Admin</a>
                <ul className="dropdown-content">
                  <li>
                
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}

          </div>
        </header>
        <aside className="sidebar">
          <h3>Book Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul className="categories">
            <li>
              <Link to="/category/Entertainment">Entertainment</Link>
            </li>

            <li>
              <Link to="/category/History">History</Link>
            </li>
            <li>
              <Link to="/category/Subject">Subject</Link>
            </li>

          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/products" component={Productsedit} />
            <Route path="/shipping" component={Shippingpage} />
            <Route path="/payment" component={Payment} />
            <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/signin" component={Signinpage} />
            <Route path="/register" component={Registerpage} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/profile" component={Profilepage} />
            <Route path="/category/:id" component={Home} />
            <Route path="/" exact={true} component={Home} />
            <Route path="/success"  component={Successpage} />




          </div>

        </main>
        <footer className="footer">
          All right reserved.
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
