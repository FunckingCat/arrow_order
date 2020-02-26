import React,{Component} from 'react'; 
import {connect} from 'react-redux';
import RecuestService from '../../../../../servises/requestService';

import AssemblyView from '../AssemblyView/AssemblyView';

import {popUpActive} from '../../../../../actions/popUpActions';

class CakeController extends Component {

    requestService = new RecuestService(this.props.domen);

    state = {
        prevParts : this.props.parts,
        biscuitIcon : '',
        fillingIcon : '',
        creamIcon   : '',
    }

    componentDidMount() {
        this.getColors();
    }

    componentDidUpdate() {
        if (this.props.parts.biscuit !== this.state.prevParts.biscuit ||
            this.props.parts.filling !== this.state.prevParts.filling ||
            this.props.parts.cream !== this.state.prevParts.cream){
                this.getColors();
            }
    }

    getColors = () => {
        this.requestService.getConstructorColors(this.props.parts)
        .then((res) => {
            this.setState({
                biscuitColor  : res.biscuitFill,
                biscuitStroke : res.biscuitStroke,
                fillingColor  : res.fillingFill,
                fillingStroke : res.fillingStroke,
                creamColor    : res.creamFill,
                creamStroke   : res.creamStroke,
                prevParts     : this.props.parts,
            })
        })
    }

    render(){
        return(
            <AssemblyView
                type = {this.props.type}
                biscuitColor  = {this.state.biscuitFill}
                biscuitStroke = {this.state.biscuitStroke}
                fillingColor  = {this.state.fillingFill}
                fillingStroke = {this.state.fillingStroke}
                creamColor    = {this.state.creamFill}
                creamStroke   = {this.state.creamStroke}/>
        )
    }
} 

 const mapStateToProps = (state) => {
    return({
        domen : state.domen,
        parts : {
            filling : state.cakeParts.filling,
            biscuit : state.cakeParts.biscuit,
            cream   : state.cakeParts.cream,
        }
    })
} 

const mapDispatchToProps = {
    popUpActive : popUpActive,
} 

export default connect(mapStateToProps, mapDispatchToProps)(CakeController)
