import React from 'react'
import './styles/style.css';
import {Link,useHistory,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Logout} from '../../store/actions/auth';

const Header = (props) => {

    const history = useHistory();

    const logout = () => {
        props.Logout(history);
      };
    

    return (
        <React.Fragment>
        <div>
            <div className='search'>
                <input type="text" placeholder="Search..."/>
            </div>
        </div>
        {
            localStorage.getItem('jwt') ?
            <h4 style={{position:"absolute",marginLeft:'1410px',marginTop:'-45px',cursor:'pointer',color:'#4e73df'}} onClick={()=>logout()}>Logout</h4>
            :
            <h4 style={{position:"absolute",marginLeft:'1420px',marginTop:'-45px'}}><Link to="/login">Login</Link></h4>
        }
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch)
{
    return{
        Logout:(history)=>dispatch(Logout(history))
    }
}

export default withRouter(connect(null,mapDispatchToProps)(Header))