import React from 'react';

function Successpage(props){
    const handlesubmit = () => {
        props.history.push("/");
      }
    return(
      <div className="success">
        <button className="btnhome" onClick={handlesubmit}>Go to Homepage</button>
<div className="card">
      <div className="tick" >
        <i className="checkmark">✓</i>
      </div>
        <h1 className="h1class">Success</h1> 
        <p className="pclass">We received your purchase request;<br/> we'll be in touch shortly!</p>

      </div>  
      </div>  )
}

export default Successpage;