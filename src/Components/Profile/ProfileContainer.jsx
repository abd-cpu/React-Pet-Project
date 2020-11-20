import { connect } from 'react-redux';
import { addPostActionCreator, typePostActionCreator } from '../../redux/profileReducer';
import Profile from './Profile';

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