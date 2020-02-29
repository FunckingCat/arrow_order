import {
    SET_ORDER_TYPE,   
    SET_ASSEMBLY_PARTS,
    SET_AMMOUNT,
    SET_DATE
} from './actionTypes';

export function setOrderType (orderType){
    return {
        type : SET_ORDER_TYPE,
        orderType : orderType,
    }
}

export function setAssemblyParts (parts){
    return {
        type : SET_ASSEMBLY_PARTS,
        parts : parts,
    }
}

export function setAmmount (ammount){
    return {
        type : SET_AMMOUNT,
        ammount : ammount,
    }
}

export function setOrderDate (date){
    return {
        type : SET_DATE,
        date : date,
    }
}