import React,{Component} from 'react';
import './Bg.scss'; 
import {connect} from 'react-redux'; 

class Bg extends Component {

render(){

    let style = {
        backgroundImage: `url(${this.props.domen}${this.props.src})`
    }

    return(
        <div className = 'bgWrapper' style = {style}>
            <div className = 'text one'>{this.props.text}</div>
            <div className = 'text two'>{this.props.subtext}</div>
        </div>
    )
 }
} 

const mapStateToProps = (state) => {
    return {
        domen : state.domen
    }
} 

export default connect(mapStateToProps)(Bg)
