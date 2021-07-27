import React from 'react'
import Sidebar from './sidebar'
import Product from './product'
import './styles/product.css';
import Header from '../../elements/header/header';

const Productlist = () => {
    return (
        <React.Fragment>
            <div>
            <Header/>
            <Sidebar/>
            <Product/>
            </div>
    </React.Fragment>
    )
}

export default Productlist
