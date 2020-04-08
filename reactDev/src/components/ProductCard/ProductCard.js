import React,{Component} from 'react';
import './ProductCard.scss'; 
import {connect} from 'react-redux'; 
import {setOrderType, setDetail, resetOrder} from '../../actions/orderActions';

import RequestService from '../../servises/requestService';

import Image      from '../ComCom/Bg/Bg';
import Quantum    from '../ComCom/Quantum/Quantum';
import InputRange from '../ComCom/Buttons/InputRange/InputRange';
import TransLink  from '../ComCom/Buttons/TransLink/TransLink';
import Animator   from '../ComCom/Animator/Animator';
import List       from '../ComCom/InfoView/List/List';
import CheckList  from '../ComCom/InfoView/CheckList/CheckList';

class ProductCard extends Component {

    RS = new RequestService(this.props.domen)

    state = {
        
    }

    componentDidMount() {
        this.props.resetOrder();
        this.RS.getProductCard(this.props.prod)
        .then((res) => {
            this.props.setOrderType(res.name);
            this.props.setDetail('cost', res.cost);
            this.setState({
                title : res.name,
                cost  : res.cost,
                dim   : res.dim,
                descr : res.descr,
                image : res.image,
                template : res.template, 
            })
        })
    }

    randomInteger = (min = 1, max = 9999) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    onInput = (name) => {
        return (value) => {
            if (typeof(value) !== 'string'){
                try{
                    value = value.join(' ')
                } catch {}
            }
            this.props.setDetail(name, value);
        }
    }

    renderSelectors = () => {
        let selectors = [];
        let items;
        let tmp = this.state.template;
        let defWidth = (param) => {
            let ml = 0;
            for (let item of param){
                if (item.length > ml) ml = item.length;
            }
            if (ml < 5) return '40%'
            if (ml < 10) return '55%'
            return '65%'
        }
        if (!tmp) return []
        console.log(tmp);
        for (let i=0; i < tmp.length; i++){
            switch (tmp[i].type){
                case 'range':
                    selectors.push(
                        <div className="range" key = {i}>
                            <div className="label">{tmp[i].name}:</div>
                            <InputRange
                                min = {Number(tmp[i].param[0])}
                                max = {Number(tmp[i].param[1])}
                                step = {Number(tmp[i].param[2])}
                                dimension = {tmp[i].param[3]}
                                onInput = {this.onInput(tmp[i].name)}/>
                        </div>
                    )
                    break
                case 'amm':
                    selectors.push(
                        <div className="amm" key = {i}>
                            <div className="label">{tmp[i].name}:</div>
                            <Quantum
                                width = '40%'
                                from = {Number(tmp[i].param[0])}
                                to = {Number(tmp[i].param[1])}
                                step = {Number(tmp[i].param[2])}
                                onInput = {this.onInput(tmp[i].name)}/>
                        </div>
                    )
                    break
                case 'seq':
                    selectors.push(
                        <div className="seq" key = {i}>
                            <div className="label">{tmp[i].name}:</div>
                            <Quantum
                                width = {defWidth(tmp[i].param)}
                                seq = {tmp[i].param}
                                onInput = {this.onInput(tmp[i].name)}/>
                        </div>
                    )
                    break
                case 'list':
                    items = tmp[i].param.map(item => {
                        return {
                            name : item,
                            id   : this.randomInteger() 
                        }
                    })
                    selectors.push(
                        <div className="list" key = {i}>
                            <div className="label">{tmp[i].name}:</div>
                            <List 
                                active = 'all'
                                items = {items}
                                onSelect = {this.onInput(tmp[i].name)}/>
                        </div>
                    )
                    break
                case 'check':
                    items = tmp[i].param.map(item => {
                        return {
                            name : item,
                            id   : this.randomInteger() 
                        }
                    })
                    selectors.push(
                        <div className="checkList" key = {i}>
                            <div className="label">{tmp[i].name}:</div>
                            <CheckList 
                                items = {items}
                                onChange = {this.onInput(tmp[i].name)}/>
                        </div>
                    )
                    break
                default:
                    console.log('Не подошло');
                    break
            }
        }
        return selectors
    }

    renderDescr = (descr) => {
        if (!descr) return descr
        let render = []
        let paragraphs = descr.split('\n')
        for (let item of paragraphs){
            if (item.length < 4) continue
            render.push(
                <div className="paragraph" key = {item}>
                    <div className="tab"></div>
                    <div className="cont">{item}</div>
                </div>
            )
        }
        return render
    }

    render(){
        
        let selectors = this.renderSelectors();

        let descr = this.renderDescr(this.state.descr)

        return(
            <Animator>
                <div className="productCard">
                    <div className="mainInfo">
                        <h1 className="title">{this.state.title}</h1>
                        <div className="cost">
                            <span className="value">{this.state.cost}</span> 
                            <span className="dim">{this.state.dim}</span>
                        </div>
                    </div>
                    <Image  
                        domen = {this.props.domen}
                        src = {this.state.image}/>
                    <div className="descr">{descr}</div>
                    <div className="selectors">
                        {selectors}
                    </div>
                    <TransLink
                            mode = 'border'
                            text='Далее'
                            transferTo = 'Дата'
                            to = '/Details/Date/'
                            onClick={() => console.log('Confirm')}
                            active = {'true'}/>
                </div>
            </Animator>
        )
    }
} 

 const mapStateToProps = (state) => {
 return({
    domen : state.domen,
 }) 
} 

const mapDispatchToProps = {
    setOrderType,
    setDetail,
    resetOrder,
} 

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
