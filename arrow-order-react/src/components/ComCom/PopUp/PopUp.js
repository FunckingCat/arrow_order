import React,{Component} from 'react';
import './PopUp.scss'; 
import {connect} from 'react-redux'; 

import {popUpActive}  from '../../../actions/popUpActions';
import {setCakeParts} from '../../../actions/cakeConstructorActions';

import RadioButton    from '../../ComCom/RadioButton/RadioButton';
import BlackButton    from '../../ComCom/BlackButton/BlackButton';
import requestService from '../../../servises/requestService';

class PopUp extends Component {

    RequestService = new requestService(this.props.domen)

    state = {
        ulitems : [],
        selected : '',
        buttonActive : 'false',
        summary : 'Ванильный бисквит',
        constant : 0,
        prevContent : null,
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

    updateUlItems = () => {
        if (this.props.content !== this.state.prevContent){
            this.RequestService.getCakeInfo(this.props.content)
            .then((res) => {
                this.setState({
                    ulitems : res,
                    selected : '',
                    buttonActive : 'false',
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

    radioChecked = (event) => {
        this.setState({
            selected : event.target.dataset.value,
            buttonActive : 'true',
        })
    }

    renderRadio = () => {
        let radioButtons = []
        let i = 1;
        for (let item of this.state.ulitems){
            radioButtons.push(
                <RadioButton 
                    id = {i++} 
                    name = 'RB' 
                    key = {item + i + this.state.constant} 
                    text = {item}
                    onChecked = {this.radioChecked}/>
            )
        }
        return radioButtons
    }

    partSubmit = () => {
        if (this.state.buttonActive === 'true'){
            let now = new Date();
            this.setState({
                buttonActive : 'false',
                selected : '',
                constant : now.getMilliseconds(),
            })
        }            
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
                            onClick = {this.partSubmit}/>
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
    setCakeParts: setCakeParts,
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUp)
