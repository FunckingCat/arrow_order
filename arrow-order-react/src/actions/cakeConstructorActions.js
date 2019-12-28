import {SET_CAKE_PARTS} from './actionTypes';

export function setCakeParts (parts){
    return {
        type : SET_CAKE_PARTS,
        parts : parts,
    }
}

