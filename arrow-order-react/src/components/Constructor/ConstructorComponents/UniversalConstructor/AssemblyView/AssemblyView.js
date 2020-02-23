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
            top : this.props.top + 'px' || '0px',
            opacity : this.props.opacity + '' || '',
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
        CS : 47 / 34, //Высота к ширине крема,
        CF : 0, //Отношение высоты и грани крема,
        BS : 25 / 34, // Высота к ширине бисквита
        BF : 0.18, //Оношение высоты и грани бисквита
        FS : 54 / 85, // Высота к ширине начинки
        FF : 0.36, //Отношение выстоты и грани начинки
    }
    
    honeyConstants = {
        CS : 39 / 85, //Высота к ширине крема,
        CF : 0.09, //Отношение высоты и грани крема,
        BS : 81 / 170, // Высота к ширине бисквита
        BF : 0.15, //Оношение высоты и грани бисквита
        FS : 43 / 85, // Высота к ширине начинки
        FF : 0.09, //Отношение выстоты и грани начинки
    }
    
    cupConstants = {
        CS : 1, //Высота к ширине крема,
        CF : 1, //Отношение высоты и грани крема,
        BS : 118/160, // Высота к ширине бисквита
        BF : 0.06, //Оношение высоты и грани бисквита
        FS : 112/160, // Высота к ширине начинки
        FF : 0.10, //Отношение выстоты и грани начинки
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

    calcHeight = (formula, CH, CF, BH, BF, FH, FF) => {
        let height = 0;
        
        for (let i = 0; i < formula.length; i++){
            switch (formula[i]){
                case 'C':
                    height += CH * CF || 20;
                    break
                case 'F':
                    height += FH * FF;
                    break
                case 'B':
                    height += BH * BF;
                    break
                default:
                    throw new Error('Неизвестные символы в формуле');
            }
        }
        if (this.props.type !== 'cup'){
            height += BH - BH*BF;
        }
        return height
    }// Функция вычисления высоты сборки

    calcOptimalWidth = (formula, AH, AW, CS, CF, BS, BF, FS, FF) => {
        let ratio = 0.9;
        let step = 0.1;
        let inSize = false;

        while (!inSize){
            ratio -= step;
            let CW = AW * ratio; // Current Width

            let CH = CW * CS;
            let BH = CW * BS;
            let FH = CW * FS;
            
            let height = this.calcHeight(formula, CH, CF, BH, BF, FH, FF)

            if (height + 40 < AH){
                inSize = true;
            }
        }        
        return Math.round(ratio * 100) + '%'
    }

    defDimensions = (constants) => {

        let offsets = [0,];

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

        let {CS, CF, BS, BF, FS, FF} = constants;

        const AH = this.AssemblyView.current.offsetHeight;//Доступная высота
        const AW = this.AssemblyView.current.offsetWidth;// Вся ширина
        //СЧитаем доступный процент ширины
        const ratio = this.calcOptimalWidth(formula, AH, AW, CS, CF, BS, BF, FS, FF);
        //Задаем гирину равной вычисленной
        this.assembly.current.style.width = ratio;
        const W = this.assembly.current.offsetWidth;// Ширина контейнера сборки в пискселях

        let CH = W * CS; //Высота крема 
        let BH = W * BS; //Высота бисквита
        let FH = W * FS; //Высота начинки
        const assemblyHeight = this.calcHeight(formula, CH, CF, BH, BF, FH, FF);
        const CWH = W * CS * CF || 20; // Высота стенки крема. Или 20 для отсупа в бисквитном торте
        const BWH = W * BS * BF; // Высота стенки бисквита
        const FWH = W * FS * FF; // Высота стенки начинки
        console.log('CWH', CWH);
        console.log('BWH', BWH);
        console.log('FWH', FWH);
        let offset = 0;
        
        for (let i = 0; i < formula.length; i++){
            switch (formula[i]){
                case 'C':
                    offset += CWH;
                    break
                case 'F':
                    offset += BWH;
                    break
                case 'B':
                    offset += FWH;
                    break
                default:
                    throw new Error('Неизвестные символы в формуле');
            }
            offsets.push(offset)
        }

        console.log(offsets);
        let commonOffset = (AH - assemblyHeight)/2;
        offsets = offsets.map(item => item + commonOffset);

        console.log(
            'offsets', offsets,
            '\nformula', formula,
            '\nAvalivleHeight', AH,
            '\nAssembluHeight', assemblyHeight,
        );
        
        if (this.state.offsets[1] !== offsets[1] && this.state.offsets[3] !== offsets[3]){
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
                        opacity = {0.1*(i + 2)}
                        top = {this.state.offsets[i]}
                        src = {this.state.creamIcon}/>
                    break
                case 'F':
                    ingredient = <Ingr
                        key = {i+formula[i]}
                        zIndex = {-i + ''}
                        opacity = {0.1*(i + 2)}
                        top = {this.state.offsets[i]}
                        src = {this.state.fillingIcon}/>
                    break
                case 'B':
                    ingredient = <Ingr
                        key = {i+formula[i]}
                        zIndex = {-i + ''}
                        opacity = {0.1*(i + 2)}
                        top = {this.state.offsets[i]}
                        src = {this.state.biscuitIcon}/>
                    break
                default:
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