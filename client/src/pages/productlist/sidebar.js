import React, { useEffect } from 'react'
import './styles/sidebar.css'
import {connect} from 'react-redux';
import {useHistory, withRouter} from 'react-router-dom';
import {Categoryget} from '../../store/actions/category';
import {Link} from 'react-router-dom';

const Sidebar = (props) => {

    const history = useHistory();

    useEffect(()=>{
      props.Categoryget();
    },[])

    const catepro=(item)=>{
      history.push({ pathname: `/list/${item}`, state: item});
  }
    return (
<div>
<div className="sidebar" style={{float:'left'}}>
<table  style={{borderRadius:'15px'}} >
  <thead>
    <tr>
      <th scope="col"><h3>category</h3></th>
    </tr>
  </thead>
  <tbody>
  <hr color='white'/>
  {
    props.catelist.data && props.catelist.data.map((item,index)=>{
        return(
          <React.Fragment>
                <tr>
                <td scope="row" onClick={()=>catepro(item.category)}><h4>{item.category}</h4></td>
    </tr>
          </React.Fragment>
        )
    })
  }
    <br/>
    <tr>
    <th scope="row"><button style={{background:'black',marginLeft:'10px'}}>1</button><button style={{background:'black',marginLeft:'10px'}}>2</button><button style={{background:'black',marginLeft:'10px'}}>3  </button></th>
    </tr>
    <br/>
  </tbody>
</table>
</div>
<br/>
</div>
    )
}

function mapStateToProps(state)
{
  return{
    catelist:state.Categoryreducer.catelist
  }
}

function mapDispatchToProps(dispatch)
{
  return{
    Categoryget:()=>dispatch(Categoryget())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (Sidebar))