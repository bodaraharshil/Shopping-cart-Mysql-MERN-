import React, { useState } from "react";
import { Field, Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { withRouter,useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom' 
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import { userSignup } from "../store/actions/auth";

const Signup = (props) => {
  const [photo, setphoto] = useState(null);

  const history = useHistory();

  const senddata = (fields) => {  
    console.log("photo", photo);
    let formData = new FormData();

    formData.append("firstname", fields.firstname);
    formData.append("lastname", fields.lastname);
    formData.append("email", fields.email);
    formData.append("username", fields.username);
    formData.append("photo", photo);
    formData.append("password", fields.password);
    formData.append("cpassword", fields.cpassword);
    props.userSignup(formData, history);
  };

  return (
    <React.Fragment>
      <div>
        <div class="modal-dialog" role="document" style={{ width: "20%" }}>
          <div class="modal-content">
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                username: "",
                password: "",
                cpassword: "",
              }}
              validationSchema={Yup.object().shape({
                firstname: Yup.string().required("firstname is required"),
                lastname: Yup.string().required("lastname is required"),
                email: Yup.string()
                  .email("Invalid email")
                  .required("email is required"),
                username: Yup.string().required("username is required"),
                password: Yup.string()
                  .min(6, "password must be at least 6 characters.")
                  .required("password is required"),
                cpassword: Yup.string()
                  .oneOf([Yup.ref("password"), null], "passwords must match")
                  .required("confirm password is required"),
              })}
              onSubmit={(fields) => {
                senddata(fields);
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
                      <h2 style={{ fontWeight: "bolder", color: "#333" }}>
                        Sign up
                      </h2>
                      <Field
                        name="firstname"
                        type="text"
                        value={values.firstname}
                        onChange={handleChange}
                        placeholder="firstname"
                        className={
                          "form-control" +
                          (errors.firstname && touched.firstname
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="firstname"
                          component="div"
                          className="invalid-feedback"
                        />
                      </font>
                      <br />
                      <Field
                        name="lastname"
                        type="text"
                        value={values.lastname}
                        onChange={handleChange}
                        placeholder="lastname"
                        className={
                          "form-control" +
                          (errors.lastname && touched.lastname
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="lastname"
                          component="div"
                          className="invalid-feedback"
                        />
                      </font>
                      <br />
                      <Field
                        name="email"
                        type="text"
                        value={values.email}
                        placeholder="email"
                        onChange={handleChange}
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback "
                        />
                      </font>
                      <br />
                      <Field
                        name="username"
                        type="text"
                        value={values.username}
                        placeholder="username"
                        onChange={handleChange}
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
                          className="invalid-feedback "
                        />
                      </font>
                      <br />
                      <form>
                        <div class="form-group">
                          <input
                            type="file"
                            style={{ marginLeft: "100px", lineHeight: "30px" }}
                            onChange={(e)=>setphoto(e.target.files[0])}
                          />
                        </div>
                      </form>
                      <Field
                        name="password"
                        id="myInput"
                        type="password"
                        placeholder="password"
                        value={values.password}
                        onChange={handleChange}
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
                          className="invalid-feedback "
                        />
                      </font>
                      <br />
                      <p>
                        <label>
                          <input type="checkbox" />
                          <span>show password</span>
                        </label>
                      </p>

                      <Field
                        name="cpassword"
                        type="password"
                        placeholder="Confirm password"
                        values={values.cpassword}
                        className={
                          "form-control" +
                          (errors.cpassword && touched.cpassword
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="cpassword"
                          component="div"
                          className="invalid-feedback "
                        />
                      </font>
                      <br />
                      <br />
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        style={{ background: "#333",color:'white',outline:'0' }}
                        name="action"
                      >
                        Sign up
                      </button>
                      <ToastContainer />
                      <br />
                    </div>
                  </form>
                </div>
              )}
            />
            <br />
                  <Link to="/"><button style={{marginLeft:"280px",marginTop:"10px",color:'black',fontWeight:'bold'}} className="btn waves-effect waves-light-#64b5f6 blue darken-1" type="submit" name="action">Back
                </button></Link>
                <br/>
                <br/> 
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.AuthReducers.showLoginModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userSignup: (data, history) => dispatch(userSignup(data, history)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
