import React, {Component} from 'react';
import './VerticalArrow.scss';

export default class VerticalArrow extends Component {

    render(){
        return(
            <div className="verticalArrow">
                <div className="arrowWrapper">
                  <div className = 'line'></div>
                  <div className="left tip "></div>
                  <div className="right tip"></div>
                </div>
            </div>         
        )
    }
}