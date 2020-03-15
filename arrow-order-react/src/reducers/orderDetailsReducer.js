import {
    SET_ORDER_TYPE,   
    SET_ASSEMBLY_PARTS,
    SET_DETAIL,
    RESET_ORDER
} from '../actions/actionTypes';

const initialState = {
    type    : '',
    parts   : {},
}

const orderDetaiilsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case SET_ORDER_TYPE:
            return Object.assign({}, state,{
                type : action.orderType
            })
        case SET_ASSEMBLY_PARTS:
            newState = Object.assign({}, state)
            newState.parts[action.name] = action.value;
            return newState
        case SET_DETAIL:
            newState = Object.assign({}, state);
            newState[action.name] = action.value;
            return newState
        case RESET_ORDER:
            return initialState
        default: 
            return state
    }
}

export default orderDetaiilsReducer