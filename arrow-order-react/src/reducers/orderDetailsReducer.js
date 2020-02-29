import {
    SET_ORDER_TYPE,   
    SET_ASSEMBLY_PARTS,
    SET_AMMOUNT,
    SET_DATE
} from '../actions/actionTypes';

const initialState = {
    type    : '',
    ammount : '',
    date    : '',
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
        case SET_AMMOUNT:
            return Object.assign({}, state,{
                ammount : action.ammount
            })
        case SET_DATE:
            return Object.assign({}, state,{
                date : action.date
            })
        default: 
            return state
    }
}

export default orderDetaiilsReducer