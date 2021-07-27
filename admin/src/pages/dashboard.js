import React,{useEffect} from 'react'
import './style.css'
import Sidebar from '../sidebar/sidebar';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Productget} from '../store/actions/product';
import {Categoryget} from '../store/actions/category';
import {Allorderget} from '../store/actions/order';
const Dashboard = (props) => {

    useEffect(()=>{
        props.Productget();
        props.Categoryget();
        props.Allorderget();
    },[])

    return (
        <React.Fragment>
      <Sidebar />
        <div>   
            <div className='total'>
                <div className='totalp'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpLQV12FebbMApnPzjJ4cOlIU6Psctmp7sPg&usqp=CAU"  style={{width:"150px",height:"80px",marginLeft:'240px',marginTop:'20px',borderRadius:'5px',position:'absolute'}}/>
                    <h3 style={{marginLeft:'20px',position:"absolute",marginTop:'100px'}}>Total Products</h3>
                    <h4 style={{position:'absolute',marginTop:'140px',marginLeft:'20px'}}><i class="fa fa-list" aria-hidden="true"></i>&nbsp;&nbsp;{props.prolist.data && props.prolist.data.length}</h4>
                </div>
            </div>
            <div className='total'>
                <div className='totalp'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfFA-0mz60BRCHZbRd8cN9fnCCBlKaY19y4A&usqp=CAU"  style={{width:"150px",height:"80px",marginLeft:'240px',marginTop:'20px',borderRadius:'5px',position:'absolute'}}/>
                    <h3 style={{marginLeft:'20px',position:"absolute",marginTop:'100px'}}>Total Categorys</h3>
    <h4 style={{position:'absolute',marginTop:'140px',marginLeft:'20px'}}><i class="fa fa-list" aria-hidden="true"></i>&nbsp;&nbsp;{props.catelist.data && props.catelist.data.length}</h4>
                </div>
            </div>
            <div className='total'>
                <div className='totalp'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL4AoY-c-IpyMe4eo9uJMzmw5H856YXkqI5w&usqp=CAU"  style={{width:"150px",height:"80px",marginLeft:'240px',marginTop:'20px',borderRadius:'5px',position:'absolute'}}/>
                    <h3 style={{marginLeft:'20px',position:"absolute",marginTop:'100px'}}>Total Orders</h3>
    <h4 style={{position:'absolute',marginTop:'140px',marginLeft:'20px'}}><i class="fa fa-list" aria-hidden="true"></i>&nbsp;&nbsp;{props.allorder.data && props.allorder.data.length}</h4>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

function mapStateToProps(state)
{
    return {
        prolist: state.Productreducer.prolist,
        catelist: state.Categoryreducer.catelist,        
        allorder:state.Orderreducer.allorder, 
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        Productget:()=>dispatch(Productget()),
        Categoryget: () => dispatch(Categoryget()),
        Allorderget: () => dispatch(Allorderget()),
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard))
