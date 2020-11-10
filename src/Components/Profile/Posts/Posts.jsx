import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
  return (
      <div>
        <Post userName="Ira Membrit" likeCount="123" commentCount="13" shareCount="22" />
        <Post userName="Harry Potter" likeCount="193" commentCount="21" shareCount="11" />
        <Post userName="Ronald Wheasley" likeCount="32" commentCount="32" shareCount="44" />
      </div>
  )
}
export default Posts;