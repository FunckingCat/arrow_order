import React,{Component} from 'react';
import './Details.scss'; 

import Textarea from '../Textarea/Textarea';

export default class Details extends Component {

    state = {
        active : false,
    }

    toggle = () => {
        this.setState({
            active : !this.state.active,
        })
    }

    render(){

        let rotate = this.state.active? 'rotate' : '';
        let details = 
            <>
            <div className={'summary'}>
                <h2>{this.props.summary}</h2>
                <div className={'arrow ' + rotate}>
                    <div className="left"></div>
                    <div className='right'></div>
                </div>
            </div>
            <div className="content">
                <Textarea
                    active = {this.state.active}
                    height = {this.props.height}>
                    {this.props.children}
                </Textarea>
            </div>
            </>

        return(
            <div className="details" onClick = {this.toggle}>
               {this.props.summary? details : ''}
            </div>
        )
    }
}
