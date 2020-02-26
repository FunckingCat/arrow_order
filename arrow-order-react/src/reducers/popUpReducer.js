import {POP_UP_ACTIVE, SET_CONTENT} from '../actions/actionTypes';

const initialState = {
    active : false,
    content: '',
}

const PopUpReducer = (state = initialState, action) => {
    let value = action.value;
    switch (action.type){
        case POP_UP_ACTIVE:
            return Object.assign({}, state, {
                active : value
            })
        case SET_CONTENT:
            return Object.assign({}, state, {
                content : value
            })
        default:
            return state
    }
}

export default PopUpReducer