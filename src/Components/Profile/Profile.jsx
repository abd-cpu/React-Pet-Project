import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";
import Friends from './Friends/Friends';
import { addPostActionCreator, typePostActionCreator } from '../../redux/store';

const Profile = (props) => {

  let ref = React.createRef();

  let sendPost = () => {
    props.addPost(addPostActionCreator())
  }

  let typeText = () => {
    let text = ref.current.value;
    props.typePost(typePostActionCreator(text))
  }

  return (
    <div className={s.content}>
      <Friends friendsData={props.postsData.friends} />
      <div>
        <div className={s.createPost}>
          <h2>Create Post</h2>

          <img src="https://iqonic.design/themes/socialv/html/images/user/1.jpg" />
          <textarea onChange={ typeText } ref={ref} placeholder="Write something here..." value={props.postsData.newPost} ></textarea>

          <button onClick={ sendPost }>Post</button>
        </div>
        <Posts postsData={props.postsData.posts} />
      </div>
    </div>
  )
}
export default Profile;