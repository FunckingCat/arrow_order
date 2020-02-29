import React,{Component} from 'react'; 
import RecuestService from '../../../../../servises/requestService';

import AssemblyView from '../AssemblyView/AssemblyView';

export default class CakeController extends Component {

    requestService = new RecuestService(this.props.domen);

    state = {
        prevParts : this.props.parts,
    }

    render(){
        return(
            <AssemblyView/>
        )
    }
} 

