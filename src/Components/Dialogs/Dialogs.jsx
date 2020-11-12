import React from 'react';
import Companion from './Companion/Companion';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

  const companionElements = props.companionData
    .map(user => <Companion pathName={user.id} status={user.status} userName={user.userName} avatar={user.avatar} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogList}>
        { companionElements }
      </div>
      <div className={s.discussion}>
      <Companion pathName={props.companionData[0].id} status={props.companionData[0].status} userName={props.companionData[0].userName} avatar={props.companionData[0].avatar} />
        <div className={s.display}>
        </div>
        <div className={s.inputs}>
          <input placeholder="Type your message" />
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;