import {ADD_COMMENT,DEL_COMMENT,RECEIVE_COMMENT} from './action-types'
//添加
export const addComment = (comment) =>({type:ADD_COMMENT,data:comment})
//删除
export const delComment = (index) =>({type:DEL_COMMENT,data:index})

//接受同步comments
const receiveComments = (comments) =>({type:RECEIVE_COMMENT,data:comments})


//异步获取数据
export const getComments = () =>{
    return dispatch=>{
        //
        setTimeout(()=>{
            const comments=[
                {username:'sss',content:'111'},
                {username:'mmm',content:'222'},
            ] 
            dispatch(receiveComments(comments))
        },1000)
    }
}