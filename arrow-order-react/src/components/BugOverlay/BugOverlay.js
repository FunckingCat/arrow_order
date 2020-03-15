import React,{Component} from 'react';
import './BugOverlay.scss'; 
import {connect} from 'react-redux';

import RequestService from '../../servises/requestService';
import CheckList      from '../ComCom/InfoView/CheckList/CheckList';
import InputText      from '../ComCom/InputText/InputText';
import BlackButton    from '../ComCom/Buttons/BlackButton/BlackButton';

class BugOverlay extends Component {

    RS = new RequestService(this.props.domen)

    reasons = [
        {name : 'Странное поведение'},
        {name : 'Что то не работает'},
        {name : 'Произошло что то ужасное'},
    ]

    placeholder = 'Опишите проблему, обязательно напишите модель устройства с которого серфите'

    state = {
        reportActive : false,
        reasons : [],
        comment : '',
    }

    wantReport = () => {
        this.setState({
            reportActive : true,
        })
    }

    closeReport = () => {
        this.setState({
            reportActive : false,
            reasons : [],
            comment : '',
        })
    }

    reasonSelect = (reason) => {
        this.setState({
            reasons : reason,
        })
    }

    commentInput = (text) => {
        this.setState({
            comment : text,
        })
    }

    sendForm = () => {
        let report = {
            name : this.props.name,
            contact : this.props.contact,
            reason : this.state.reasons,
            descr : this.state.comment,
        }
        this.RS.postBugReport(JSON.stringify(report));
        this.closeReport()
    }

    renderContent = () => {
        if (!this.state.reportActive){
            return(
                <button className = 'report' onClick = {this.wantReport}> 
                    <div className="top">report a</div>
                    <div className="bottom">BUG</div>
                </button>
            )
        }
        else {
            return(
                <div className="formWrapper">
                    <div className="form">
                        <div className="cross" onClick = {this.closeReport}>
                            <div className="first"></div>
                            <div className="second"></div>
                        </div>
                        <div className="title">Какой баг вы нашли?</div>
                        <CheckList
                            items = {this.reasons}
                            onChange = {this.reasonSelect}/>
                        <InputText
                            placeholder = {this.placeholder}
                            onInput = {this.commentInput}/>
                        <BlackButton
                            text = 'Отправить'
                            mode = 'border'
                            active = {this.state.reasons.length > 0 && this.state.comment.length > 0?'true' : 'false'}
                            onClick = {this.sendForm}/>
                    </div>
                </div>
            )
        }
    }

    render(){

        let content = this.renderContent()

        return(
            <div className="bugOverlay">
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name    : state.login.name,
        contact : state.login.contact,
        domen   : state.domen,
    }
}

export default connect(mapStateToProps)(BugOverlay)