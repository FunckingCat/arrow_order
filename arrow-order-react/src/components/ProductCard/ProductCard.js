import React,{Component} from 'react';
import './ProductCard.scss'; 
import {connect} from 'react-redux'; 

import Image     from '../ComCom/Bg/Bg';
import TransLink from '../ComCom/Buttons/TransLink/TransLink';

class ProductCard extends Component {

    state = {
        title : this.props.prod,
        image : '/static/stock/Bell.png',
        descr : `Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание дальнейших направлений развития.
        С другой стороны постоянный количественный рост и сфера нашей активности позволяет оценить значение форм развития. Равным образом реализация намеченных плановых заданий позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу`
    }

    renderSelectors = () => {
        let selectors = [];
        return selectors
    }

    render(){
        
        let selectors = this.renderSelectors();

        return(
            <div className="productCard">
                <div className="mainInfo">
                    <h1 className="title">{this.state.title}</h1>
                    <div className="cost">
                        <span className="value">1200</span> 
                        <span className="dim">р/кг</span>
                    </div>
                </div>
                <Image  
                    domen = {this.props.domen}
                    src = {this.state.image}/>
                <div className="descr">{this.state.descr}</div>
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
        )
    }
} 

 const mapStateToProps = (state) => {
 return({
    domen : state.domen,
 }) 
} 

const mapDispatchToProps = {

} 

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
