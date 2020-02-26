import React,{Component} from 'react';
import './AssemblyView.scss'; 
import {connect} from 'react-redux';

import BiscuitCake from '../../../../ComCom/Icons/BiscuitCake';
import HoneyCake from '../../../../ComCom/Icons/HoneyCake';
import CupCake from '../../../../ComCom/Icons/CupCake';

class AssemblyView extends Component {

    render(){
        let assembly;
        switch (this.props.type){
            case 'biscuit':
                assembly = <BiscuitCake
                    biscuitColor  = {this.props.biscuitColor}
                    biscuitStroke = {this.props.biscuitStroke}
                    fillingColor  = {this.props.fillingColor}
                    fillingStroke = {this.props.fillingStroke}
                    creamColor    = {this.props.creamColor}
                    creamStroke   = {this.props.creamStroke}/>
                break
            case 'honey':
                assembly = <HoneyCake
                    biscuitColor  = {this.props.biscuitColor}
                    biscuitStroke = {this.props.biscuitStroke}
                    fillingColor  = {this.props.fillingColor}
                    fillingStroke = {this.props.fillingStroke}
                    creamColor    = {this.props.creamColor}
                    creamStroke   = {this.props.creamStroke}/>
                break
            case 'cup':
                assembly = <CupCake
                    biscuitColor  = {this.props.biscuitColor}
                    biscuitStroke = {this.props.biscuitStroke}
                    fillingColor  = {this.props.fillingColor}
                    fillingStroke = {this.props.fillingStroke}
                    creamColor    = {this.props.creamColor}
                    creamStroke   = {this.props.creamStroke}/>
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
        domen : state.domen
    }
}

export default connect(mapStatetoProps)(AssemblyView)