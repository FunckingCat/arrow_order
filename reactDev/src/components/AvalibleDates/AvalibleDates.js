import React,{Component} from 'react';
import './AvalibleDates.scss'; 

import DatePicker from '../ComCom/DatePicker/DatePicker';

export default class AvalibleDates extends Component {

    render(){
        return(
            <div className="avalibleDates">
                <DatePicker
                    onlyView = 'true'/>
                <DatePicker
                    onlyView = 'true'
                    month = 'next'/>
            </div>
        )
    }
}
