import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.createPost}>
        <h2>Create Post</h2>
        
          <img src="https://iqonic.design/themes/socialv/html/images/user/1.jpg" />
          <textarea placeholder="Write something here..."></textarea>
        
        <button>Post</button>
      </div>
      <Posts />
    </div>
  )
}
export default Profile;