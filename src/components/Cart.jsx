import React, { useEffect, useState } from 'react'
import "../stylesheets/Cart.css"
import visa from "../assets/cards/visa.png"
import paypal from "../assets/cards/paypal.png"
import master from "../assets/cards/master.png"
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/CreateSlice'
import { Link } from 'react-router-dom'

const Cart = () => {

  const [data, setdata] = useState(null)
 
  const item = useSelector((state)=> state.cart)
 
  const dispatch = useDispatch()



const delHandlar = (ele)=> {
 dispatch(remove(ele.id))
 setdata(data - ele.price)
}

useEffect(()=>{
  let num = 0
function to (){
  item.map((ele)=>{
  num = num + ele.price
  setdata(num)
})}
to()
},[data])

  const modal = item.map((ele)=>(
    <div className="box">
    <div className="box1">
    <div className="img-sec">
    <img src={ele.image} alt="" />
    </div>
    <p>{ele.title}</p>
    </div>
    <div className="mini">
        <p>$ {ele.price}</p>
        <i class="fa-solid fa-x" onClick={()=> delHandlar(ele)}></i>
    </div>
</div>
  ))
  return (
    <div id='cart' onLoad={() => window.scroll(0,0)}>
    <div className="container">
    <div className="name">
      <h2>Your Cart</h2>
      <button><Link to='/'>Back to Home</Link></button>
    </div>
    <div className="cart-sec" >
      <h2 style={item.length > 0 ? {display:"none"} : {display:"block"}}>Sorry :)</h2>
        <div className="product"  style={item.length > 0 ? {display:"flex"} : {display:"none"}} >
          {modal}
        </div>
        <div className="amount" style={item.length > 0 ? {display:"flex"} : {display:"none"}}>
          <h2>Cart Totals</h2>
          <div className="list">
            <p>List items:</p>
            <p>$ {data + 15}</p>
          </div>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>$ {data}</p>
          </div>
          <div className="tex">
            <p>Estimated Shipping Cost:</p>
            <p>$5.00</p>
          </div>
          <div className="total">
            <div className="to">
                <p>Total</p>
                <p>$ {data + 5}</p>
            </div>
            <div className="btn-sec">
                <button>Proceed to Checkout</button>
                <div className="card">
                  <img src={master} alt="master card" />
                  <img src={paypal} alt="paypal" />
                  <img src={visa} alt="visa" />
                </div>
            </div>
          </div>
        </div>
    </div>
    </div> 
    </div>
  )
}

export default Cart