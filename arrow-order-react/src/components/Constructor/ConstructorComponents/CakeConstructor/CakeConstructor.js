import React,{Component} from 'react';
import './CakeConstructor.scss'; 
import {connect} from 'react-redux';

import {popUpActive} from '../../../../actions/popUpActions';
import {setContent} from '../../../../actions/ingredietsMasterActions';
import {setCakeParts} from '../../../../actions/cakeConstructorActions';
import Storage from '../../../../servises/StorageController';
import CakeController from '../CakeController/CakeController';

import PopUp from '../../../ComCom/PopUp/PopUp';
import BlackButton from '../../../ComCom/BlackButton/BlackButton';

class CakeConstructor extends Component {

    state = {
        resetActive : 'false',
        confirmActive : 'false',
    }

    St = new Storage()

    componentDidMount() {
        this.checkSessionStorage();
    }

    checkSessionStorage = () => {
        let ingredients = this.St.getSession('ingredients')
        if  (ingredients !== null){
            let {filling, biscuit, cream} = ingredients;
            console.log('filling, biscuit, cream: ', filling, biscuit, cream);
            this.props.setCakeParts({
                filling : filling,
                biscuit : biscuit,
                cream   : cream,
            })
        }
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
        this.props.setContent(event.target.innerHTML);
        this.props.popUpActive(true);
    }

    reset = () => {
        console.log('Reset');
        this.props.setCakeParts({
            filling : '',
            biscuit : '',
            cream   : '',
        });
        this.St.rmSession('ingredients');
        this.props.setContent('');
    }

    confirm = () => {
        if (this.state.confirmActive){
            let {filling, biscuit, cream} = this.props.cakeParts;
            this.St.setSession('ingredients', {
                filling : filling,
                biscuit : biscuit,
                cream   : cream,
            });
            console.log(`Wrote ${filling +  biscuit + cream}`);
        }
    }

    render(){
                
        return(
            <>
                <div className = "CakeConstructor">
                    <CakeController/>
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
    setContent : setContent,
    setCakeParts : setCakeParts,
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeConstructor)
