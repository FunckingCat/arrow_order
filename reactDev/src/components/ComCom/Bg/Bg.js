import React,{Component} from 'react';
import './Bg.scss'; 
import {connect} from 'react-redux'; 

class Bg extends Component {

render(){

    let style = {
        backgroundImage: `url(${this.props.domen}${this.props.src})`
    }

    if (this.props.gradient){
        style = {
            backgroundImage: `linear-gradient(167.05deg, #171717 -3.31%, rgba(255, 255, 255, 0) 61.22%), url(${this.props.domen}${this.props.src})`
        }
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
