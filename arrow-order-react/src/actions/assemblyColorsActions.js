import {
    SET_BISCUIT_COLOR,   
    SET_FILLING_COLOR,
    SET_CREAM_COLOR
} from '../actions/actionTypes';

export function setBiscuitColor (fill, stroke){
    return {
        type : SET_BISCUIT_COLOR,
        fill : fill,
        stroke : stroke
    }
}

export function setFillingColor (fill, stroke){
    return {
        type : SET_FILLING_COLOR,
        fill : fill,
        stroke : stroke
    }
}

export function setCreamColor (fill, stroke){
    return {
        type : SET_CREAM_COLOR,
        fill : fill,
        stroke : stroke
    }
}