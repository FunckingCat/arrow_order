import React,{Component} from 'react';
import './AssemblyView.scss'; 
import {connect} from 'react-redux';


//Props: 
//bicuitIcon
//fillingIcon
//creamIcon
class Ingr extends Component {
    render() {
        let style = {
            width : this.props.width || '100%',
            zIndex : this.props.zIndex || '0',
            top : this.props.top || '0px',
        }
        return(
            <div className='ingredient' style = {style}>
                <img src={this.props.src} alt=""/>
            </div>
        )
    }
}


class AssemblyView extends Component {

    AssemblyView = React.createRef();
    assembly     = React.createRef();

    state = {
        prevProps : {},
        biscuitIcon: this.props.domen + this.props.biscuitIcon,
        fillingIcon: this.props.domen + this.props.fillingIcon,
        creamIcon  : this.props.domen + this.props.creamIcon,
        offsets : [0, 0, 0, 0, 0, 0],
    }

    biscuitConstants = {
        BS : 118/160, // Высота к ширине бисквита
        BF : 0.32, //Оношение высоты и грани бисквита
        FS : 102/160, // Высота к ширине начинки
        FF : 0.20, //Отношение выстоты и грани начинки
        CS : 0, //Высота к ширине крема,
        CF : 0, //Отношение высоты и грани крема,
    }

    honeyConstants = {
        BS : 0.4796, // Высота к ширине бисквита
        BF : 0.509, //Оношение высоты и грани бисквита
        FS : 0.0932, // Высота к ширине начинки
        FF : 0.1347, //Отношение выстоты и грани начинки
        CS : 0.4796, //Высота к ширине крема,
        CF : 0.0932, //Отношение высоты и грани крема,
    }

    cupConstants = {
        BS : 0.895, // Высота к ширине бисквита
        BF : 0, //Оношение высоты и грани бисквита
        FS : 0, // Высота к ширине начинки
        FF : 0, //Отношение выстоты и грани начинки
        CS : 0.902, //Высота к ширине крема,
        CF : 0, //Отношение высоты и грани крема,
    }

    componentDidMount() {
        switch (this.props.type){
            case 'biscuit':
                this.defDimensions(this.biscuitConstants);
                break
            case 'honey':
                this.defDimensions(this.honeyConstants);
                break
            case 'cup':
                this.defDimensions(this.cupConstants);
                break
            default:
                return
        }
    }

    componentDidUpdate() {
        let {biscuitIcon: b1, fillingIcon: f1, creamIcon: c1} = this.props;
        let {biscuitIcon: b2, fillingIcon: f2, creamIcon: c2} = this.state.prevProps;
        if (b1 !== b2 || f1 !== f2 || c1 !== c2){
            this.setState({
                biscuitIcon: this.props.domen + this.props.biscuitIcon,
                fillingIcon: this.props.domen + this.props.fillingIcon,
                creamIcon  : this.props.domen + this.props.creamIcon,
                prevProps : {
                    biscuitIcon : b1,
                    fillingIcon : f1,
                    creamIcon : c1,
                }
            })
        }
    }

    calcHeight = (formula, BH, BF, FH, FF, CH, CF) => {
        let height = 0;
        for (let i = 0; i < formula.length; i++){
            switch (formula[i]){
                case 'C':
                    height += CH * CF;
                    break
                case 'F':
                    height += FH * FF;
                    break
                case 'B':
                    height += BH * BF;
                    break
                default:
                    formula = '';
                    break
            }
        }
        height += BH * BF;
        return height
    }// Функция вычисления высоты сборки

    calcOptimalWidth = (AH, AW, BS, FS, BF, FF, CS, CF) => {
        let ratio = 0.9;
        let inSize = false;

        while (!inSize && ratio !== 0){
            ratio -= 0.05
            let W = ratio * AW;
            let BH = W * BS;
            let FH = W * FS;
            let СH = W * CS;
            let tempHeight = this.calcHeight(BH, BF, FH, FF, СH, CF) + 20;
            if (AH - tempHeight > 0){
                inSize = true;
            }
        }

        return Math.round(ratio * 100) + '%'
    }

    defDimensions = (constants) => {
        let formula;

        switch (this.props.type){
            case 'biscuit':
                formula = 'CBFBFB';
                break
            case 'honey':
                formula = 'CBFBFB';
                break
            case 'cup':
                formula = 'CFB';
                break
            default:
                formula = '';
                break
        }

        let {BS, BF, FS, FF, CS, CF} = constants;

        const AH = this.AssemblyView.current.offsetHeight;//Доступная высота
        const AW = this.AssemblyView.current.offsetWidth;// Вся ширина
        //СЧитаем доступный процент ширины
        const ratio = this.calcOptimalWidth(AH, AW, BS, FS, BF, FF, CS, CF);
        //Задаем гирину равной вычисленной
        this.assembly.current.style.width = ratio;
        const W = this.assembly.current.offsetWidth;// Ширина контейнера сборки в пискселях
        const BH = W * BS; // Высота бисквита при конкретной ширине блока контейнера
        const FH = W * FS; // Высота начинки
        const СH = W * CS; // Высота крема
        const height = this.calcHeight(formula, BH, BF, FH, FF, СH, CF);

        //Список показывает в каком порядке идут коэффициенты удаления
        //(размер стенки конеретной SVG шки)
        let factors;
        switch (this.props.type){
            case 'biscuit':
                factors = [CF, BF, FF, BF, FF, BF];
                break
            case 'honey':
                factors = [CF, BF, FF, BF, FF, BF];
                break
            case 'cup':
                factors = [CF, FF, BF];
                break
            default:
                factors = []
        }

        //Сами смещения
        let offsets = [0,]
        let currentOffset = 0
        for (let i = 1; i < factors.length; i++){
            if (factors[i-1] === BF){
                currentOffset += BH * factors[i-1];
            } else if (factors[i-1] === FF) {
                currentOffset += FH * factors[i-1];
            } else if (factors[i-1] === CF){
                currentOffset += 20;
            }
            offsets.push(currentOffset);
        }

        let commonOffset = (AH - height) / 2;
        offsets = offsets.map(item => item + commonOffset)

        console.log(
        'offsets', offsets,
        '\nratio', ratio,
        '\nassemblyHeight', height,
        '\ncommon offset', commonOffset);
        if (this.state.offsets[0] !== offsets[0] && this.state.offsets[3] !== offsets[3]){
            this.setState({
                formula : formula,
                offsets : offsets
            })
        }
    }

    renderIngredients = () => {
        let ingredients = [];

        let formula = this.state.formula || '';

        let ingredient = '';
        for (let i=0; i < formula.length; i++){
            switch (formula[i]){
                case 'C':
                    ingredient = <Ingr
                        key = {i+formula[i]}
                        zIndex = {-i + ''}
                        src = {this.state.creamIcon}/>
                    break
                case 'F':
                    ingredient = <Ingr
                        key = {i+formula[i]}
                        zIndex = {-i + ''}
                        src = {this.state.fillingIcon}/>
                    break
                case 'B':
                    ingredient = <Ingr
                        key = {i+formula[i]}
                        zIndex = {-i + ''}
                        src = {this.state.biscuitIcon}/>
                    break
                default:
                    formula = '';
                    break
            }
            ingredients.push(ingredient);
        }

        return ingredients
    }

    render(){
        let ingredients = this.renderIngredients();
        return(
            <div className = 'AssemblyView' ref = {this.AssemblyView}>
                <div className="assembly" ref= {this.assembly}>
                    {ingredients}
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

export default connect(mapStatetoProps)(AssemblyView)