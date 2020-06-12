import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Hat.scss';


export default class Hat extends Component {
    render() {
        return(
            <div className="hat">
                {this.props.left}
                <Link to = {'/MainPage'}>{this.props.middle}</Link>
                {this.props.right}
            </div>
        )
    }
}