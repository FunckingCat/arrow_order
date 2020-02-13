import React,{Component} from 'react';
import './DatePicker.scss'; 

import Day from './Day/Day';

export default class DatePicker extends Component {

    daysRef = React.createRef();

    months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    today = new Date()

    state = {
        year : this.today.getFullYear(),
        prevMonth : this.today.getMonth(),
        month : this.today.getMonth(),
        days : [],
        selected : '',
    }

    componentDidMount() {
        this.renderWeek();
        this.renderDays();
    }

    componentDidUpdate() {
        let {month, prevMonth} = this.state;
        if (month !== prevMonth){
            this.renderDays();
            this.setState({
                prevMonth : month,
            })
        }
    }

    renderWeek = () => {
        let weekDays = [];
        let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        for( let i = 0; i < week.length; i++){
            weekDays.push(
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
        this.setState({
            week : weekDays,
        })
    }

    defDaysAmmount = () => {
        let daysAmmount;
        let {month, year} = this.state;
        let day31 = [0, 2, 4, 6, 7, 9, 11];
        let day30 = [3, 5, 8, 10];
        if (day31.indexOf(month) !== -1){
            daysAmmount = 31;
        } else if (day30.indexOf(month) !== -1){
            daysAmmount = 30
        } else if (year % 4 === 0){
            daysAmmount = 29;
        } else {
            daysAmmount = 28;
        }
        return daysAmmount
    }

    renderDays = () => {
        let days = [];
        let {month, year} = this.state;
        let firstDay = new Date(year, month, 1);
        for (let i = 0; i < firstDay.getDay() - 1; i++){
           days.push(
            <div
                key = {'empty' + i}
                className="empty"
                style = {{
                    width : this.daysRef.current.offsetWidth/7,
                    height: this.daysRef.current.offsetWidth/7,
                }}></div>
           )
        }
        let daysAmmount = this.defDaysAmmount();
        for( let i = 0; i < daysAmmount; i++){
            let dayActive = i <= this.today.getDate() + 1 && month === this.today.getMonth()? 'false' : 'true';
            days.push(
                <Day
                    id = {i}
                    name = 'day'   
                    width = {this.daysRef.current.offsetWidth/7}
                    date = {i + 1}
                    active = {dayActive}
                    key = {i}
                    red = {days.length%7 === 5 || days.length%7 === 6? 'true' : 'false'}
                    onChange = {this.daySelected}/>
            )
        }
        this.setState({
            days : days
        })
    }


    daySelected = (event) => {
        let {month, year} = this.state;
        let day = event.target.dataset.value;
        day = day < 10? '0' + day : day;
        month++;
        month = month < 10? '0' + month : month;
        let date = `${day} / ${month} / ${year}`;
        this.setState({
            selected : date,
        })
    }

    forward = () => {
        let month = this.state.month;
        if (month === this.today.getMonth()){
            this.setState({
                month : ++month,
            })
        }
    }

    back =() => {
        let month = this.state.month;
        if (month === this.today.getMonth() + 1){
            this.setState({
                month : --month,
            })
        }
    }


    render(){

        let{selected, month} = this.state;
        let{today, months} = this;

        let isEqual = today.getMonth() === month

        let prevStyle = {
            color : isEqual? '#b0b0b0' : 'black',
            pointerEvents : isEqual? 'none' : '',
        }

        let nextStyle = {
            color : isEqual? 'black' : '#b0b0b0',
            pointerEvents : isEqual? '' : 'none',
        }

        return(
            <div className="datePicker">
                <div className="selected">{selected}</div>
                <div className="dates">
                    <div className="month">
                        <div 
                            className="arrow prev"
                            style = {prevStyle} 
                            onClick = {this.back}>&lt;</div>
                        <div className="mth">{months[month]}</div>
                        <div 
                            className="arrow next" 
                            style = {nextStyle}
                            onClick = {this.forward}>&gt;</div>
                    </div>
                    <div  ref = {this.daysRef} className="days">
                        {this.state.week}
                        {this.state.days}
                    </div>
                </div>
            </div>
        )
    }
}
