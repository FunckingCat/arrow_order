import {SET_SELECTED, SET_CONSTANT} from './actionTypes';

export function setSelected (name, hashtag){
    return {
        type : SET_SELECTED,
        name : name,
        hashtag : hashtag,
    }
}

export function setConstant(numb) {
    return {
        type : SET_CONSTANT,
        constant : numb,
    }
}