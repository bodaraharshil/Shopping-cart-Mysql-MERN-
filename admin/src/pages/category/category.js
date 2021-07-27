import React, { useEffect } from "react";
import Addbutton from "../button/addbutton";
import Sidebar from "../../sidebar/sidebar";
import {connect} from 'react-redux';
import {useHistory, withRouter} from 'react-router-dom'
import {Categoryget,Categorydelete} from '../../store/actions/category';

import {Link} from 'react-router-dom';

const Category = (props) => {

  const history=useHistory();

  useEffect(()=>{
    props.Categoryget();
  },[])

  const categorydelete = (id) => {
    props.Categorydelete(id);
    setTimeout(() => {
      props.Categoryget();
    }, 200);
}

  const updatedata=(item)=>{
      history.push({ pathname: "/addcategory", state: item });
  }

  return (
    <React.Fragment>
      <Sidebar />
      <div
        style={{
          marginLeft: "400px",
        }}
      >
        <Link to="/addcategory"><Addbutton /></Link>
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
                Category name
              </th>
              <th style={{ textAlign: "center" }} scope="col">
                createdAt
              </th>
              <th style={{ textAlign: "center" }} scope="col">
                updatedAt
              </th>
              <th style={{ textAlign: "center" }} scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              props.catelist.data && props.catelist.data.map((item,index)=>{
                return(
                  <React.Fragment>
                  <tr>
                  <th style={{ textAlign: "center" }} scope="row">
                    {index+1}
                  </th>
                <td style={{ textAlign: "center" }}>{item.category}</td>
                <td style={{ textAlign: "center" }}>{item.createdAt}</td>
                <td style={{ textAlign: "center" }}>{item.updatedAt}</td>
                  <td style={{ textAlign: "center" }}>
                    <i
                      class="fa fa-pencil-square-o"
                      style={{
                        color: "green",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={()=>updatedata(item)}
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-trash"
                      style={{
                        color: "red",
                        fontSize: "20px",
                        marginLeft: "10px",
                        cursor: "pointer",
                      }}
                      onClick={()=>categorydelete(item.id)}
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
                </React.Fragment>
                )    
              })
            }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};


function mapStateToProps(state) {
  return {
    catelist: state.Categoryreducer.catelist, 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Categoryget: () => dispatch(Categoryget()),
    Categorydelete:(id,history)=>dispatch(Categorydelete(id,history))

  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));

