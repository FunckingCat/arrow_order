import {connect} from 'react-redux';

import InputField from './_InputField';
import { setUserNAme, setUserContact } from '../../../../actions/loginActions';

const mapStatetoProps = (state) => {
    return {
        message : state.login.contactMessage
    }
}

const mapDispatchToProps = {
    updateName :  setUserNAme,
    updateContact : setUserContact
}

export default connect(mapStatetoProps, mapDispatchToProps)(InputField)