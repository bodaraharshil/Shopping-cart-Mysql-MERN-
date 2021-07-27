import React,{useEffect, useState} from "react";
import Header from "../elements/header/header";
import { connect } from "react-redux";
import {Link, useHistory, withRouter} from 'react-router-dom';
import {Cartget,Cartdelete} from '../store/actions/cart';
import "./styles/cart.css";
import {Addorder} from '../store/actions/order';

const Cart = (props) => {

  const history=useHistory();

  useEffect(()=>{
    const id =localStorage.getItem('id');
    props.Cartget(id);
  },[])

  const userid = localStorage.getItem("id");

  const cartdelete = (id) =>{
    props.Cartdelete(id)
    const id1 =localStorage.getItem('id');  
    setTimeout(()=>{
      props.Cartget(id1);
    },200)
  }
  
  const order=()=>{
    const orderData = {
        "userid" : userid,
        "amount" : '2500'
    }
    props.Addorder(orderData,history);
}

var total = 0 ;
var pop;
  function seting(number) {

    var pop = total + number;
    total = total + number;
  console.log("123456789",pop);
  }
  
  console.log("totaltotaltotal",total)

  return (
    <div>
      <Header />
      <h2>Cart</h2>
      <p id="demo1"></p>
      <div className="cart">
        <table className="table">
          <tr>
            <th width="5%">No</th>
            <th>Product name</th>
            <th>Category</th>
            <th>Photo</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          {props.cartlist && props.cartlist.data && Object.values(props.cartlist.data).map((item,index)=>{
            return(
              // <tr>
                               <tr onLoad={()=>seting(item.qty * item.Product.price)}> 
              <td>{index+1}</td>
            <td>{item.Product.productname}</td>
            <td>{item.Product.category}</td>
            <td><img src={`http://localhost:3002/public/${item.Product.photo}`} style={{width:'60px',height:'60px',borderRadius:'10px'}}/></td>
            <td>{item.qty}</td>
            <td>{item.Product.price}</td>
            <td>{(item.qty * item.Product.price)}</td>
            <button type="button" class="btn btn-danger" style={{margin:'20px',outline:'0'}} onClick={()=>cartdelete(item.id)}>remove</button>
          </tr>
            )
          })
          }
              <tr>
                <td></td>
                <td colSpan="6  " style={{borderTop:'2px solid white'}}><h4 style
                ={{marginLeft:'1000px'}}>Amount : 2000</h4></td>
          </tr>
        </table>
      </div>
      <Link to="/productlist"><button type="button" class="btn btn-success" style={{outline:'0',marginRight:'840px',marginTop:'20px'}}>Buy product</button></Link>
      <Link to="/payment"><button type="button" class="btn btn-success" style={{outline:'0',marginTop:'20px',marginRight:'0px'}} onClick={()=>order()}>Process to Checkout</button></Link>
    </div>
  );
};

function mapStateToProps(state)
{
  return {
    cartlist:state.Cartreducer.cartlist
  }
}

function mapDispatchToProps(dispatch)
{
  return{

    Cartget:(id) => dispatch(Cartget(id)),
    Cartdelete:(id)=>dispatch(Cartdelete(id)),
    Addorder:(data,history)=>dispatch(Addorder(data,history))
  
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Cart))