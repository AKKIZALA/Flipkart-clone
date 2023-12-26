import React, { useState } from 'react'
import "../stylesheets/Newnavbar.css"

const Newnavbar = () => {

    const [box , setbox] = useState(false)
  return (
    <div id='newnav'>
        <div className="nav">
          <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
          <div className="input-sec">
            <input type="text"  placeholder='Search for products, brands and more' />
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
          </div>
          <div className="account">
            <p>Login</p>
          </div>
          <p>Become a Seller</p>
          <div className="more" onMouseEnter={()=> setbox(true)} onMouseLeave={()=> setbox(false)}>
            <p>More</p>
            <i className={box ? "fa-solid fa-chevron-down arrow" : "fa-solid fa-chevron-down arrow2"}></i>
            <div className="holder" style={box ? {display:"flex"} : {display:"none"}}>
              <div className="box">
              <i class="fa-solid fa-bell"></i>
              <p>Notification Preferences</p>
              </div>
              <div className="box">
              <i class="fa-solid fa-message"></i>
              <p>24x7 Customer Care</p>
              </div>
              <div className="box">
              <i class="fa-solid fa-arrow-trend-up"></i>
              <p>Advertise</p>
              </div>
              <div className="box">
              <i class="fa-solid fa-download"></i>
              <p>Download App</p>
              </div>
            <div className="shap"></div>
            </div>
          </div>
          <div className="cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Cart</p>
          </div>
        </div>
    </div>
  )
}

export default Newnavbar