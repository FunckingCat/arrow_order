import React,{Component} from 'react';
import './DatePicker.scss'; 

import Day from './Day/Day';

export default class DatePicker extends Component {

    daysRef = React.createRef();

    state = {
        selected : '30 / 09 / 2020',
        days : []
    }

    componentDidMount() {
        this.renderDays();
    }

    daySelected = (event) => {
        console.log(event.target.dataset.value);
        let date = new Date();
        console.log(date);
    }

    renderDays = () => {
        let days = [];
        let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        for( let i = 0; i < week.length; i++){
            days.push(
                <div
                    className="weekDay" 
                    style = {{
                        width : this.daysRef.current.offsetWidth/7,
                        color : i > 4? '#b43131' : 'black',
                    }}
                    key = {week[i]}>
                    {week[i]}
                </div>
            )
        }
        for( let i = 0; i < 31; i++){
            days.push(
                <Day
                    id = {i}
                    name = 'day'   
                    width = {this.daysRef.current.offsetWidth/7}
                    date = {i + 1}
                    active = {'true'}
                    key = {i}
                    onChange = {this.daySelected}/>
            )
        }
        this.setState({
            days : days
        })
    }

    render(){

        return(
            <div className="datePicker">
                <div className="selected">{this.state.selected}</div>
                <div className="dates">
                    <div className="month">
                        <div className="arrow prev">&lt;</div>
                        <div className="mth">Февраль, 2020</div>
                        <div className="arrow next">&gt;</div>
                    </div>
                    <div  ref = {this.daysRef} className="days">
                        {this.state.days}
                    </div>
                </div>
            </div>
        )
    }
}
