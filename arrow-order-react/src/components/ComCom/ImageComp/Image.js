import React, {Component} from 'react';

import Spiner from '../Spiner/Spiner';
import NotFound from './NotFound.svg';

export default class Image extends Component {

    renderContent = () => {
        if (this.props.status === 102 || this.props.status === '102'){
            return <Spiner/>
        } else  if (this.props.src){
            return <img src={process.env.PUBLIC_URL + this.props.src} alt={this.props.alt || 'Have a nice day'}/>
        } else {
            return <img src = {NotFound} alt = 'NotFound'/>
        }
    }

    render() {
        let content = this.renderContent()
        return(
            <div className="Image">
                {content}
            </div>
        )
    }
}