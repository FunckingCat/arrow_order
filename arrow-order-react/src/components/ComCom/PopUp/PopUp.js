import React,{Component} from 'react';
import './PopUp.scss'; 
import {connect} from 'react-redux'; 

import {popUpActive} from '../../../actions/popUpActions';

import RadioButton from '../../ComCom/RadioButton/RadioButton';
import BlackButton from '../../ComCom/BlackButton/BlackButton';
import requestService from '../../../servises/requestService';

class PopUp extends Component {

    RequestService = new requestService(this.props.domen)

    state = {
        selected : '',
        summary : 'Ванильный бисквит',
        ulitems : [],
        prevContent : null,
        buttonActive : 'true',
    }

    bg = React.createRef();
    popup = React.createRef();

    componentDidMount() {
        this.setStyle();
        document.querySelector("html").style.overflow = 'hidden';
    }

    componentDidUpdate() {
        this.setStyle()
        this.updateUlItems();
    }

    componentWillUnmount() {
        document.querySelector("html").style.overflow = '';
    }

    closePopUp = (event, force = true) => {
        if (event.target.hasAttribute('closeable') 
            && event.target.getAttribute('closeable') === 'true'){
            this.props.popUpActive(false);
        }            
    }

    compare = (arr1, arr2) => {
        let flag = true;
        for (let item of arr1){
            if (!(arr2.includes(item))){
                flag = false
            }
        }
        return flag
    }

    updateUlItems = () => {
        if (this.props.content !== this.state.prevContent){
            this.RequestService.getCakeInfo(this.props.content)
            .then((res) => {
                this.setState({
                    ulitems : res,
                    prevContent : this.props.content,
                })                           
            })
        } 
    }

    setStyle = () => {
        if (this.props.active) {
            this.bg.current.classList.remove('hide')
            this.bg.current.style.backgroundColor = 'rgba(115,115,115,0.5)';
            this.popup.current.classList.remove('hide')
        } else {
            this.bg.current.style.backgroundColor = 'rgba(115,115,115,0)';
            this.popup.current.classList.add('hide')
            setTimeout(() => {                
                this.bg.current.classList.add('hide')
            }, 500);
        }
    }

    renderRadio = () => {
        let radioButtons = []
        let i = 1;
        for (let item of this.state.ulitems){
            radioButtons.push(
                <RadioButton id = {i++} name = 'RB' key = {i++} text = {item}/>
            )
        }
        return radioButtons
    }

    render(){

        let radioButtons = this.renderRadio();

        return(
            <>
            <div className="background" 
                 ref = {this.bg}></div>
            <div className="popup"
                 closeable='true'
                 onClick = {this.closePopUp}  
                 ref = {this.popup}>
                <div className="line"></div>
                <div className="content">
                    <div className="info">
                        <h2>{this.props.content}</h2>
                        <ul>
                            {radioButtons}
                        </ul>
                    </div>
                    <div className="add">
                        <div className="summary">{this.state.summary}</div>
                        <BlackButton 
                            text = 'Добавить' 
                            closeable={this.state.buttonActive}
                            onClick = {
                                () => {this.setState({
                                    buttonActive : 'false',
                                })}
                            }/>
                    </div>
                </div>
            </div>
            </>
        )
    }
} 

const mapStateToProps = (state) => {
    return({
        domen : state.domen,
        active : state.popUp.active,
        content : state.popUp.content,
        parts : {
            filling : state.cakeParts.filling,
            biscuit : state.cakeParts.biscuit,
            cream : state.cakeParts.cream,
        }
    })
} 

const mapDispatchToProps = {
    popUpActive : popUpActive,
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUp)
