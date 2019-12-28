import React,{Component} from 'react';
import './PopUp.scss'; 
import {connect} from 'react-redux'; 
import RequestService from '../../../servises/requestService';

import {popUpActive} from '../../../actions/popUpActions';

import RadioButton from '../../ComCom/RadioButton/RadioButton';
import BlackButton from '../../ComCom/BlackButton/BlackButton';

class PopUp extends Component {

    RequestService = new RequestService(this.props.domen)

    state = {
        selected : '',
        summary : 'Ванильный бисквит',
        ulitems : [],
    }

    bg = React.createRef();
    popup = React.createRef();

    closePopUp = (event) => {
        if (event.target.hasAttribute('closeable') 
            && event.target.getAttribute('closeable') === 'true'){
            this.props.popUpActive(false);
        }
            
    }

    componentDidMount() {
        this.setStyle();
        document.querySelector("html").style.overflow = 'hidden';
        this.updateCakeItems();
    }

    componentDidUpdate() {
        this.setStyle()
        if (this.props.active && this.state.ulitems.length === 0) {
            this.updateCakeItems();
        }
    }

    componentWillUnmount() {
        document.querySelector("html").style.overflow = '';
    }

    updateCakeItems = () => {
        this.RequestService.getCakeInfo(this.props.content)
        .then((res) => {
            this.setState({
                ulitems : res,
            })
        })
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
        return [
            <RadioButton id = '1' name = 'RB' key = '1' text = 'Во так вот'/>,
            <RadioButton id = '2' name = 'RB' key = '2' text = 'Как то так'/>,
        ]
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
                            closeable='true'
                            onClick = {
                                () => {console.log(this.state.summary);}
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
    })
} 

const mapDispatchToProps = {
    popUpActive : popUpActive,
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUp)
