import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

  const postsElements = props.postsData
    .map(post => (<Post userName={post.userName}
                        text={post.text} 
                        likeCount={post.likeCount} 
                        commentCount={post.commentCount} 
                        shareCount={post.shareCount} 
                        avatar={post.avatar} />));
  
    return (
      <div>
        { postsElements }
      </div>
  )
}
export default Posts;