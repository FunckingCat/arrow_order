import React,{Component} from 'react';
import './CakeConstructor.scss'; 
import {connect} from 'react-redux';

import {popUpActive, popUpSetContent} from '../../../../actions/popUpActions';
import {setCakeParts} from '../../../../actions/cakeConstructorActions';

import PopUp from '../../../ComCom/PopUp/PopUp';
import BlackButton from '../../../ComCom/BlackButton/BlackButton';

class CakeConstructor extends Component {

    state = {
        resetActive : 'false',
        confirmActive : 'false',
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
        this.props.popUpSetContent(event.target.innerHTML);
        this.props.popUpActive(true);
    }

    reset = () => {
        console.log('Reset');
        this.props.setCakeParts({
            filling : '',
            biscuit : '',
            cream   : '',
        })
        this.props.popUpSetContent('')
    }

    confirm = () => {
        //let {filling, biscuit, cream} = this.props.cakeParts;
        console.log(String(Boolean(this.props.cakeParts.filling && this.props.cakeParts.biscuit && this.props.cakeParts.cream)));
    }

    render(){
                
        return(
            <>
                <div className = "CakeConstructor">
                    <div>--------------------------------------------------</div>
                    <button onClick = {this.handaleClick}>Бисквит</button>
                    <button onClick = {this.handaleClick}>Крем</button>
                    <button onClick = {this.handaleClick}>Начинка</button>
                    <div className = 'output'>
                        --------------------------------------------------
                        <div>Начинка: {this.props.cakeParts.filling}</div>
                        <div>Бисквит: {this.props.cakeParts.biscuit}</div>
                        <div>Крем:    {this.props.cakeParts.cream}</div>
                        --------------------------------------------------
                    </div>
                    <div className="buttonsBlock">
                        <BlackButton 
                            text='Сброcить'
                            active = {this.state.resetActive}
                            onClick = {this.reset}/>
                        <BlackButton 
                            text='Далее'
                            onClick={this.confirm}
                            active = {this.state.confirmActive}/>
                    </div>
                </div>
                <PopUp/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isPopUpActive : state.popUp.active,
        cakeParts : {
            filling : state.cakeParts.filling,
            biscuit : state.cakeParts.biscuit,
            cream : state.cakeParts.cream,
        }
    }
}

const mapDispatchToProps = {
    popUpActive : popUpActive,
    popUpSetContent : popUpSetContent,
    setCakeParts : setCakeParts,
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeConstructor)
