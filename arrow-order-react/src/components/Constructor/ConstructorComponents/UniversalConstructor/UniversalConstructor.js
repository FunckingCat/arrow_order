import React,{Component} from 'react';
import './UniversalConstructor.scss'; 
import {connect} from 'react-redux';

import {popUpActive}       from '../../../../actions/popUpActions';
import {setPopUpContent}   from '../../../../actions/popUpActions';

import Assembly    from './AssemblyView/AssemblyView';

import BlackButton from '../../../ComCom/Buttons/BlackButton/BlackButton';
import RoundButton from '../../../ComCom/Buttons/RoundButton/RoundButton';
import TransLink   from '../../../ComCom/Buttons/TransLink/TransLink';

class UniversalConstructor extends Component {

    state = {
        resetActive : 'false',
        confirmActive : 'false',
    }

    componentDidMount () {
        this.updateButtons();
    }

    componentDidUpdate() {
        this.updateButtons();
    }

    updateButtons = () => {
        let {filling, biscuit, cream} = this.props.cakeParts;
        let reset = String(Boolean(filling || biscuit || cream))
        let confirm = String(Boolean(filling && biscuit && cream))
        if (reset !== this.state.resetActive){
            this.setState({
                resetActive : reset
            })
        } 
        if (confirm !== this.state.confirmActive){
            this.setState({
                confirmActive : confirm
            })
        } 
    }

    handaleClick = (event) => {
        let content = event.target.closest('.RoundButton').childNodes[1].innerHTML;
        this.props.setPopUpContent(content);
        this.props.popUpActive(true);
    }

    confirm = () => {
        if (this.state.confirmActive){
            console.log('Confirm');
        }
    }

    render(){
                
        return(
            <section className = 'Constructor'>
                <Assembly/>
                <div className = 'output'>
                    <div>Начинка: {this.props.cakeParts.filling}</div>
                    <div>Бисквит: {this.props.cakeParts.biscuit}</div>
                    <div>Крем:    {this.props.cakeParts.cream}</div>
                </div>
                <div className="buttonsBlock popTriggers">
                    <RoundButton 
                        src = {this.props.domen + '/static/icons/constructor/BiscuitCake/filling/default.svg'}
                        onClick = {this.handaleClick}>
                            Начинка
                    </RoundButton>
                    <RoundButton 
                        src = {this.props.domen + '/static/icons/constructor/BiscuitCake/biscuit/default.svg'}
                        onClick = {this.handaleClick}>
                            Бисквит
                    </RoundButton>
                    <RoundButton
                        scale = 'true' 
                        src = {this.props.domen + '/static/icons/constructor/BiscuitCake/cream/default.svg'}
                        onClick = {this.handaleClick}>
                            Крем
                    </RoundButton>
                    
                </div>
                <div className="buttonsBlock resetComfirm">
                    <BlackButton 
                        mode = 'border'
                        text='Сброcить'
                        active = {this.state.resetActive}
                        onClick = {this.reset}/>
                    <TransLink
                        mode = 'border'
                        text='Далее'
                        transferTo = 'Продукция'
                        to = '/Products'
                        onClick={this.confirm}
                        active = {this.state.confirmActive}/>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        domen : state.domen,
        isPopUpActive : state.popUp.active,
        cakeParts : {
            filling : state.orderDetails.parts.filling,
            biscuit : state.orderDetails.parts.biscuit,
            cream   : state.orderDetails.parts.cream
        }
    }
}

const mapDispatchToProps = {
    popUpActive,
    setPopUpContent,
}

export default connect(mapStateToProps, mapDispatchToProps)(UniversalConstructor)
