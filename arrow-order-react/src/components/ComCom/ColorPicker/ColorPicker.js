import React,{Component} from 'react';
import './ColorPicker.scss'; 
import {connect} from 'react-redux'; 

import Color from './Color/Color'

class ColorPicker extends Component {

    state = {
        colors : ['#eb6e34', '#448b9e', '#e090d4', '#113b14', '#9c982c', '#405246', '#46748c', '#c96865', '#ffffff', '#000']
    }

    onChange = (event) => {
        this.setState({
            selected : event.target.dataset.value,
        })
    }

    renderColors = () => {
        let colors = this.state.colors.sort();
        let render = []
        for (let i=0; i < colors.length; i++) {
            render.push(
                <Color
                    onChange = {this.onChange}
                    key = {i + colors[i]} 
                    color ={colors[i]}/>);
        }
        return render
    }

    render(){

        let colors = this.renderColors();

        return(
            <div className="colorPicker">
                <div className="title">
                    Выберите основной цвет: {this.state.selected}
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
