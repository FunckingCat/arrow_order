import {NEW_TRANSFER, BACK, GO_TO} from '../actions/actionTypes';

const initialState = []

const historyReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){

        case NEW_TRANSFER:
            return [...state, {
                title : action.title,
                link : action.link
            }];

        case BACK:
            newState = state;
            newState.pop();
            return newState

        case GO_TO:
            newState = [];
            for(let item of state){
                newState.push(item);
                if (action.title === item.title){ 
                    break;
                 }
            }
            return newState
            
        default:
            return state
    }
}

export default historyReducer;