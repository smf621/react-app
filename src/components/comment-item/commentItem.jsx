import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './commentItem.css'
class commentItem extends Component {
    static propTypes = {
        comments:PropTypes.object.isRequired,
        delComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired,
    }

    delItem=()=>{
        const {comments,delComment,index}=this.props
        if(window.confirm(`确定删除${comments.username}的评论吗？`)){
            delComment(index)
        }
    }
    render() {
        const {comments} = this.props
        return (
            <li className="list-group-item" >
                <div className="handle">
                    <a href="javascript:;" onClick={this.delItem}>删除</a>
                </div>
                <p className="user"><span >{comments.username}</span><span>说:</span></p>
                <p className="centence">{comments.content}</p>
            </li>
        );
    }
}

export default commentItem;
