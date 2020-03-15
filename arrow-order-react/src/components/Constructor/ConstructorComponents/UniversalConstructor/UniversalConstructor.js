import React,{Component} from 'react';
import './UniversalConstructor.scss'; 
import {connect} from 'react-redux';

import {reset_colors}      from '../../../../actions/assemblyColorsActions';
import {resetOrder}        from '../../../../actions/orderActions';
import {setAssemblyParts}  from '../../../../actions/orderActions';

import Animator            from '../../../ComCom/Animator/Animator';
import RequestService from '../../../../servises/requestService';
import Assembly    from './AssemblyView/AssemblyView';
import IngredientsMaster from '../IngredientsMaster/IngredientsMaster';

import BlackButton from '../../../ComCom/Buttons/BlackButton/BlackButton';
import TransLink   from '../../../ComCom/Buttons/TransLink/TransLink';

class UniversalConstructor extends Component {

    RS = new RequestService(this.props.domen)

    state = {
        loaded : false,
    }

    componentDidMount () {
        this.RS.getCakeInfo(this.props.type)
        .then(res => {
            this.setState({
                biscuitInfo : res.biscuits,
                fillingInfo : res.fillings,
                creamInfo   : res.creams,
                loaded : true,
            })
        });
    }

    confirmActive = () => {
        let {filling, biscuit, cream} = this.props.cakeParts;
        return String(Boolean(filling && biscuit && cream))
    }

    resetActive = () => {
        let {filling, biscuit, cream} = this.props.cakeParts;
        return String(Boolean(filling || biscuit || cream))
    }

    confirm = () => {
        if (this.state.confirmActive){
            console.log('Confirm');
        }
    }

    reset = () => {
        this.props.setAssemblyParts('filling', undefined)
        this.props.setAssemblyParts('biscuit', undefined)
        this.props.setAssemblyParts('cream', undefined)
        this.props.reset_colors();
    }

    renderContent = (loaded) => {
        if (loaded) {
            return (
                <Animator>
                    <Assembly/>
                    <div className="Ingredients">
                        <IngredientsMaster
                            content = 'Начинка' 
                            items = {this.state.fillingInfo}/>
                        <IngredientsMaster
                            content = 'Бисквит' 
                            items = {this.state.biscuitInfo}/>  
                        <IngredientsMaster
                            content = 'Крем' 
                            items = {this.state.creamInfo}/>              
                    </div>
                    <div className="buttonsBlock resetComfirm">
                        <BlackButton 
                            mode = 'border'
                            text='Сброcить'
                            active = {this.resetActive()}
                            onClick = {this.reset}/>
                        <TransLink
                            mode = 'border'
                            text='Далее'
                            transferTo = 'Декор'
                            to = '/Details/Decor/'
                            onClick={this.confirm}
                            active = {this.confirmActive()}/>
                    </div>
                </Animator>
            )
            
        }
    }

    render(){
                
        let content = this.renderContent(this.state.loaded);

        return(
            <section className = 'Constructor'>
                {content}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        domen : state.domen,
        type  : state.orderDetails.type,
        cakeParts : {
            filling : state.orderDetails.parts.filling,
            biscuit : state.orderDetails.parts.biscuit,
            cream   : state.orderDetails.parts.cream
        }
    }
}

const mapDispatchToProps = {
    reset_colors,
    resetOrder,
    setAssemblyParts,
}

export default connect(mapStateToProps, mapDispatchToProps)(UniversalConstructor)
