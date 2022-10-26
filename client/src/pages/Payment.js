import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function Payment(props) {

  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  }
  return <div>
    <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Payment</h2>
          </li>

          <li>
         
            <div>
              <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal"
                onChange={(e) => setPaymentMethod(e.target.value)}>
              </input>
              <span> </span>
              <label htmlFor="paymentMethod">
                Paypal
          </label>
          <br></br>
          <br></br>
          <input type="radio" name="paymentMethod" id="paymentMethod" value="googlepay"
                onChange={(e) => setPaymentMethod(e.target.value)}>
              </input>
              <span> </span>
              <label htmlFor="paymentMethod">
                Googlepay
          </label>
          <br></br>
          <br></br>
          <input type="radio" name="paymentMethod" id="paymentMethod" value="phonepay"
                onChange={(e) => setPaymentMethod(e.target.value)}>
              </input>
              <span> </span>
              <label htmlFor="paymentMethod">
                Phonepay
          </label>
          <br></br>
          <br></br>
          <input type="radio" name="paymentMethod" id="paymentMethod" value="COD"
                onChange={(e) => setPaymentMethod(e.target.value)}>
              </input>
              <span> </span>
              <label htmlFor="paymentMethod">
                Cash on Delivery
          </label>
  
                      </div>

          </li>



          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>

        </ul>
      </form>
    </div>
  </div>

}
export default Payment;