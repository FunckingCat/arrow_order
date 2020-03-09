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
            this.handaleInput(this.props.from)
        } else if (this.props.seq) {
            this.setState({
                min            : 0,
                max            : this.props.seq.length,
                counter        : 0,
                output         : this.props.seq[0],
            })
            this.handaleInput(this.props.seq[0])
        } else {
            this.setState({
                output : 'NO SEQ',
            })
        }
    }

    handaleInput = (value) => {
        if (!this.props.onInput){
            console.error('Нет коллбэка в quantum');
            return
        }
        this.props.onInput(value)
    }

    decrease = () => {
        let {output, step, min, counter} = this.state;
        if (this.decreaseActive()){
            if (this.props.from && output >  min){
                this.setState({
                   output : output - (step)
                })
                this.handaleInput(output - step)
            } else if (this.props.seq && counter > min){
                counter -= 1;
                this.setState({
                    counter : counter,
                    output  : this.props.seq[counter]
                })
                this.handaleInput(this.props.seq[counter])
            }
        } 
    }

    increase = () => {
        let {output, step, max, counter} = this.state;
        if (this.increaseActive()){
            if (this.props.from && output < max){
                this.setState({
                    output : output + (step)
                })
                this.handaleInput(output + step)
            } else if (this.props.seq && counter < max){
                counter += 1;
                this.setState({
                    counter : counter,
                    output  : this.props.seq[counter]
                })
                this.handaleInput(this.props.seq[counter])
            }
        }
    }

    decreaseActive = () => {
        if (this.props.from){
            return this.state.output > this.state.min;
        } else if (this.props.seq){
            return this.state.counter > this.state.min;
        }
    }

    increaseActive = () => {
        if (this.props.from){
            return this.state.output < this.state.max;
        } else if (this.props.seq){
            return this.state.counter < this.state.max - 1;
        }
       
    }

    render(){

        let quantumStyle = {
            width : this.props.width || '50%'
        }

        let decreaseStyle = {
            backgroundColor : this.decreaseActive()? '#333333' : '#bbbbbb'
        }

        let increaseStyle = {
            backgroundColor : this.increaseActive()? '#333333' : '#bbbbbb'
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
