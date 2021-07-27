import React,{useEffect} from 'react'
import './styles/product.css';
import {connect}  from 'react-redux';
import {useHistory, withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Productget} from '../../store/actions/product';

const Product = (props) => {

    const history = useHistory();

    const product=(item)=>{
        history.push({ pathname: `/productdetail/${item}`, state: item});
    }

    useEffect(() => {
        props.Productget();
    },[])

    return (
        <div>
        <div>
            {
                props.prolist.data && props.prolist.data.map((item,index)=>{
                    return(
                        <div className="product" onClick={()=>product(item.id)} style={{cursor:'pointer'}}>
                        <img src={`http://localhost:3002/public/${item.photo}`} style={{height:'480px'}}/>
                        <div className="share"><span class="glyphicon glyphicon-share-alt"></span></div>
                        <div className="addtocart"><i class="fa fa-thumbs-up" aria-hidden="true" style={{fontSize:'20px'}}></i><i class="fa fa-thumbs-down" aria-hidden="true" style={{fontSize:'20px',marginLeft:'10px'}}></i><button>Add to cart</button></div>
                        </div>                        
                    )
                })
                
            }
        <br/>
        <br/>
        </div>
        </div>
    )
}

function mapStateToProps(state)
{
    return{
        prolist:state.Productreducer.prolist
    }
}

function mapDispatchToProps(dispatch)
{
    return{
        Productget:() => dispatch(Productget())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Product))