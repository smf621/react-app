import {ADD_COMMENT,DEL_COMMENT} from './action-types'
//添加
export const addComment = (comment) =>({type:ADD_COMMENT,data:comment})
//删除
export const delComment = (index) =>({type:DEL_COMMENT,data:index})