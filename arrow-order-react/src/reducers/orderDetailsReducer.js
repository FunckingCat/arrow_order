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
    switch (action.type){
        case SET_ORDER_TYPE:
            return Object.assign({}, state,{
                type : action.orderType
            })
        case SET_ASSEMBLY_PARTS:
            let {
                filling = state.parts.filling, 
                biscuit = state.parts.biscuit, 
                cream = state.parts.cream
            } = action.parts;            
            return Object.assign({}, state, {
                parts : {
                    filling : filling,
                    biscuit : biscuit,
                    cream   : cream,
                }
            })
        case SET_DETAIL:
            let newState = Object.assign({}, state);
            newState[action.name] = action.value;
            return newState
        case RESET_ORDER:
            return initialState
        default: 
            return state
    }
}

export default orderDetaiilsReducer