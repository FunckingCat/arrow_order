import { SET_NAME, SET_CONTACT} from './actionTypes';

export function setUserNAme (name) {
    return {
        type : SET_NAME,
        value : name 
    }
}

export function setUserContact (contact) {
    return {
        type : SET_CONTACT,
        value : contact
    }
}