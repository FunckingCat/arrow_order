import React,{Component} from 'react';
import './ColorPicker.scss'; 
import {connect} from 'react-redux'; 

import Color from './Color/Color';
import Animator from '../../Animator/Animator';

class ColorPicker extends Component {

    state = {
        selected : '',
        split : this.props.split || 70,
        colors : [
            'hsl(13, 50%, 50%)', 
            'hsl(234, 50%, 50%)', 
            'hsl(123, 50%, 50%)', 
            'hsl(345, 50%, 50%)', 
            'hsl(143, 50%, 50%)', 
            'hsl(254, 50%, 50%)', 
            'hsl(235, 50%, 50%)', 
            'hsl(135, 50%, 50%)', 
            'hsl(78, 50%, 50%)',]
    }

    onChange = (value) => {
        this.setState({
            selected : value,
        })
        if (!this.props.onChange){
            console.error('Нет коллбэка, ну выбрали и выбрали (В ColorPicker)');
            return
        }
        this.props.onChange(value, this.props.order)
    }

    hslSplit = (color) => {
        let reg = /\d{1,3}/g
        let res = color.match(reg);
        return res.map(item => +item)
    }

    hslSort = (a, b) => {
        let col1 = this.hslSplit(a);
        let col2 = this.hslSplit(b);
        let res = col1[0] - col2[0];
        return res
    }

    renderColors = () => {
        let colors = this.state.colors.sort(this.hslSort);
        let render = []
        for (let i=0; i < colors.length; i++) {
            render.push(
                <Color
                    name = {this.props.name}
                    split = {this.state.split}
                    onChange = {this.onChange}
                    key = {i + colors[i]} 
                    color ={colors[i]}
                    hsl = {this.hslSplit(colors[i])}/>);
        }
        return render
    }

    render(){

        let colors = this.renderColors();

        return(
            <Animator>
                <div className="colorPicker">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="colors">
                        {colors}
                    </div>
                </div>
            </Animator>
        )
    }
} 

const mapStateToProps = (state) => {
    return({
        
    })
} 

const mapDispatchToProps = {

} 

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker)
