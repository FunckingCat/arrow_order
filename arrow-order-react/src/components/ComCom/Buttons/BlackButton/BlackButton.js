import React,{Component} from 'react';
import './BlackButton.scss'; 

export default class BlackButton extends Component {

    button = React.createRef()

    componentDidMount(){
        this.color()
    }

    componentDidUpdate(){
        this.color()
    }
    
    color = () => {
        if (this.props.active === 'true'){
            this.button.current.style.backgroundColor = 'black'
        } else {
            this.button.current.style.backgroundColor = '#787878'
        }
    }

    render(){
        return(
            <button 
                ref = {this.button}
                className = 'BlackButton'
                active = {this.props.active}
                closeable={this.props.active}
                onClick = {this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}
