import {POP_UP_ACTIVE, SET_CONTENT} from './actionTypes';

export function popUpActive (value){
    return {
        type : POP_UP_ACTIVE,
        value : value,
    }
}

export function setPopUpContent (value){
    return {
        type : SET_CONTENT,
        value : value,
    }
}

