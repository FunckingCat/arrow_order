import React,{Component} from 'react';
import './PopUp.scss'; 
import {connect} from 'react-redux'; 

import {popUpActive} from '../../../actions/popUpActions';

class PopUp extends Component {

    bg = React.createRef();
    popup = React.createRef();

    closePopUp = (event) => {
        if (event.target.hasAttribute('closeable')){
            this.props.popUpActive(false);
        }
            
    }

    componentDidMount() {
        this.setStyle()
    }

    componentDidUpdate() {
        this.setStyle()
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

    render(){

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
                    <button onClick = {this.handaleClick}>Выключить</button>
                </div>
            </div>
            </>
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
