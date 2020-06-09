import React,{Component} from 'react';
import './CakeDecor.scss'; 
import {connect} from 'react-redux'; 
import {setDetail} from '../../../actions/orderActions';

import RequestService from '../../../servises/requestService';

import Animator from '../../ComCom/Animator/Animator';
import InputRange  from '../../ComCom/Buttons/InputRange/InputRange';
import CheckList   from '../../ComCom/InfoView/CheckList/CheckList';
//import ColorPicker from '../../ComCom/SevColorPicker/SevColorPicker';
import TransLink   from '../../ComCom/Buttons/TransLink/TransLink';

class CakeDecor extends Component {

    RS = new RequestService(this.props.domen)

    state = {
        range : {
            min : 0,
            max : 0,
            step: 0.01,
            dimension: 'кг'
        },
        decor  : [],
        colors : [],
        //selectedColors : [],
        selectedDecor : [],
        selectedWeight : 0,
    }

    componentDidMount () {
        this.loadInfo();
    }

    loadInfo = () => {
        let addDomen = (item, domen) => {
            return {
                name : item.name,
                icon : domen + item.icon,
                decr : item.decr,
            }
        }
        this.RS.getDetails(this.props.type)
        .then((res) => {
            let {/*colors,*/ weight, decor} = res;
            this.setState({
                range : {
                    min : weight.min,
                    max : weight.max,
                    step: weight.step,
                    dimension: weight.dim,
                },
                // colors : colors,
                decor : decor.map(item => addDomen(item, this.props.domen)),
            })
        })
    }

    onWeightInput = (value) => {
        this.setState({
            selectedWeight : Number(value),
        })
    }

    onDecorInput = (value) => {
        this.setState({
            selectedDecor : value || false,
        })
    }

    // onColorInput = (value) => {
    //     value = value.map((hsl) => {
    //         for (let item of this.state.colors){
    //             if (item.color === hsl) return item.name
    //         }
    //         return ''
    //     })
    //     this.setState({
    //         selectedColors : value
    //     })
    // }

    confirm = () =>{
        let weight = this.state.selectedWeight + this.state.range.dimension;
        let decor = this.state.selectedDecor.join(', ');
        //let colors = this.state.selectedColors;
        let dim = this.props.type === 'Капкейки'? 'Колличество':'Вес';
        this.props.setDetail(dim, weight);
        this.props.setDetail('Декор', decor);
        //this.props.setDetail('Цвета', colors);
    }

    render(){

        let title = this.props.type !== 'Капкейки'? 'Вес торта:' : 'Колличество капкейков:'

        let active = () =>  {
            let {/*selectedColors,*/ selectedWeight, selectedDecor} = this.state;
            return   (selectedWeight && 
                      selectedDecor.length)? //&& 
                    //   selectedColors.length && 
                    //   selectedColors[0])? 
            'true' : 'false';
        }

        return(
            <Animator>
                <div className="cakeDecor">
                    <div className="weight">
                        <div className="title">{title}</div>
                        <InputRange 
                            min = {this.state.range.min}
                            max = {this.state.range.max}
                            step = {this.state.range.step}
                            dimension = {this.state.range.dimension}
                            onInput = {this.onWeightInput}/>
                    </div>
                    <CheckList
                        title = 'Декор:'
                        items = {this.state.decor}
                        onChange = {this.onDecorInput}/>
                    {/* <ColorPicker
                        onChange = {this.onColorInput}
                        colors = {this.state.colors.map(item => item.color)}/> */}
                    <TransLink
                            mode = 'border'
                            text='Далее'
                            transferTo = 'Дата'
                            to = '/Details/Date/'
                            onClick={this.confirm}
                            active = {active()}/>
                </div>
            </Animator>
        )
    }
} 

 const mapStateToProps = (state) => {
    return({
        domen : state.domen,
        type  : state.orderDetails.type,
    })
} 

const mapDispatchToProps = {
    setDetail,
} 

export default connect(mapStateToProps, mapDispatchToProps)(CakeDecor)
