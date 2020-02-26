import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import historyReducer from './historyReducer';
import domenReducer from './domenReducer';
import popUpReducer from './popUpReducer';
import cakePartReducer from './cakeConstructorReducer';

const mainReducer = combineReducers({
    domen : domenReducer,
    login : loginReducer,
    history : historyReducer,
    popUp : popUpReducer,
    cakeParts : cakePartReducer,
});

export default mainReducer