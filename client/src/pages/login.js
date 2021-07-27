import React from "react";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage } from "formik";
import { Userlogin } from "../store/actions/auth";
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory,withRouter } from "react-router-dom";
import {connect} from 'react-redux';

const Signin = (props) => {

  const history=useHistory();
  const senddata = (fields) => {
    props.Userlogin(
      {
        username: fields.username,
        password: fields.password,
      },
      history
    );
  };

return (
  <React.Fragment>
    <div>
    <div class="modal-dialog" role="document" style={{ width: "20%" }}>
          <div class="modal-content">
            <div>
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string().required("username is required"),
                  password: Yup.string().required("password is required"),
                })}
                onSubmit={(fields) => {
                  senddata(fields)
                  toast.success("You are Login successfuly")
                }}
                render={({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit, 
                }) => (
                  <div className="mycard">
                    <form method="post" onSubmit={handleSubmit}>
                      <div className="card auth-card imput-field">
                        <br />
                        <h2 style={{ fontWeight: "bolder", color: "#333",marginLeft:'140px' }}>
                          Login
                        </h2>
                        <br />
                        <Field
                          name="username"
                          type="text"
                          value={values.username}
                          onChange={handleChange}
                          placeholder="username"
                          className={
                            "form-control" +
                            (errors.username && touched.username
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <font color="red">
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="invalid-feedback"
                          />
                        </font>
                        <br />
                        <br />
                        <Field
                          name="password"
                          id="myInput"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          placeholder="password"
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <font color="red">
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="invalid-feedback"
                          />
                        </font>
                        <br />
                        <p>
                          <label>
                            <input type="checkbox" />
                            <span>show password</span>
                          </label>
                        </p>
                        <br />
                        <button
                          className="btn waves-effect waves-light"
                          type="submit"
                          style={{
                            background: "#333",
                            color: "white",
                            width:'90%',
                            marginLeft:'5%',
                            outline: "0",
                          }}
                          name="action"
                        >
                          Login
                        </button>
                        <ToastContainer/>
                        <br />
                        <br/>
                      </div>
                    </form>
                  </div>
                )}
              />
            <br/> 
            </div>
          </div>
        </div>
    </div>
  </React.Fragment>
);
};

function mapDispatchToProps(dispatch) {
  return {
    Userlogin: (data, history) => dispatch(Userlogin(data, history)),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Signin));
