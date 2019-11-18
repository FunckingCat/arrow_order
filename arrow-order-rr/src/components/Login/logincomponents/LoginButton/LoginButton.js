import {connect} from 'react-redux';
import LoginButton from './_LoginButton';


const mapStatetoProps = (state) => {
    return {
        highlighted : Boolean(state.login.name && state.login.contact),
        name : state.login.name,
        contact : state.login.contact
    }
}

export default connect(mapStatetoProps)(LoginButton)