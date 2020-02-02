import React,{Component} from 'react';
import './CakeView.scss'; 
import {connect} from 'react-redux';


//Props: 
//bicuitIcon
//fillingIcon
//creamIcon


class CakeView extends Component {
    CakeView = React.createRef();
    cake     = React.createRef();

    state = {
        prevProps : {},
        biscuitIcon: this.props.domen + (this.props.biscuitIcon || '/static/icons/constructor/biscuit/default.svg'),
        fillingIcon: this.props.domen + (this.props.fillingIcon || '/static/icons/constructor/filling/default.svg'),
        creamIcon  : this.props.domen + (this.props.creamIcon || '/static/icons/constructor/cream/default.svg'),
        offsets : [0, 0, 0, 0, 0, 0],
    }

    componentDidMount() {
        this.defDimensions();
    }

    componentDidUpdate() {
        let {biscuitIcon: b1, fillingIcon: f1, creamIcon: c1} = this.props;
        let {biscuitIcon: b2, fillingIcon: f2, creamIcon: c2} = this.state.prevProps;
        if (b1 !== b2 || f1 !== f2 || c1 !== c2){
            console.log('UPDATING');
            this.setState({
                biscuitIcon: this.props.domen + (this.props.biscuitIcon || '/static/icons/constructor/biscuit/default.svg'),
                fillingIcon: this.props.domen + (this.props.fillingIcon || '/static/icons/constructor/filling/default.svg'),
                creamIcon  : this.props.domen + (this.props.creamIcon || '/static/icons/constructor/cream/default.svg'),
                prevProps : {
                    biscuitIcon : b1,
                    fillingIcon : f1,
                    creamIcon : c1,
                }
            })
        }
    }

    defDimensions = () => {

        const calcHeight = (BH, BF, FH, FF) => {
            return BH*BF*2 + BH + FH*FF*2 + 20
        }// Функция вычисления высоты сборки

        const calcOptimalWidth = (AH, AW, BS, FS, BF, FF) => {
            let ratio = 0.9;
            let inSize = false;

            while (!inSize && ratio !== 0){
                ratio -= 0.05
                let W = ratio * AW;
                let BH = W * BS;
                let FH = W * FS;
                let tempHeight = calcHeight(BH, BF, FH, FF) + 20;
                if (AH - tempHeight > 0){
                    inSize = true;
                }
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
        const ratio = calcOptimalWidth(CH, CW, BS, FS, BF, FF);
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

        // console.log(
        // 'offsets', offsets,
        // '\nratio', ratio,
        // '\ncakeHeight', height,
        // '\ncommon offset', commonOffset);
        if (this.state.offsets[0] !== offsets[0] && this.state.offsets[3] !== offsets[3]){
            this.setState({
                offsets : offsets
            })
        }
    }

    renderBiscuits = () => {
        let biscuits = [];
        let positions = [5, 3, 1];
        for (let i=0; i < 3; i++){
            biscuits.push(
                <div 
                    key = {'B'+i} 
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
        for (let i=0; i < 2; i++){
            fillings.push(
                <div 
                    key = {'F'+i} 
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