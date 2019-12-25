import {POP_UP_ACTIVE} from './actionTypes';

export function popUpActive (value){
    return {
        type : POP_UP_ACTIVE,
        value : value,
    }
}