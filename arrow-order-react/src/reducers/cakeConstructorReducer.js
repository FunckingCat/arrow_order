import {SET_CAKE_PARTS} from '../actions/actionTypes';

const initialState = {
    filling : '',
    biscuit : '',
    cream   : '',
}

const cakePartsReducer = (state = initialState, action) => {
    let parts = action.parts;
    switch (action.type){
        case SET_CAKE_PARTS:
            return Object.assign({}, state, {
                filling : parts.filling || state.filling ,
                biscuit : parts.biscuit || state.biscuit ,
                cream   : parts.cream   || state.cream ,
            })
        default:
            return state
    }
}

export default cakePartsReducer