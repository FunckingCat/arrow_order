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
}

const orderDetaiilsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ORDER_TYPE:
            return Object.assign({}, state,{
                type : action.orderType
            })
        case SET_ASSEMBLY_PARTS:
            let {
                filling = '', 
                biscuit = '', 
                cream = ''
            } = action.parts;            
            return Object.assign({}, state, {
                filling : filling || state.filling ,
                biscuit : biscuit || state.biscuit ,
                cream   : cream   || state.cream ,
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