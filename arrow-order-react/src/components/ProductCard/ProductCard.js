import React,{Component} from 'react';
import './ProductCard.scss'; 
import {connect} from 'react-redux'; 

import RequestService from '../../servises/requestService';

import Image     from '../ComCom/Bg/Bg';
//import Quantum   from '../ComCom/Quantum/Quantum';
import TransLink from '../ComCom/Buttons/TransLink/TransLink';

class ProductCard extends Component {

    RS = new RequestService(this.props.domen)

    state = {
        
    }

    componentDidMount() {
        this.RS.getProductCard(this.props.prod)
        .then((res) => {
            this.setState({
                title : res.name,
                cost  : res.cost,
                dim   : res.dim,
                descr : res.descr,
                image : res.image, 
            })
        })
    }

    renderSelectors = () => {
        let selectors = [];
        return selectors
    }

    render(){
        
        let selectors = this.renderSelectors();

        return(
            <div className="productCard">
                <div className="mainInfo">
                    <h1 className="title">{this.state.title}</h1>
                    <div className="cost">
                        <span className="value">{this.state.cost}</span> 
                        <span className="dim">{this.state.dim}</span>
                    </div>
                </div>
                <Image  
                    domen = {this.props.domen}
                    src = {this.state.image}/>
                <div className="descr">{this.state.descr}</div>
                <div className="selectors">
                    {selectors}
                </div>
                <TransLink
                        mode = 'border'
                        text='Далее'
                        transferTo = 'Дата'
                        to = '/Details/Date/'
                        onClick={() => console.log('Confirm')}
                        active = {'true'}/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
