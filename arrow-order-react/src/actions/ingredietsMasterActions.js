import {SET_SELECTED, SET_CONSTANT, SET_CONTENT} from './actionTypes';

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

export function setContent (value){
    return {
        type : SET_CONTENT,
        value : value,
    }
}