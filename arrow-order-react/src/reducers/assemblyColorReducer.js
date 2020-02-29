import {
    SET_BISCUIT_COLOR,   
    SET_FILLING_COLOR,
    SET_CREAM_COLOR
} from '../actions/actionTypes';

const initialState = {
    biscuitFill   : '',
    biscuitStroke : '',
    fillingFill   : '',
    fillingStroke : '',
    creamFill     : '',
    creamStroke   : ''
}

const orderDetaiilsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_BISCUIT_COLOR:
            return Object.assign({}, state,{
                biscuitFill   : action.fill,
                biscuitStroke : action.stroke
            })
        case SET_FILLING_COLOR:
            return Object.assign({}, state,{
                fillingFill   : action.fill,
                fillingStroke : action.stroke
            })
        case SET_CREAM_COLOR:
            return Object.assign({}, state,{
                creamFill     : action.fill,
                creamStroke   : action.stroke
            })
        default: 
            return state
    }
}

export default orderDetaiilsReducer