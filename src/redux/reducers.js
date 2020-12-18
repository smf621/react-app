import {ADD_COMMENT,DEL_COMMENT} from './action-types'

const initComments=[
    {username:'sss',content:'111'},
    {username:'mmm',content:'222'},
] 
export function comments(state=initComments,action){
    switch(action.type){
        case ADD_COMMENT:
            return [action.data,...state]
            break;
        case DEL_COMMENT:
            return state.filter((comment,index) => index != action.data)    
            break;
        default:
            return state    
    }
}