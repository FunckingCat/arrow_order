import { combineReducers } from 'redux';

import loginReducer from './loginReducer';

const mainReducer = combineReducers({
    login : loginReducer,
});

export default mainReducer