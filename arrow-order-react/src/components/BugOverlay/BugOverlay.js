import React,{Component} from 'react';
import './BugOverlay.scss'; 

export default class BugOverlay extends Component {

    state = {
        reportActive : false,
    }

    wantReport = () => {
        this.setState({
            reportActive : true,
        })
    }

    closeReport = () => {
        this.setState({
            reportActive : false,
        })
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
