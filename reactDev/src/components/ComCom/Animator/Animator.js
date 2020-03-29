import React, {Component} from 'react';
import './Animator.scss';



export default class Animator extends Component {

    animatorElement = React.createRef();

    componentDidMount() {
        this.Mount(this.animatorElement.current);
    }

    componentWillUnmount() {
        this.Unmount(this.animatorElement.current);
    }

    Mount = (element) => {
        element.classList.add(`${this.props.type || 'fade'}-enter`);
        setTimeout( () => {
            element.classList.add(`${this.props.type || 'fade'}-enter-active`);
            element.classList.remove(`${this.props.type || 'fade'}-enter`);
        }, this.props.timeout || 0)
    }

    Unmount = (element) => {
        element.classList.add(`${this.props.type || 'fade'}-exit`);
        setTimeout( () => {
            element.classList.add(`${this.props.type || 'fade'}-exit-active`);
            element.classList.remove(`${this.props.type || 'fade'}-exit`);
        }, 0)
    }

    render() {
        return(
            <div ref = {this.animatorElement} className = 'Animator'>
                {this.props.children}
            </div>
        )
    }
}