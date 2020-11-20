import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, typePostActionCreator } from '../../redux/profileReducer';
import Profile from './Profile';

// const ProfileContainer = (props) => {

//   let addPost = () => {
//     props.dispatch(addPostActionCreator())
//   }

//   let typeText = (text) => {
//     props.dispatch(typePostActionCreator(text))
//   }

//   return <Profile addPost={addPost} typeText={typeText} postsData={props.postsData} />
// }
const mapStateToProps = (state) => {
  return {
  postsData: state.profilePage
}}

const mapDispatchToProps = (dispatch) => {
  return {
  addPost: () => {
    dispatch(addPostActionCreator())
  },
  typeText: (text) => {
    dispatch(typePostActionCreator(text))
  },
}}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;