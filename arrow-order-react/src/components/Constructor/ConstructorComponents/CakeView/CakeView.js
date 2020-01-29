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
        offsets : [0, 0, 0, 0, 0, 0],
    }

    componentDidMount() {
        this.defDimensions();
    }

    defDimensions = () => {

        const calcHeight = (BH, BF, FH, FF) => {
            return BH*BF*2 + BH + FH*FF*2 + 20
        }// Функция вычисления высоты сборки

        const calcOptimalHeight = (AH, AW, BS, FS, BF, FF) => {
            let ratio = 0.7;
            let inSize = false;

            while (!inSize && ratio !== 0){
                let W = ratio * AW;
                let BH = W * BS;
                let FH = W * FS;
                let tempHeight = calcHeight(BH, BF, FH, FF);
                if (AH - tempHeight > 0){
                    inSize = true;
                    console.log(
                        'ratio', Math.round(ratio * 100) + '%',
                        '\ntempHeight', tempHeight,
                        '\nAH', AH,
                    );
                }
                ratio -= 0.1;
            }

            return Math.round(ratio * 100) + '%'
        }

        const CH = this.CakeView.current.offsetHeight;//Доступная высота
        const CW = this.CakeView.current.offsetWidth;// Вся ширина
        const BS = 118/160; // Высота к ширине бисквита
        const FS = 102/160; // Высота к ширине начинки
        const BF = 0.32; //Оношение высоты и грани бисквита
        const FF = 0.20; //Отношение выстоты и грани начинки

        //СЧитаем доступный процент ширины
        const ratio = calcOptimalHeight(CH, CW, BS, FS, BF, FF);
        //Задаем гирину равной вычисленной
        this.cake.current.style.width = ratio;
        const W = this.cake.current.offsetWidth;// Ширина контейнера сборки в пискселях
        const BH = W * BS; // Высота бисквита при конкретной ширине блока контейнера
        const FH = W * FS; // Высота начинки 
        const CF = 0; //Условно высота крема
        const height = calcHeight(BH, BF, FH, FF);

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

        let commonOffset = (CH - height) / 2;
        offsets = offsets.map(item => item + commonOffset)

        console.log(
        'offsets', offsets,
        '\nBiscuitHeight', BH,
        '\nAllHeight', height,
        '\ncommon oofset', commonOffset);
        if (this.state.offsets[0] !== offsets[0] && this.state.offsets[3] !== offsets[3]){
            this.setState({
                offsets : offsets
            })
        }
    }

    renderBiscuits = () => {
        let biscuits = [];
        let positions = [5, 3, 1];
        let refs = [this.B1, this.B2,this.B3];
        for (let i=0; i < 3; i++){
            biscuits.push(
                <div 
                    key = {'B'+i} 
                    ref = {refs[i]} 
                    className="biscuit" 
                    id = {'B'+(i+1)}
                    style = {
                        {'top' : this.state.offsets[positions[i]],}
                    }>
                    <img src={this.state.biscuitIcon} alt=""/>
                </div>
            )
        }
        return biscuits
    }

    renderFillings = () => {
        let fillings = [];
        let positions = [4, 2]
        let refs = [this.F1, this.F2];
        for (let i=0; i < 2; i++){
            fillings.push(
                <div 
                    key = {'F'+i} 
                    ref = {refs[i]} 
                    className="filling" 
                    id = {'F' +(i+1)}
                    style = {
                        {'top' : this.state.offsets[positions[i]]}
                    }>
                    <img src={this.state.fillingIcon} alt=""/>
                </div>
            )
        }
        return fillings
    }
    
    renderCream = () => {
        return (
            <div 
                ref = {this.C} 
                className="cream" 
                id="C"
                style = {
                    {'top' : this.state.offsets[0]}
                }>
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