import {
    SET_ORDER_TYPE,   
    SET_ASSEMBLY_PARTS,
    SET_DETAIL,
    RESET_ORDER,
} from './actionTypes';

export function setOrderType (orderType){
    return {
        type : SET_ORDER_TYPE,
        orderType : orderType,
    }
}

export function setAssemblyParts (name, value){
    return {
        type : SET_ASSEMBLY_PARTS,
        name,
        value,
    }
}

export function setDetail (name, value){
    return {
        type : SET_DETAIL,
        name : name,
        value: value
    }
}

export function resetOrder (){
    return {
        type : RESET_ORDER,
    }
}