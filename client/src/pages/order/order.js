import React,{useEffect} from "react";
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import Sidebar from "../../sidebar/sidebar";
import { Orderget,Cartdelete } from '../../store/actions/order';

const Order = (props) => {

  useEffect(()=>{
      props.Orderget();
  },[])

  const orderdelete = (id) =>{
    props.Cartdelete(id);
    setTimeout(() => {
      props.Orderget();
    }, 200);
  }

  return (
    <React.Fragment>
      {" "}
      <Sidebar />
      <div
        style={{
          marginLeft: "400px",
        }}
      >
        <h1 style={{ color: "white" }}>jkjkjk</h1>
        <table
          class="table"
          style={{
            width: "1300px",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "center" }} scope="col">
                Id
              </th>
              <th style={{ textAlign: "center" }} scope="col">
                Productid
              </th>
              <th style={{ textAlign: "center" }} scope="col">
                userid
              </th>
              <th style={{ textAlign: "center" }} scope="col">
                Qty
              </th>
              <th style={{ textAlign: "center" }} scope="col">
                CreatedAt
              </th>
              <th style={{ textAlign: "center" }} scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {props.orderlist.data && props.orderlist.data.map((item,index)=>{
              return (
                <tr>
              <th style={{ textAlign: "center" }} scope="row">
                {index+1}
              </th>
              <td style={{ textAlign: "center" }}>{item.productid}</td>
              <td style={{ textAlign: "center" }}>{item.userid}</td>
              <td style={{ textAlign: "center" }}>{item.qty}</td>
              <td style={{ textAlign: "center" }}>{item.createdAt}</td>
              <td style={{ textAlign: "center" }}>
                <i
                  class="fa fa-trash"
                  style={{
                    color: "red",
                    fontSize: "20px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  aria-hidden="true"
                  onClick={()=>orderdelete(item.id)}
                ></i>
              </td>
            </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

function mpaStateToProps(state)
{
  return {
    orderlist:state.Orderreducer.orderlist,
  }
}

function mapDispatchToProps(dispatch)
{
  return{
    Orderget:()=>dispatch(Orderget()),
    Cartdelete:(id)=>dispatch(Cartdelete(id))
  }
}

export default withRouter(connect(mpaStateToProps,mapDispatchToProps)(Order))