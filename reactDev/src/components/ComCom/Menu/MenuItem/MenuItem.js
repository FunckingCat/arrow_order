import React,{Component} from 'react';
import './MenuItem.scss'; 
import {connect}         from 'react-redux';
import {Link}            from 'react-router-dom';
import {initTransfer}    from '../../../../actions/historyActions'

import Bg from '../../Bg/Bg'

//Props
//title
//href
//src

class MenuItem extends Component {

    handaleClick = () => {
		this.props.transfer(this.props.title, this.props.href);
	}

    render(){
            return(
                <Link to = {this.props.href} onClick = {this.handaleClick}>
                    <li className="MenuItem">
                        <Bg 
                            src = {this.props.src} 
                            text = {this.props.title}
                            gradient = 'true'></Bg>
                    </li>
                </Link>
            )
        }
}

const mapDispatchToProps = {
	transfer : initTransfer
}

export default connect(null, mapDispatchToProps)(MenuItem)
