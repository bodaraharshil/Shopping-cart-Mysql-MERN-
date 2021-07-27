import React from "react";
import {Link} from 'react-router-dom'
import "./styles/sidebar.css";
import Avtar from "react-avatar";
import Header from '../elements/header/header';


const Sidebar = () => {
  return (
    <div>
      <div className="sidebar" style={{float:'left'}}>
        <div className="admin">
          <Avtar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOc9VDs02ZrmIC7pS3WzBTvXl8UrI3jwAOVQ&usqp=CAU"
            size="45"
            round={true}
            style={{ float: "left"}}
          />
          <h3
            style={{
              color: "white",
              marginTop: "30px",
              marginLeft: "80px",
              // position: "absolute",
            }}
          >
            Harshil_bodara
          </h3>
        </div>
        <div className="bar-nav">
        <Link to="/"><h4
            style={{
              color: "white",
              marginTop: "30px",
              marginLeft: "20px",
              position: "absolute",
            }}
          >
            <i
              class="fa fa-tachometer"
              style={{ marginLeft: "20px" }}
              aria-hidden="true"
            ></i>
            &nbsp;Dashboard
          </h4>
          </Link>
        </div>
        <div className="bar-nav">
        <Link to="/product"><h4
            style={{
              color: "white",
              marginTop: "30px",
              marginLeft: "20px",
              position: "absolute",
            }}
          >
            <i
              class="fa fa-product-hunt"
              style={{ marginLeft: "20px" }}
              aria-hidden="true"
            ></i>
            &nbsp;Product
          </h4></Link>
        </div>
        <div className="bar-nav">
        <Link to="/category"><h4
            style={{
              color: "white",
              marginTop: "30px",
              marginLeft: "20px",
              position: "absolute",
            }}
          >
            <i
              class="fa fa-list-alt"
              style={{ marginLeft: "20px" }}
              aria-hidden="true"
            ></i>
            &nbsp;Category
          </h4></Link>
        </div>
        <div className="bar-nav">
        <Link to="/order"><h4
            style={{
              color: "white",
              marginTop: "30px",
              marginLeft: "20px",
              position: "absolute",
            }}
          >
            <i
              class="fa fa-tachometer"
              style={{ marginLeft: "20px" }}
              aria-hidden="true"
            ></i>
            &nbsp;Order
          </h4></Link>
        </div>
        <div className="bar-nav">
          <Link to="/user"><h4
            style={{
              color: "white",
              marginTop: "30px",
              marginLeft: "20px",
              position: "absolute",
            }}
          >
            <i
              class="fa fa-user"
              style={{ marginLeft: "20px" }}
              aria-hidden="true"
            ></i>
            &nbsp;Users
          </h4></Link>
        </div>
        <div className="bar-nav">
          <h4
            style={{
              color: "white",
              marginTop: "30px",
              marginLeft: "20px",
              position: "absolute",
            }}
          >
            <i
             class="fa fa-cog"
              style={{ marginLeft: "20px" }}
              aria-hidden="true"
            ></i>
            &nbsp;Setting
          </h4>
        </div>
        <div className="bar-nav">
          <h4
            style={{
              color: "white",
              marginTop: "30px",
              marginLeft: "20px",
              position: "absolute",
            }}
          >
            <i
              class="fa fa-sign-out"
              style={{ marginLeft: "20px" }}
              aria-hidden="true"
            ></i>
            &nbsp;Logout
          </h4>
        </div>
        </div>
        <div className='header'>     
        <Header/>
      </div>
    </div>
  );
};

export default Sidebar;
