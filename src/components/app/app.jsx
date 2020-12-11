import React, { Component } from 'react';
import CommentAdd from '../comment-add/commentAdd'
import CommentList from '../comment-list/commentList'

class app extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //   }
  // }

  state={
    comments:[
      {username:'sss',content:'11111'},
      {username:'mmm',content:'222222'},
    ]
  }
  //添加
  addComment=(comment)=>{
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
  }
  //删除
  delComment=(index)=>{
    const {comments} = this.state
    comments.splice(index,1)
    this.setState({comments})
  }

  render() {
    const {comments}= this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对RRRRRRR的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={this.addComment}></CommentAdd>
          <CommentList comments={comments} delComment={this.delComment}></CommentList>
        </div>
      </div>
    );
  }
}

export default app;