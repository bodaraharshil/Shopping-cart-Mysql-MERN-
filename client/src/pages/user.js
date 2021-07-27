import React, { useEffect } from 'react';
import {Link,useHistory,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Sidebar from '../sidebar/sidebar';
import { Userget,Userdelete } from '../store/actions/user';

const User = (props) => {
    
    useEffect(()=>{
        props.Userget();
    },[])

    const userdelete = (id) =>{
        props.Userdelete(id);
        setTimeout(() => {
            props.Userget();
          }, 200);
    }

  return (
      <React.Fragment>
      <Sidebar />
        <div style={{
            marginLeft:'400px'

        }}>
            <table class="table" style={{
                width:'1300px'
            }}>
  <thead>
    <tr>
      <th style={{textAlign:'center'}} scope="col">Id</th>
      <th style={{textAlign:'center'}} scope="col">First name</th>
      <th style={{textAlign:'center'}} scope="col">Last name</th>
      <th style={{textAlign:'center'}} scope="col">Email</th>
      <th style={{textAlign:'center'}} scope="col">User name</th>
      <th style={{textAlign:'center'}} scope="col">CreatedAt</th>
      <th style={{textAlign:'center'}} scope="col">Action</th>      
    </tr>
  </thead>
  <tbody>
      {props.userlist.data && props.userlist.data.map((item,index)=>{
          return(
            <tr>
      <th style={{textAlign:'center'}} scope="row">{index+1}</th>
          <td style={{textAlign:'center'}}>{item.firstname}</td>
          <td style={{textAlign:'center'}}>{item.lastname}</td>
          <td style={{textAlign:'center'}}>{item.email}</td>
          <td style={{textAlign:'center'}}>{item.username}</td>
          <td style={{textAlign:'center'}}>{item.createdAt}</td>
      <td style={{textAlign:'center'}}><i class="fa fa-trash" style={{color:'red',fontSize:'20px',marginLeft:'10px',cursor:'pointer'}} aria-hidden="true" onClick={()=>userdelete(item.id)}></i></td>
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
    userlist: state.Userreducer.userlist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Userget:()=>dispatch(Userget()),
    Userdelete:(id)=>dispatch(Userdelete(id))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));

