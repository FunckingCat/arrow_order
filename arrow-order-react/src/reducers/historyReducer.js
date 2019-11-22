import {NEW_TRANSFER, BACK, GO_TO} from '../actions/actionTypes';

const initialState = {
    tree : [
        {title : 'Главная', link : '/MainPage'}
    ],
    backLink : '/MainPage'
}

const historyReducer = (state = initialState, action) => {
    let tree;
    let backLink;
    switch (action.type){

        case NEW_TRANSFER:
            tree = []
            for (let item of state.tree){
                if (item.title !== action.title){
                    tree.push(item)
                } else {
                    break;
                }
            }
            tree.push({
                title : action.title,
                link : action.link
            })

            if (tree.length >= 2){
                backLink = tree[tree.length - 2].link
            } else if (tree.length === 1){
                backLink = tree[0].link
            } else {
                backLink = '/MainPage'
            }
            return {
                tree : tree,
                backLink : backLink
            }

        case BACK:
            tree = state.tree;
            tree.pop();
            if (tree.length >= 2){
                backLink = tree[tree.length - 2].link
            } else if (tree.length === 1){
                backLink = tree[0].link
            } else {
                backLink = '/MainPage'
            }
            return {
                tree : tree,
                backLink : backLink
            }

        case GO_TO:
            tree = [];
            for(let item of state.tree){
                tree.push(item);
                if (action.title === item.title){ 
                    break;
                 }
            }
            if (tree.length >= 2){
                backLink = tree[tree.length - 2].link
            } else if (tree.length === 1){
                backLink = tree[0].link
            } else {
                backLink = '/MainPage'
            }
            return {
                tree : tree,
                backLink : backLink
            }
            
        default:
            return state
    }
}

export default historyReducer;