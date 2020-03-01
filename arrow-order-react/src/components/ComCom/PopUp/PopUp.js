import React,{Component} from 'react';
import './PopUp.scss'; 
import {connect} from 'react-redux'; 

import {popUpActive}  from '../../../actions/popUpActions';

import requestService from '../../../servises/requestService';

import IndredientsMaster from '../../Constructor/ConstructorComponents/IngredientsMaster/IngredientsMaster';

class PopUp extends Component {

    _isMount = false

    RequestService = new requestService(this.props.domen)

    bg = React.createRef();
    popup = React.createRef();

    componentDidMount() {
        this.setStyle();
        document.querySelector('body').style.overflow = 'hidden';
        this._isMount = true;
    }

    componentDidUpdate() {
        this.setStyle();        
    }

    componentWillUnmount() {
        this._isMount = false;
        document.querySelector('body').style.overflow = '';
    }

    closePopUp = (event) => {
        if (event.target.hasAttribute('closeable') 
            && event.target.getAttribute('closeable') === 'true'){
            this.props.popUpActive(false);
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
                try{
                    this.bg.current.classList.add('hide')
                }
                catch{
                    console.log('Непонятная ошибка');
                }
            }, 500);
        }
    }

    render(){
        return(
            <div className="popWrapper" style = {
                {opacity: this._isMount? '1' : '0'} 
            }>
                <div className="background" 
                 ref = {this.bg}></div>
                <div className="popup"
                    closeable='true'
                    onClick = {this.closePopUp}  
                    ref = {this.popup}>
                    <div className="line"></div>
                    <div className="content">
                        <IndredientsMaster/>
                    </div>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return({
        active : state.popUp.active,
    })
} 

const mapDispatchToProps = {
    popUpActive : popUpActive,
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUp)
