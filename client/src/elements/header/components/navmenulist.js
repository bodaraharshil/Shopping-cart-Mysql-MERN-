import React from "react";
import Searchform from "./searchform";
import { Link, useHistory,withRouter } from "react-router-dom";
import {Logout} from '../../../store/actions/auth';
import {connect} from 'react-redux';
const Navmenulist = (props) => {

  const history=useHistory();

  const logout = () => {
    props.Logout(history);
  };

  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header"></div>
            <ul className="nav navbar-nav">
              <li>
                <a>
                  <Link to="/">
                    <font color="white">
                      <span class="glyphicon glyphicon-home"></span> Home
                    </font>
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/productlist">
                    <font color="white">
                      <span class="glyphicon glyphicon-list"></span> Product
                      List
                    </font>
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/abouts">
                    <font color="white">
                      <span class="glyphicon glyphicon-user"></span> Abouts
                    </font>
                  </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/contact">
                    <font color="white">
                      <span class="glyphicon glyphicon-phone"></span> Contact
                    </font>
                  </Link>
                </a>
              </li>
            </ul>
            <Searchform />
            
              {localStorage.getItem("jwt") ? 
                (  <ul class="nav navbar-nav navbar-right">
                             <li
                data-toggle="modal"
                data-target="#exampleModal"
                style={{ cursor: "pointer" }}
              >
                <a>
                <Link to="/cart">
                  <font color="white">
                    <span class="glyphicon glyphicon-shopping-cart"></span> cart
                  </font>
                </Link>
                </a>
              </li>
                <li onClick={logout} style={{cursor:'pointer'}}>
                <a>
                    <font color="white">
                      <span class="glyphicon glyphicon-log-out"></span> Logout
                    </font>
                </a>
              </li>              
  
              </ul>)
              :
                (
                  <ul class="nav navbar-nav navbar-right">
                <li>
                <a>
                  <Link to="/signup">
                    <font color="white">
                      <span class="glyphicon glyphicon-user"></span> Sign up
                    </font>
                  </Link>
                </a>
              </li>
              <li
                data-toggle="modal"
                data-target="#exampleModal"
                style={{ cursor: "pointer" }}
              >
                <a>
                <Link to="/signin">
                  <font color="white">
                    <span class="glyphicon glyphicon-log-in"></span> Login
                  </font>
                </Link>
                </a>
              </li>
              
            </ul>)
            }

          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.AuthReducers.isLoggedIn,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    Logout: (history) => dispatch(Logout(history)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navmenulist));

