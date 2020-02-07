import React,{Component} from 'react';
import './Products.scss'; 
import {connect} from 'react-redux'; 

import Menu from '../../ComCom/Menu/Menu';

class Products extends Component {

    render(){
        return(
            <Menu title = 'It works'/>
        )
    }
} 

const mapStateToProps = (state) => {
    return({
        domen : state.domen,
    })
} 

const mapDispatchToProps = {

} 

export default connect(mapStateToProps, mapDispatchToProps)(Products)
