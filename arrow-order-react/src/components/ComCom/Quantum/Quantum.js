import React,{Component} from 'react';
import './Quantum.scss'; 

export default class Quantum extends Component {

    state = {
        counter : 0,
    }

    componentDidMount() {
        if (this.props.from && this.props.to){
            this.setState({
                min            : this.props.from,
                max            : this.props.to,
                output         : this.props.from,
                step           : this.props.step || 1,
            })
        } else if (this.props.seq) {
            this.setState({
                min            : 0,
                max            : this.props.seq.length,
                output         : this.props.seq[0],
            })
        } else {
            this.setState({
                output : 'NO SEQ',
            })
        }
    }

    defOutput = () => {
        return this.state.counter
    }

    decrease = () => {
        let {output, step, min} = this.state;
        if (this.decreaseActive()){
            if (this.props.from && output >  min){
                this.setState({
                   output : output - (step)
                })
            }
        } 
    }

    increase = () => {
        let {output, step, max} = this.state;
        if (this.increaseActive()){
            if (this.props.from && output < max){
                this.setState({
                    output : output + (step)
                })
            }
        }
    }

    decreaseActive = () => {
        return this.state.output > this.state.min;
    }

    increaseActive = () => {
        return this.state.output < this.state.max;
    }

    render(){

        let quantumStyle = {
            width : this.props.width || '50%'
        }

        let decreaseStyle = {
            backgroundColor : this.decreaseActive()? 'black' : '#bbbbbb'
        }

        let increaseStyle = {
            backgroundColor : this.increaseActive()? 'black' : '#bbbbbb'
        }

        return(
            <div className="quantum" style = {quantumStyle}>
                <div className="decrease" onClick = {this.decrease}>
                    <div className="stick" style = {decreaseStyle}></div>
                </div>
                <div className="output">
                    {this.state.output}
                </div>
                <div className="increase" onClick = {this.increase}>
                    <div className="stick" style = {increaseStyle}></div>
                    <div className="stick vert" style = {increaseStyle}></div>
                </div>
            </div>
        )
    }
}
