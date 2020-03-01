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
        if (this.props.mode === 'border'){
            this.button.current.style.border = '1.5px solid black'
            if (this.props.active === 'true'){
                this.button.current.style.borderColor = 'black';
                this.button.current.style.color = 'black';
            } else {
                this.button.current.style.borderColor = '#bbbbbb';
                this.button.current.style.color = '#bbbbbb';
            }
        }else{
            if (this.props.active === 'true'){
                this.button.current.style.backgroundColor = 'black';
            } else {
                this.button.current.style.backgroundColor = '#bbbbbb';
            }  
        }
    }

    render(){
        return(
            <button 
                ref = {this.button}
                className = {'BlackButton ' + this.props.plusClass}
                active = {this.props.active}
                closeable={this.props.active}
                onClick = {this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}
