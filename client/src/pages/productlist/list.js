import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "../../elements/header/header";
import "./styles/list.css";
import { Cateproget } from "../../store/actions/product";

const List = (props) => {
 
  const history = useHistory();
  const cate = window.location.href.replace("http://localhost:3000/list/","")

  useEffect(() => {
    props.Cateproget(cate);
  }, [cate]);

  const product=(item)=>{
    history.push({ pathname: `/productdetail/${item}`, state: item});
}

  return (
    <React.Fragment>
      <div>
        <Header />
        <Sidebar />
        <div>
            {props.catepro.data && Object.values(props.catepro.data).map((item,index)=>{
             return(
              <React.Fragment>
                          <div className="pro-list" onClick={()=>product(item.id)} style={{cursor:'pointer'}}>
                <div className="cate-pro">
              <img
                src={`http://localhost:3002/public/${item.photo}`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="price">
              <p>
                <h4 style={{ marginRight: "80px", marginTop: "20px" }}>
                  {item.productname}
                </h4>
             <h4 style={{ marginTop: "-30px",marginLeft:'30px' }}>${item.price}</h4>
              </p>
            </div>
          </div>
              </React.Fragment>
              )
            })

            }
        </div> 
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    catepro: state.Productreducer.catepro,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    Cateproget: (cate) => dispatch(Cateproget(cate)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
