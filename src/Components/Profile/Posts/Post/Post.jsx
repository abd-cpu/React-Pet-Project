import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
      <div className={s.post}>
        <div className={s.postHead}>
          <img src={props.avatar} />
          <a href="#">{props.userName}</a>
          <span>6 hours ago</span>
        </div>
        <div className={s.postContent}>{props.text}</div>
        <div className={s.postActivity}>
          <a href="#" className={s.likes}>
            <span className="material-icons">thumb_up</span> {props.likeCount} Likes
          </a>
          <a href="#" className={s.comments}>
            <span className="material-icons">comment</span> {props.commentCount} Comments
          </a>
          <a href="#" className={s.share}>
            <span className="material-icons">share</span> {props.shareCount} Share
          </a>
        </div>
      </div>
  )
}
export default Post;