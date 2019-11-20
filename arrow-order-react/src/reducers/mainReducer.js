import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import historyReducer from './historyReducer';

const mainReducer = combineReducers({
    login : loginReducer,
    history : historyReducer
});

export default mainReducer