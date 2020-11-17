import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";
import Friends from './Friends/Friends';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <Friends friendsData={props.postsData.friends} />
      <div>
        <div className={s.createPost}>
          <h2>Create Post</h2>

          <img src="https://iqonic.design/themes/socialv/html/images/user/1.jpg" />
          <textarea placeholder="Write something here..."></textarea>

          <button>Post</button>
        </div>
        <Posts postsData={props.postsData.posts} />
      </div>
    </div>
  )
}
export default Profile;