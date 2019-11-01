import React, {Component} from 'react';
import BurgerButton from './HatComponents/BurgerButton/BurgerButton';
import OrderButton from './HatComponents/OrderButton/OrderButton'
import './Hat.css';


export default class Hat extends Component {
    render() {
        return(
            <div className="hat">
                <BurgerButton />
                <OrderButton />
            </div>
        )
    }
}