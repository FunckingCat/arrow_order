import React,{Component} from 'react';
import './TransLink.scss'; 
import {connect} from 'react-redux'; 
import {Link} from 'react-router-dom';
import {initTransfer} from '../../../../actions/historyActions';

//Props
//text
//transferTo
//to
//onCLick

class TransLink extends Component {

    link = React.createRef()

    componentDidMount(){
        this.color()
    }

    componentDidUpdate(){
        this.color()
    }
    
    color = () => {
        if (this.props.active === 'true'){
            this.link.current.style.backgroundColor = 'black'
        } else {
            this.link.current.style.backgroundColor = '#787878'
        }
    }

    handaleClick = (event) => {
        if (this.props.active === 'true'){
            let {transfer, transferTo, to} = this.props;
            if(this.props.onClick){
                this.props.onClick();
            }
            transfer(transferTo, to);
        }        
    }

    render(){
        let {active, to, text} = this.props;
        return(
            <Link
                className = "TransLink"
                ref = {this.link}
                to = {active === 'true'? to : '#'}
                onClick = {this.handaleClick}>
                    {text}
            </Link>
        )
    }
} 

const mapDispatchToProps = {
    transfer : initTransfer
} 

export default connect(null, mapDispatchToProps)(TransLink)
