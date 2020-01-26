import React,{Component} from 'react';
import './CakeView.scss'; 
import {connect} from 'react-redux';

//соотношение высот иконок


class CakeView extends Component {
    CakeView = React.createRef();
    cake     = React.createRef();
    B1 = React.createRef();
    B2 = React.createRef();
    B3 = React.createRef();
    F1 = React.createRef();
    F2 = React.createRef();
    C  = React.createRef();

    state = {
        biscuitIcon: this.props.domen + (this.props.biscuitIcon || '/static/icons/constructor/biscuit/default.svg'),
        fillingIcon: this.props.domen + (this.props.fillingIcon || '/static/icons/constructor/filling/default.svg'),
        creamIcon  : this.props.domen + (this.props.creamIcon || '/static/icons/constructor/cream/default.svg'),
        offsets : [],
    }


    componentDidMount() {
        this.defDimensions(this.props.expantion);
    }

    defDimensions = (smash = false) => {
        const CF = 0; //Условно высота крема
        const BH = this.B1.current.offsetHeight;//Высота бисквита
        const FH = this.F1.current.offsetHeight;//Выстота начинки
        const BF = 0.32; //Оношение высоты и грани бисквита
        const FF = 0.20; //Отношение выстоты и грани начинки
        const avalibleHeight = this.CakeView.current.offsetHeight;
        const height = BH*BF*2 + BH + FH*FF*2 + 20;//Выстота всей сборки

        //Просто функция округляющая до сотых
        let round = (num) => Math.floor(num * 100) / 100

        //Список показывает в каком порядке идут коэффициенты удаления
        //(размер стенки конеретной SVG шки)
        let factors = [CF, BF, FF, BF, FF, BF]

        //Сами смещения
        let offsets = [0,]
        let currentOffset = 0
        for (let i = 1; i < factors.length; i++){
            if (factors[i-1] === BF){
                currentOffset += round(BH * factors[i-1]);
            } else if (factors[i-1] === FF) {
                currentOffset += round(FH * factors[i-1]);
            } else if (factors[i-1] === CF){
                currentOffset += 20;
            }
            offsets.push(currentOffset);
        }

        if (smash){ // Есть 2 варианта рендера
            //Рендер разнесенной сборки
            let expantion = (avalibleHeight-height) / 8;
            for (let i=0; i < offsets.length; i++){
                offsets[i] += expantion * (i + 1)
            }
        } else {
            //Рендер сборки 
            let commonOffset = (avalibleHeight - height) / 2;//Вычисляем отступ           
            offsets = offsets.map(item => item + commonOffset)
        }

        this.setOffsets(offsets)
    }

    //Применяем вычисленные отступы к элементам сборки
    setOffsets = (offsets) => {
        let {B1, B2, B3, F1, F2, C} = this;
        //Последовательность элементов в торте
        let sequence = [C, B3, F2, B2, F1, B1];
        for (let i = 0; i < sequence.length; i++){
            sequence[i].current.style.top = offsets[i] + 'px';
        }
    }

    renderBiscuits = () => {
        let biscuits = [];
        let refs = [this.B1, this.B2,this.B3];
        for (let i=0; i < 3; i++){
            biscuits.push(
                <div key = {'B'+i} ref = {refs[i]} className="biscuit" id = {'B'+(i+1)}>
                    <img src={this.state.biscuitIcon} alt=""/>
                </div>
            )
        }
        return biscuits
    }

    renderFillings = () => {
        let fillings = [];
        let refs = [this.F1, this.F2];
        for (let i=0; i < 2; i++){
            fillings.push(
                <div key = {'F'+i} ref = {refs[i]} className="filling" id = {'F' +(i+1)}>
                    <img src={this.state.fillingIcon} alt=""/>
                </div>
            )
        }
        return fillings
    }
    
    renderCream = () => {
        return (
            <div ref = {this.C} className="cream" id="C">
                <img src={this.state.creamIcon} alt=""/>
            </div>
        )
    }

    render(){
        let biscuits = this.renderBiscuits();
        let fillings = this.renderFillings();
        let cream = this.renderCream();
        return(
            <div className = 'CakeView' ref = {this.CakeView}>
                <div className="cake" ref= {this.cake}>
                   {biscuits}
                   {fillings}
                   {cream}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        domen : state.domen
    }
}

export default connect(mapStatetoProps)(CakeView)