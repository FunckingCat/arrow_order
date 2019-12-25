import React,{Component} from 'react';
import './PopUp.scss'; 
import {connect} from 'react-redux'; 

class PopUp extends Component {

    render(){
        return(
            <div className="popup">
                
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return({
        active : state.popUp.active,
    })
} 

export default connect(mapStateToProps)(PopUp)
