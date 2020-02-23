import React,{Component} from 'react';
import './AssemblyView.scss'; 
import {connect} from 'react-redux';

import BiscuitCake from './BiscuitCake';
import HoneyCake from './HoneyCake';
import CupCake from './CupCake';

class AssemblyView extends Component {

    render(){
        let assembly;
        switch (this.props.type){
            case 'biscuit':
                assembly = <BiscuitCake/>
                break
            case 'honey':
                assembly = <HoneyCake/>
                break
            case 'cup':
                assembly = <CupCake/>
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