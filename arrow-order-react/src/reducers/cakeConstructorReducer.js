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
            let {filling, biscuit, cream} = parts;
            if (filling === '' && biscuit === '' && cream === ''){
                return initialState
            }            
            return Object.assign({}, state, {
                filling : filling || state.filling ,
                biscuit : biscuit || state.biscuit ,
                cream   : cream   || state.cream ,
            })
        default:
            return state
    }
}

export default cakePartsReducer