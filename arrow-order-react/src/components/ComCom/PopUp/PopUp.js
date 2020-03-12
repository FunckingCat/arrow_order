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
        this._isMount = true;
    }

    componentDidUpdate() {
        this.setStyle();        
    }

    componentWillUnmount() {
        this._isMount = false;
    }

    showPop = () => {
        let st = this.popup.current.style;
        st.bottom = '-100vh';
        st.pointerEvents = '';
        setTimeout(() => {
            st.opacity = '1';
            st.bottom = '-70px';
        }, 600)
    }

    hidePop = () => {
        let st = this.popup.current.style;
        st.bottom = '-100vh';
        st.pointerEvents = 'none';
        setTimeout(() => {
            st.opacity = '0';
            st.bottom = '0px';
        }, 600)
    }

    closePopUp = (event) => {
        if (event.target.hasAttribute('closeable') 
            && event.target.getAttribute('closeable') === 'true'){
            this.props.popUpActive(false);
        }            
    }

    setStyle = () => {
        if (this.props.active) {
            this.bg.current.classList.remove('bg-hide')
            this.showPop();
        } else {
            this.popup.current.classList.add('pop-hide')
            this.hidePop();
            setTimeout(() => {                
                try{
                    this.bg.current.classList.add('bg-hide')
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
                <div 
                    className="background bg-hide" 
                    ref = {this.bg} 
                    onClick = {this.closePopUp}
                    closeable='true'></div>
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
