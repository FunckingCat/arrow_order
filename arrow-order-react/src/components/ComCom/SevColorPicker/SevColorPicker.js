import React,{Component} from 'react';
import './SevColorPicker.scss'; 

import BlackButton from '../Buttons/BlackButton/BlackButton';
import ColorPicker from './ColorPicker/ColorPicker';

export default class SevColorPicker extends Component {

    state = {
        maxOPtionalColors : 2,
        currentOptionalColors : 0,
    }

    addColor = () => {
        let {maxOPtionalColors, currentOptionalColors} = this.state;
        if (currentOptionalColors < maxOPtionalColors){
            this.setState({
                currentOptionalColors : currentOptionalColors + 1,
            })
        }
    }

    renderOptionalColors = () => {
        let optionalColors = [];
        for (let i = 0; i < this.state.currentOptionalColors; i++){
            optionalColors.push(
                <div className = 'ColorBlock' key = {'CB' + i}>
                    <ColorPicker
                        key = {'CP'+i} 
                        title = {`Дополнительный цвет ${i+1}`}/>
                    <BlackButton
                        key = {'D'+i}
                        text = 'Удалить'
                        active = 'true'/>
                </div>
            )
        }
        return optionalColors
    }

    render(){

        let optionalColors = this.renderOptionalColors();

        return(
            <div className="sevColorPicker">
                <ColorPicker title = 'Основной цвет:'/>
                <BlackButton 
                    text = 'Добавить дополнительный цвет'
                    onClick = {this.addColor}
                    active = {this.state.currentOptionalColors < this.state.maxOPtionalColors? 'true' : 'false'}/>
                {optionalColors}
            </div>
        )
    }
}
