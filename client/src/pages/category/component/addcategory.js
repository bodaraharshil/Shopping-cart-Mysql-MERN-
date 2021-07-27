import React, { useEffect, useState } from "react";
import { Field, ErrorMessage, Formik } from "formik";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link, withRouter, useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import {
  Addcategory,
  Categoryget,
  Updatecategory,
} from "../../../store/actions/category";

const AddCategory = (props) => {
  const history = useHistory();
  const [updatecategory, setupdatecategory] = useState();
  const location = useLocation();
  const [UpdatedId, setUpdatedId] = useState("");

  const senddata = (fields) => {
    const formData = new FormData();
    formData.append("category", fields.category);
    props.Addcategory(fields.category, history);
    props.Categoryget();
  };

  const updatedata = (fields) => {
    const formData = new FormData();
    formData.append("category", fields.category);
    props.Updatecategory(UpdatedId, fields.category, history);
  };

  useEffect(() => {
    if (location.state) {
      const data = location.state;
      setupdatecategory(data.category);
      setUpdatedId(data.id);
    }
  }, []);

  return (
    <div>
      {location.state ? (
        <div class="modal-dialog" role="document" style={{ width: "20%" }}>
          <div class="modal-content">
            <Formik
              initialValues={{
                category: location.state ? location.state.category : "",
              }}
              validationSchema={Yup.object().shape({
                category: Yup.string().required("category is required"),
              })}
              onSubmit={(fields) => {
                toast.success("successfuly add category");
                updatedata(fields);
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
                      <h2
                        style={{
                          fontWeight: "bolder",
                          color: "#333",
                          marginLeft: "80px",
                        }}
                      >
                        UpdateCategory
                      </h2>
                      <Field
                        name="category"
                        type="text"
                        value={values.category}
                        onChange={handleChange}
                        placeholder="category"
                        className={
                          "form-control" +
                          (errors.category && touched.category
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="category"
                          component="div"
                          className="invalid-feedback"
                        />
                      </font>
                      <br />
                      <br />
                      <br />
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        style={{
                          background: "#333",
                          color: "white",
                          outline: "0",
                          width: "90%",
                          marginLeft: "5%",
                        }}
                        name="action"
                      >
                        Add category
                      </button>
                      {/* <ToastContainer /> */}
                      <br />
                      <br />
                      <Link to="/category">
                        <button
                          style={{
                            marginLeft: "280px",
                            marginTop: "10px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                          className="btn waves-effect waves-light-#64b5f6 blue darken-1"
                          type="submit"
                          name="action"
                        >
                          Cancel
                        </button>
                      </Link>
                      <br />
                      <br />
                    </div>
                  </form>
                </div>
              )}
            />
          </div>
        </div>
      ) : (
        <div class="modal-dialog" role="document" style={{ width: "20%" }}>
          <div class="modal-content">
            <Formik
              initialValues={{
                category: "",
              }}
              validationSchema={Yup.object().shape({
                category: Yup.string().required("category is required"),
              })}
              onSubmit={(fields) => {
                senddata(fields);
                toast.success("successfuly add category");
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
                      <h2
                        style={{
                          fontWeight: "bolder",
                          color: "#333",
                          marginLeft: "110px",
                        }}
                      >
                        Category
                      </h2>
                      <Field
                        name="category"
                        type="text"
                        value={values.category}
                        onChange={handleChange}
                        placeholder="category"
                        className={
                          "form-control" +
                          (errors.category && touched.category
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="category"
                          component="div"
                          className="invalid-feedback"
                        />
                      </font>
                      <br />
                      <br />
                      <br />
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        style={{
                          background: "#333",
                          color: "white",
                          outline: "0",
                          width: "90%",
                          marginLeft: "5%",
                        }}
                        name="action"
                      >
                        Add category
                      </button>
                      {/* <ToastContainer /> */}
                      <br />
                      <br />
                      <Link to="/category">
                        <button
                          style={{
                            marginLeft: "280px",
                            marginTop: "10px",
                            color: "black",
                            fontWeight: "bold",
                          }}
                          className="btn waves-effect waves-light-#64b5f6 blue darken-1"
                          type="submit"
                          name="action"
                        >
                          Cancel
                        </button>
                      </Link>
                      <br />
                      <br />
                    </div>
                  </form>
                </div>
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.Categoryreducer.showLoginModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Addcategory: (data, history) => dispatch(Addcategory(data, history)),
    Updatecategory: (id, data, history) => dispatch(Updatecategory(id, data, history)),
    Categoryget: () => dispatch(Categoryget()),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddCategory)
);
