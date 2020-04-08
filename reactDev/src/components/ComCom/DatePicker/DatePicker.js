import React,{Component} from 'react';
import './DatePicker.scss'; 
import {connect} from 'react-redux';

import RequestService from '../../../servises/requestService';

import Day from './Day/Day';

class DatePicker extends Component {

    daysRef = React.createRef();

    months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    today = new Date()

    RS = new RequestService(this.props.domen)

    state = {
        year : this.today.getFullYear(),
        month : this.props.month? this.today.getMonth()+1 : this.today.getMonth(),
        busyDays : [],
        days : [],
        selected : '',
        prevMonth : this.today.getMonth(),
        prevBusyDays : [],
    }

    componentDidMount() {
        this.getBusyDays();
        this.renderWeek();
        this.renderDays();
    }

    componentDidUpdate() {
        let {month, prevMonth, busyDays, prevBusyDays} = this.state;
        if (month !== prevMonth){
            this.getBusyDays();
            this.renderDays();
            this.setState({
                prevMonth : month,
            })
        }
        if (!this.equal(busyDays, prevBusyDays)){
            this.renderDays();
            this.setState({
                prevBusyDays : busyDays,
            })
        }
    }

    equal = (a1, a2) => {
        if (a1.length !== a2.length) return false
        for (let i=0; i<a1.length; i++){
            if (a1[i] !== a2[i]) return false
        }
        return true
    }

    getBusyDays = () => {
        this.RS.getBusyDays(this.state.month + 1)
        .then(res => {
            this.setState({
                busyDays : res,
            })
        })
    }

    //Создаем шапочку с днями недели
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

    //Определяет сколько дней в текущем месяце
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
        let daysPaddings = {
            'Mon' : 0,
            'Tue' : 1,
            'Wed' : 2,
            'Thu' : 3,
            'Fri' : 4,
            'Sat' : 5,
            'Sun' : 6,
        }
        let {month, year} = this.state;
        let firstDay = new Date(year, month, 1);
        let dayOfWeek = String(firstDay).slice(0,3);
        //Создвем пустые ячейки что бы первый день месяца соответсятвовал своему дню недели
        for (let i = 0; i < daysPaddings[dayOfWeek]; i++){
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
        //Дальше создаем все дни месяца
        let daysAmmount = this.defDaysAmmount();
        for( let i = 0; i < daysAmmount; i++){
            // Проверяем прошел день или нет
            let dayActive = i <= this.today.getDate() + 1 && month === this.today.getMonth()? 'false' : 'true';
            //Проверяем если день в списке занятых дней
            if (this.state.busyDays.indexOf(i+1) > -1) dayActive = 'false'; 
            days.push(
                <Day
                    id = {i}
                    name = {'day'}   
                    width = {this.daysRef.current.offsetWidth/7}
                    onlyView = {this.props.onlyView}
                    date = {i + 1}
                    active = {dayActive}
                    key = {String(i) + String(this.state.month)}
                    red = {days.length%7 === 5 || days.length%7 === 6? 'true' : 'false'}
                    onChange = {this.daySelected}/>
            )
        }
        this.setState({
            days : days
        })
    }

    //При выборе дня создает красивую строку с датой
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
        if (!this.props.onInput){
            console.error('Нет функции onInput, куда дату передавать?');
            return
        }
        this.props.onInput(date);
    }

    forward = () => {//Обработчик переключения месяца вперед
        let month = this.state.month;
        if (month === this.today.getMonth()){
            this.setState({
                month : ++month,
            })
        }
    }

    back =() => {// Обрабочик переключения месяца назад
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
        //Проверка месяца, так как доступны только два месяца то есть только 2 состояния
        let isEqual = today.getMonth() === month

        let prevStyle = { //Выключение левой стрелки
            color : isEqual? '#b0b0b0' : 'black',
            pointerEvents : isEqual? 'none' : '',
            display : this.props.onlyView? 'none' : '',
        }

        let nextStyle = {//Выключение правой стрелки
            color : isEqual? 'black' : '#b0b0b0',
            pointerEvents : isEqual? '' : 'none',
            display : this.props.onlyView? 'none' : '',
        }

        let selectedBlock;
        if (!this.props.onlyView) selectedBlock = <div className="selected">{selected}</div>;

        return(
            <div className="datePicker">
                {selectedBlock}
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

const mapStateToProps = (state) => {
    return {
        domen : state.domen,
    }
}

export default connect(mapStateToProps)(DatePicker)
