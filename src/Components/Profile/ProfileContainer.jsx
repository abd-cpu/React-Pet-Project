import React from 'react';
import { addPostActionCreator, typePostActionCreator } from '../../redux/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let typeText = (text) => {
    props.dispatch(typePostActionCreator(text))
  }

  return <Profile addPost={addPost} typeText={typeText} postsData={props.postsData} />
}
export default ProfileContainer;