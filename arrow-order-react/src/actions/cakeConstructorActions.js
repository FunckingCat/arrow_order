import {SET_CAKE_PARTS} from './actionTypes';
//LEGACY : DELETE
export function setCakeParts (parts){
    return {
        type : SET_CAKE_PARTS,
        parts : parts,
    }
}

