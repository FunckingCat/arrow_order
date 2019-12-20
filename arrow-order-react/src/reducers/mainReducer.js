import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import historyReducer from './historyReducer';
import domenReducer from './domenReducer';

const mainReducer = combineReducers({
    domen : domenReducer,
    login : loginReducer,
    history : historyReducer
});

export default mainReducer