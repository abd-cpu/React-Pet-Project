import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {

  const friendsElements = props.friendsData
    .map(friend => {return(
      <div className={ s.friend }>
        <img src={friend.avatar} />
        <h5>{friend.name}</h5>
      </div>
    )});
  
    return (
      <div className={s.container}>
        <h2>Friends</h2>
        <div className={ s.friendsList }>{ friendsElements }</div>
      </div>
  )
}
export default Friends;