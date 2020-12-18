import React, { Component } from 'react';
import PropTypes  from 'prop-types'

import CommentItem from '../comment-item/commentItem'
import './commentList.css'

class commentList extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        delComment:PropTypes.func.isRequired
    }
    render() {
        const {comments,delComment} = this.props
        const display = comments.length == 0 ? 'block' : 'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{ display: display }}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((item,index)=> <CommentItem comments={item} key={index} delComment={delComment} index={index}/>)
                    }
                </ul>
            </div>
        );
    }

}
// commentList.protoTypes = {
//     comments:ProtoTypes.array.isRequired
// }
export default commentList;
