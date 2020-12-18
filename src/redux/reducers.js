import {ADD_COMMENT,DEL_COMMENT,RECEIVE_COMMENT} from './action-types'

const initComments=[] 
export function comments(state=initComments,action){
    switch(action.type){
        case ADD_COMMENT:
            return [action.data,...state]
            break;
        case DEL_COMMENT:
            return state.filter((comment,index) => index !== action.data)    
            break;
        case RECEIVE_COMMENT:
            return action.data    
            break;
        default:
            return state    
    }
}