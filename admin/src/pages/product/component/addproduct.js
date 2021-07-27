import React, { useState,useEffect } from "react";
import { Field, Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { withRouter,useHistory, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom' 
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import { Addproduct,Updateproduct, Productget } from "../../../store/actions/product";
import {Categoryget} from '../../../store/actions/category';

const Signup = (props) => {
  const [photo, setphoto] = useState(null);
  const [cate,setcate] = useState();
  const  location = useLocation();

  const[updateproductname,setupdateproductname] = useState();
  const[updateprice,setupdateprice] = useState();
  const[updateproductdetail,setupdateproductdetail] = useState();
  const [UpdatedId, setUpdatedId] = useState("");

  useEffect(()=>{
    props.Categoryget();
  },[])

  const history = useHistory();

  const senddata = (fields) => {  
    let formData = new FormData();
    formData.append("productname", fields.productname);
    formData.append("category",cate);
    formData.append("photo", photo);
    formData.append("price", fields.price);
    formData.append("productdetail", fields.productdetail);
    props.Addproduct(formData, history);
    props.Productget();
  };

  const updatedata = (fields) => {
    const formData = new FormData();
    formData.append("productname", fields.productname);
    formData.append("category", cate);
    formData.append("price",fields.price);
    formData.append("productdetail",fields.productdetail);
    formData.append("photo",photo);
    props.Updateproduct(UpdatedId,formData, history);
  };

  useEffect(()=>{
    if(location.state)
    {
      const data = location.state;
      setupdateproductname(data.productname);
      setupdateprice(data.price);
      setupdateproductdetail(data.productdetail);
      setUpdatedId(data.id);
    }
  },[]);

  return (
    <React.Fragment>
      <div>
        {
          location.state ? 
            (
              <div class="modal-dialog" role="document" style={{ width: "20%" }}>
          <div class="modal-content">
            <Formik
              initialValues={{
                productname: location.state ? location.state.productname : "",
                price: location.state ? location.state.price : "",
                productdetail: location.state ? location.state.productdetail : "",
              }}
              validationSchema={Yup.object().shape({
                productname: Yup.string().required("productname is required"),
                price: Yup.string()
                  .required("price is required"),
                productdetail: Yup.string()
                  .required("product detail is required"),
              })}
              onSubmit={(fields) => {
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
                      <h2 style={{ fontWeight: "bolder", color: "#333",marginLeft:'80px' }}>
                        Product Add
                      </h2>
                      <br/> 
                      <Field
                        name="productname"
                        type="text"
                        value={values.productname}
                        onChange={handleChange}
                        placeholder="product name"
                        className={
                          "form-control" +
                          (errors.productname && touched.productname
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="productname"
                          component="div"
                          className="invalid-feedback"
                        />
                      </font>
                      <br />
                      <select
                        name='cat'
                        style={{
                          width: "200px",
                          outline: "0",
                          cursor: "pointer",
                          marginLeft: "80px",
                        }}
                        onChange={ (e) => setcate(e.target.value)}
                      >
                        <option>--------------category--------------</option>
                        {props.catelist.data &&
                          props.catelist.data.map((item, index) => {
                            return <option value={item.category}>{item.category}</option>;
                          })}
                      </select>
                      <br/>
                      <br />
                     
                      <Field
                        name="price"
                        id="myInput"
                        type="price"
                        placeholder="price"
                        value={values.price}
                        onChange={handleChange}
                        className={
                          "form-control" +
                          (errors.price && touched.price
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="price"
                          component="div"
                          className="invalid-feedback "
                        />
                      </font>
                      <br />
                      <Field
                        name="productdetail"
                        type="price"
                        placeholder="product detail"
                        values={values.productdetail}
                        className={
                          "form-control" +
                          (errors.productdetail && touched.productdetail
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="productdetail"
                          component="div"
                          className="invalid-feedback "
                        />
                      </font>
                      <br/>
                      <form>
                        <div class="form-group">
                          <input
                            type="file"
                            style={{ marginLeft: "100px", lineHeight: "30px" }}
                            onChange={(e)=>setphoto(e.target.files[0])}
                          />
                        </div>
                      </form>
                      <br />
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        style={{ width:'90%',marginLeft:'5%',background: "#333",color:'white',outline:'0' }}
                        name="action"
                      >
                       Add
                      </button>
                      <ToastContainer />
                      <br />
                    </div>
                  </form>
                </div>
              )}
            />
                  <Link to="/"><button style={{marginLeft:"280px",marginTop:"10px",color:'black',fontWeight:'bold'}} className="btn waves-effect waves-light-#64b5f6 blue darken-1" type="submit" name="action">Back
                </button></Link>
                <br/>
                <br/> 
          </div>
        </div>
            )
          :
            (
              <div class="modal-dialog" role="document" style={{ width: "20%" }}>
          <div class="modal-content">
            <Formik
              initialValues={{
                productname: "",
                price: "",
                productdetail: "",
              }}
              validationSchema={Yup.object().shape({
                productname: Yup.string().required("productname is required"),
                price: Yup.string()
                  .required("price is required"),
                productdetail: Yup.string()
                  .required("product detail is required"),
              })}
              onSubmit={(fields) => {
                senddata(fields);
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
                      <h2 style={{ fontWeight: "bolder", color: "#333",marginLeft:'80px' }}>
                        Product Add
                      </h2>
                      <br/> 
                      <Field
                        name="productname"
                        type="text"
                        value={values.productname}
                        onChange={handleChange}
                        placeholder="product name"
                        className={
                          "form-control" +
                          (errors.productname && touched.productname
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="productname"
                          component="div"
                          className="invalid-feedback"
                        />
                      </font>
                      <br />
                      <select
                        name='cat'
                        style={{
                          width: "200px",
                          outline: "0",
                          cursor: "pointer",
                          marginLeft: "80px",
                        }}
                        onChange={ (e) => setcate(e.target.value)}
                      >
                        <option>--------------category--------------</option>
                        {props.catelist.data &&
                          props.catelist.data.map((item, index) => {
                            return <option value={item.category}>{item.category}</option>;
                          })}
                      </select>
                      <br/>
                      <br />
                     
                      <Field
                        name="price"
                        id="myInput"
                        type="price"
                        placeholder="price"
                        value={values.price}
                        onChange={handleChange}
                        className={
                          "form-control" +
                          (errors.price && touched.price
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="price"
                          component="div"
                          className="invalid-feedback "
                        />
                      </font>
                      <br />
                      <Field
                        name="productdetail"
                        type="price"
                        placeholder="product detail"
                        values={values.productdetail}
                        className={
                          "form-control" +
                          (errors.productdetail && touched.productdetail
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <font color="red">
                        <ErrorMessage
                          name="productdetail"
                          component="div"
                          className="invalid-feedback "
                        />
                      </font>
                      <br/>
                      <form>
                        <div class="form-group">
                          <input
                            type="file"
                            style={{ marginLeft: "100px", lineHeight: "30px" }}
                            onChange={(e)=>setphoto(e.target.files[0])}
                          />
                        </div>
                      </form>
                      <br />
                      <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        style={{ width:'90%',marginLeft:'5%',background: "#333",color:'white',outline:'0' }}
                        name="action"
                      >
                       Add
                      </button>
                      <ToastContainer />
                      <br />
                    </div>
                  </form>
                </div>
              )}
            />
                  <Link to="/"><button style={{marginLeft:"280px",marginTop:"10px",color:'black',fontWeight:'bold'}} className="btn waves-effect waves-light-#64b5f6 blue darken-1" type="submit" name="action">Back
                </button></Link>
                <br/>
                <br/> 
          </div>
        </div>
            )
        }

      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.Productreducer.showLoginModal,
    catelist:state.Categoryreducer.catelist  
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Addproduct: (data, history) => dispatch(Addproduct(data, history)),
    Updateproduct: (id, data, history) => dispatch(Updateproduct(id, data, history)),
    Productget:()=>dispatch(Productget()),
    Categoryget:() => dispatch(Categoryget())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
