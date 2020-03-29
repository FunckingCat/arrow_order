import React, {Component} from 'react';
import {connect} from 'react-redux';

import Spiner from '../Spiner/Spiner';

class Image extends Component {

    renderContent = () => {
        if (this.props.status === 102 || this.props.status === '102'){
            return <Spiner/>
        } else  if (this.props.src){
            return <img src={this.props.domen + this.props.src} alt={this.props.alt || 'Have a nice day'}/>
        } else {
            return <Spiner/>
        }
    }

    render() {
        let content = this.renderContent()
        return(
            <div className="image">
                {content}
            </div>
        )
    }
}

const mapStateTpProps = (state) => {
    return {
        domen : state.domen
    }
}

export default connect(mapStateTpProps)(Image)