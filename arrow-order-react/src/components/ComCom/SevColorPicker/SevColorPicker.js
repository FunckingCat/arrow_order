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

    delColor = () => {
        let {currentOptionalColors} = this.state;
        if (currentOptionalColors > 0){
            this.setState({
                currentOptionalColors : currentOptionalColors - 1,
            })
        }
    }

    renderOptionalColors = () => {
        let optionalColors = [];
        for (let i = 0; i < this.state.currentOptionalColors; i++){
            optionalColors.push(
                    <ColorPicker
                        name = {'CP' + i} 
                        key = {'CP'+i} 
                        title = {`Дополнительный цвет ${i+1}`}/>
            )
        }
        return optionalColors
    }

    render(){

        let optionalColors = this.renderOptionalColors();

        return(
            <div className="sevColorPicker">
                <ColorPicker title = 'Основной цвет'/>
                <BlackButton 
                    text = 'Добавить дополнительный цвет'
                    mode = 'border'
                    onClick = {this.addColor}
                    active = {this.state.currentOptionalColors < this.state.maxOPtionalColors? 'true' : 'false'}/>
                {optionalColors}
                <BlackButton
                        text = 'Удалить'
                        mode = 'border'
                        plusClass = 'del'
                        active = {this.state.currentOptionalColors > 0? 'true' : 'false'}
                        onClick = {this.delColor}/>
            </div>
        )
    }
}
