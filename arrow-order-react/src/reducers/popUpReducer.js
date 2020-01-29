import {POP_UP_ACTIVE} from '../actions/actionTypes';

const initialState = {
    active : false,
}

const PopUpReducer = (state = initialState, action) => {
    let value = action.value;
    switch (action.type){
        case POP_UP_ACTIVE:
            return Object.assign({}, state, {
                active : value
            })
        default:
            return state
    }
}

export default PopUpReducer