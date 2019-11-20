import {NEW_TRANSFER, BACK, GO_TO} from './actionTypes';

export function initTransfer(title, link){
    return {
        type: NEW_TRANSFER,
        title : title, // Shows were you are will go
        link : link // link to new location
    } 
}

export function back() {
    return {
        type : BACK,
    }
}

export function goTo (title){
    return {
        type : GO_TO,
        title : title
    }
}