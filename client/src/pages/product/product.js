import React, { useEffect } from 'react';
import Addbutton from '../button/addbutton';
import {Link,useHistory,withRouter} from 'react-router-dom';
import Sidebar from '../../sidebar/sidebar';
import {connect} from 'react-redux';
import {Productget,Productdelete} from '../../store/actions/product';

const Product = (props) => {
 
  const history = useHistory();
  
  useEffect(()=>{
    props.Productget();
  },[]) 

  const categorydelete = (id) => {
    props.Productdelete(id);
    setTimeout(() => {
      props.Productget();
    }, 200);
}

const updatedata=(item)=>{
  history.push({ pathname: "/addproduct", state: item });
}


  return (
      <React.Fragment>
      <Sidebar />
        <div style={{
            marginLeft:'400px'
        }}>
            <Link to="/addproduct"><Addbutton/></Link>
            <table class="table" style={{
                width:'1300px'
            }}>
  <thead>
    <tr>
      <th style={{textAlign:'center'}} scope="col">Id</th>
      <th style={{textAlign:'center'}} scope="col">Product name</th>
      <th style={{textAlign:'center'}} scope="col">Category</th>
      <th style={{textAlign:'center'}} scope="col">image</th>
      <th style={{textAlign:'center'}} scope="col">Price</th>
      <th style={{textAlign:'center'}} scope="col">product detail</th>
      <th style={{textAlign:'center'}} scope="col">CreatedAt</th>
      <th style={{textAlign:'center'}} scope="col">Updatedat</th>
      <th style={{textAlign:'center'}} scope="col">Action</th>      
    </tr>
  </thead>
  <tbody>
    {
      props.prolist.data && props.prolist.data.map((item,index)=>{
        return(
          <tr>
      <th style={{textAlign:'center'}} scope="row">{index+1}</th>
        <td style={{textAlign:'center'}}>{item.productname}</td>
        <td style={{textAlign:'center'}}>{item.category}</td>
        <td style={{textAlign:'center'}}><img src={`http://localhost:3002/public/${item.photo}`} style={{width:'60px',height:'60px'}}/></td>
        <td style={{textAlign:'center'}}>{item.price}</td>
        <td style={{textAlign:'center'}}>{item.productdetail}</td>
        <td style={{textAlign:'center'}}>{item.createdAt}</td>
        <td style={{textAlign:'center'}}>{item.updatedAt}</td>
      <td style={{textAlign:'center'}}><i class="fa fa-pencil-square-o" style={{color:'green',fontSize:'20px',cursor:'pointer'}} aria-hidden="true" onClick={()=>updatedata(item)}></i><i class="fa fa-trash" style={{color:'red',fontSize:'20px',marginLeft:'10px',cursor:'pointer'}} onClick={()=>categorydelete(item.id)} aria-hidden="true"></i></td>
    </tr>
        )
      })
    }
 </tbody>
</table>
        </div>
        </React.Fragment>
    )
}


function mapStateToProps(state) {
  return {
    prolist: state.Productreducer.prolist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Productget:()=>dispatch(Productget()),
    Productdelete:(id,history) => dispatch(Productdelete(id,history))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));

