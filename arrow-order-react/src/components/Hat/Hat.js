import React, {Component} from 'react';
import './Hat.css';


export default class Hat extends Component {
    render() {
        return(
            <div className="hat">
                {this.props.left}
                {this.props.middle}
                {this.props.right}
            </div>
        )
    }
}