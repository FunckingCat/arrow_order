import React,{Component} from 'react';
import './Products.scss'; 
import {connect} from 'react-redux'; 
import requestService from '../../../servises/requestService';

import Menu from '../../ComCom/Menu/Menu';

class Products extends Component {

    RecuestService = new requestService(this.props.domen)

    state = {
        title : '',
        slogann : '',
        menuItems : [],
    }

    componentDidMount() {
        this.updateMenuItems()
    }

    updateMenuItems() {
        this.RecuestService.getProducts(this.props.cat)
        .then((res) => {
            this.setState({
                title : res.title,
                slogan : res.slogan,
                menuItems : res.items,
            })
        })
    }

    render(){
        return(
            <Menu 
                title = {this.state.title}
                slogan = {this.state.slogan}
                menuItems = {this.state.menuItems}/>
        )
    }
} 

const mapStateToProps = (state) => {
    return({
        domen : state.domen,
    })
} 

export default connect(mapStateToProps)(Products)
