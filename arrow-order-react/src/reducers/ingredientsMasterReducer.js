import {SET_SELECTED, SET_CONSTANT} from '../actions/actionTypes';

const initialState = {
    selected : '',
    constant : 0,
}

const ingredientsMasterReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_SELECTED:
            return Object.assign({}, state, {
                selected : action.name,
                hashtag : action.hashtag,
            })
        case SET_CONSTANT:
            return Object.assign({}, state, {
                constant : action.constant,
            })
        default:
            return state
    }
}

export default ingredientsMasterReducer