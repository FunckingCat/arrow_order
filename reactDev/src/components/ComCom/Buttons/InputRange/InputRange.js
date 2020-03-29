import React,{Component} from 'react';
import './InputRange.scss';

//Props
//min, max, step, dimension, default

export default class InputRange extends Component {

    slider = React.createRef()
    bullet = React.createRef()
    output = React.createRef()

    handaleInput = (event) => {
        const S = this.slider.current;
        const B = this.bullet.current;
        const O = this.output.current; 
        let {min, max} = this.props;
        let value = S.value;
        O.innerHTML = value;
        B.style.left = (value - min)/(max - min) * S.offsetWidth + 'px';
        if (!this.props.onInput){
            console.error('Нет функции onInput, без колбэка не запашет братан');
            return
        }
        this.props.onInput(value);
    }

    componentDidMount() {
        this.handaleInput();
    }

    render(){
        let {min, max, step, dimension} = this.props;
        return(
            <div className="InputRange">
                <div className="range-slider">
                    <span 
                        ref = {this.bullet} 
                        className="rs-label">
                            <div ref = {this.output} className="output"></div>
                            <div className="dimension">
                                {dimension}
                            </div>
                    </span>
                    <input 
                        ref = {this.slider} 
                        onInput = {this.handaleInput} 
                        className="rs-range" 
                        type="range"
                        defaultValue = {this.props.default || (max - min)/2 || 0}
                        step={step}  
                        min={min} 
                        max={max}/>
                </div>
            </div>
        )
    }
}
