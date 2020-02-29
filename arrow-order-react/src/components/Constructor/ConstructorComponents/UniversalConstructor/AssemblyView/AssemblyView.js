import React,{Component} from 'react';
import './AssemblyView.scss'; 
import {connect} from 'react-redux';

import BiscuitCake from '../../../../ComCom/Icons/BiscuitCake';
import HoneyCake from '../../../../ComCom/Icons/HoneyCake';
import CupCake from '../../../../ComCom/Icons/CupCake';

class AssemblyView extends Component {

    state = {
        biscuitColor  : this.props.biscuitFill  ,
        biscuitStroke : this.props.biscuitStroke,
        fillingColor  : this.props.fillingFill  ,
        fillingStroke : this.props.fillingStroke,
        creamColor    : this.props.creamFill    ,
        creamStroke   : this.props.creamStroke  ,
    }

    componentDidUpdate () {
        if(
            this.props.biscuitFill !== this.state.biscuitColor ||
            this.props.fillingFill !== this.state.fillingColor ||
            this.props.creamFill   !== this.state.creamColor
        ){
            this.update();
        }
    }

    update = () => {
        this.setState({
            biscuitColor  : this.props.biscuitFill  ,
            biscuitStroke : this.props.biscuitStroke,
            fillingColor  : this.props.fillingFill  ,
            fillingStroke : this.props.fillingStroke,
            creamColor    : this.props.creamFill    ,
            creamStroke   : this.props.creamStroke  ,
        })
    }

    render(){
        let assembly;
        switch (this.props.type){
            case 'Бисквитный торт':
                assembly = <BiscuitCake
                    biscuitColor  = {this.state.biscuitColor}
                    biscuitStroke = {this.state.biscuitStroke}
                    fillingColor  = {this.state.fillingColor}
                    fillingStroke = {this.state.fillingStroke}
                    creamColor    = {this.state.creamColor}
                    creamStroke   = {this.state.creamStroke}/>
                break
            case 'Торт - цифра':
            case 'Открытый медовик':
                assembly = <HoneyCake
                    biscuitColor  = {this.state.biscuitColor}
                    biscuitStroke = {this.state.biscuitStroke}
                    fillingColor  = {this.state.fillingColor}
                    fillingStroke = {this.state.fillingStroke}
                    creamColor    = {this.state.creamColor}
                    creamStroke   = {this.state.creamStroke}/>
                break
            case 'Капкейки':
                assembly = <CupCake
                    biscuitColor  = {this.state.biscuitColor}
                    biscuitStroke = {this.state.biscuitStroke}
                    fillingColor  = {this.state.fillingColor}
                    fillingStroke = {this.state.fillingStroke}
                    creamColor    = {this.state.creamColor}
                    creamStroke   = {this.state.creamStroke}/>
                break
            default:
                break
        }

        return(
            <div className = 'AssemblyView' ref = {this.AssemblyView}>
                <div className="assembly" ref= {this.assembly}>
                    {assembly}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        domen : state.domen,
        type  : state.orderDetails.type,
        biscuitFill   : state.assemblyColors.biscuitFill,
        biscuitStroke : state.assemblyColors.biscuitStroke,
        fillingFill   : state.assemblyColors.fillingFill,
        fillingStroke : state.assemblyColors.fillingStroke,
        creamFill     : state.assemblyColors.creamFill,
        creamStroke   : state.assemblyColors.creamStroke,
    }
}

export default connect(mapStatetoProps)(AssemblyView)