import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import CommentAdd from '../../components/comment-add/commentAdd'
import CommentList from '../../components/comment-list/commentList'
import {addComment,delComment} from '../../redux/actions'

class App extends Component {

  componentDidMount(){
   
  }
  static propTypes = {
    comments:PropTypes.array.isRequired,
    addComment:PropTypes.func.isRequired,
    delComment:PropTypes.func.isRequired
  }
  render() {
    const {comments,addComment,delComment}= this.props
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
          <CommentAdd addComment={addComment}></CommentAdd>
          <CommentList comments={comments} delComment={delComment}></CommentList>
        </div>
      </div>
    );
  }
}

export default connect(
  state=>({comments:state}),   //state就是一个comments数组
  {addComment,delComment}
  )(App)