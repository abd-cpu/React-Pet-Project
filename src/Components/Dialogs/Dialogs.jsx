import React from 'react';
import Companion from './Companion/Companion';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';

const Dialogs = (props) => {

  let ref = React.createRef();

  let sendMessage = () => {

    alert(ref.current.value)
  }

  const companionElements = props.companionData.dialogs
    .map(user => <Companion pathName={user.id} status={user.status} userName={user.userName} avatar={user.avatar} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogList}>
        { companionElements }
      </div>
      <div className={s.discussion}>
        <Companion pathName={props.companionData.dialogs[0].id} status={props.companionData.dialogs[0].status} userName={props.companionData.dialogs[0].userName} avatar={props.companionData.dialogs[0].avatar} />
        <div className={s.display}>
          <Messages messages={ props.companionData.messages } />
        </div>
        <div className={s.inputs}>
          <input ref={ref} placeholder="Type your message" />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;