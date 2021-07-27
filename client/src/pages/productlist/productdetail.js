import React,{useEffect, useState} from 'react'
import Sidebar from './sidebar'
import Header from '../../elements/header/header';
import './styles/productdetail.css'
import { Link,useHistory,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {Productdetailget} from '../../store/actions/product';
import {Addcart} from '../../store/actions/cart';

const Productdetail = (props) => {

    const id = window.location.href.replace("http://localhost:3000/productdetail/","")
    const history=useHistory();
    const [qty,setqty] = useState('');

    const userid = localStorage.getItem("id");

    useEffect(() => {
        props.Productdetailget(id);
      }, []);

      const cart=(item)=>{
        const cartData = {
            "productid": item.id,
            "userid" : userid,
            "qty" : qty
        }
        props.Addcart(cartData);
    }

    return (
        <React.Fragment>
            <div>
             <Header/>
            <Sidebar/> 
            <h2>Product detail</h2>  
            {
            props.prodetail && Object.values(props.prodetail).map((item,index)=>{
                return(
                    <React.Fragment>
                        <div>
                        <div className="product-image">
                <img src={`http://localhost:3002/public/${item.photo}`}
                className="product-im"
                />
            </div> 
            <div className="product-detail">
                <div className="productname">
                <h3 style={{float:'left',marginTop:'5px'}}>{item.productname}</h3>
                </div>
                <div className="productname">
                <h3 style={{float:'left',marginTop:'5px'}}>${item.price}</h3>
                </div>
                <div className="productname">
                    <h3 style={{float:'left',marginTop:'5px'}}>Qty:</h3><input type="number" style={{outline:'0',marginTop:'5px',marginRight:'300px',width:'20%'}}  min='1' onChange={(e)=>setqty(e.target.value)} max='20'/>
                </div>
                <div className="productname">
                    <h3 style={{float:'left',marginTop:'5px'}}><button type="button" class="btn btn-danger" style={{outline:'0',width:'100px',fontSize:'20px'}}>Buy  &nbsp;<i class="fa fa-credit-card" aria-hidden="true"></i></button><Link to="/cart"><button type="button" class="btn btn-success" style={{marginLeft:'30px',outline:'0',width:'160px',fontSize:'20px'}} onClick={()=>cart(item)}>Add to Cart  <i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button></Link></h3>
                </div>
                <div className="productname">
                    <h3 style={{float:'left',marginTop:'5px'}}>Dell</h3>
                </div>
                <div className="productname">
                    <h3 style={{float:'left',marginTop:'5px'}}>Description:</h3><br/>
                    <div className="discription">
                <h5 style={{float:'left'}}>{item.productdetail}</h5>
                    </div>
                </div>
            </div>
            <div className="bo">
            </div>
            <div className="comment">
                <h4 style={{float:'left'}}>Comment:</h4>
                <input type="text" style={{width:'100%',float:'left',marginTop:'20px',lineHeight:'30px',outline:'0'}} placeholder="Enter comment"/>
                <input type="text" style={{width:'48%',float:'left',marginTop:'20px',lineHeight:'30px',outline:'0'}} placeholder="Enter comment"/>
                <input type="text" style={{width:'48%',float:'left',marginTop:'20px',lineHeight:'30px',outline:'0',marginLeft:'4%'}} placeholder="Enter comment"/>
                <button type="button" class="btn btn-success" style={{float:'left',marginTop:'20px',outline:'0',width:'100px'}}>Submit</button>
            </div>
            </div>
                    </React.Fragment>
                );  
            })
            }
            <br/>
            <br/>
            <br/>
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(state)
{
    return {
        prodetail:state.Productreducer.prodetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Productdetailget: (id) => dispatch(Productdetailget(id)),
        Addcart:(data,history) => dispatch(Addcart(data,history))
    };
  }

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Productdetail))