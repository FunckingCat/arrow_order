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

        let details = 
            <>
            <div className="summary">
                <h2>{this.props.summary}</h2>
                <button onClick = {this.toggle}/>
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
            <div className="details">
               {this.props.summary? details : ''}
            </div>
        )
    }
}
