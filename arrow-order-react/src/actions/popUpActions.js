import {POP_UP_ACTIVE, POP_UP_CONTENT} from './actionTypes';

export function popUpActive (value){
    return {
        type : POP_UP_ACTIVE,
        value : value,
    }
}

export function popUpSetContent (value){
    return {
        type : POP_UP_CONTENT,
        value : value,
    }
}