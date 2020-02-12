import React,{Component} from 'react';
import './ColorPicker.scss'; 
import {connect} from 'react-redux'; 

import Color from './Color/Color'

class ColorPicker extends Component {

    genColors = () => {
        let render = []
        let per = 40, glob = 0, col = 0;
        let toHsl = (col) => {
            return `hsl(${col[0]},${col[1]}%,${col[2]}%)`
        }
        while (col<360){
            while (glob < 100){
                let color = toHsl([col, glob, per])
                console.log(color);
                render.push(color);
                glob += 10;
            }
            glob = 50;
            col += 1;
        }
        return render 

    }

    state = {
        split : this.props.split || 30,
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

    onChange = (event) => {
        this.setState({
            selected : event.target.dataset.value,
        })
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
            <div className="colorPicker">
                <div className="title">
                    Выберите основной цвет:
                </div>
                <div className="colors">
                    {colors}
                </div>
            </div>
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
