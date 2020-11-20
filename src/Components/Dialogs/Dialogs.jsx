import React from 'react';
import Companion from './Companion/Companion';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';

const Dialogs = (props) => {

  let ref = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  }

  let typeInput = () => {
    let text = ref.current.value;
    props.typeInput((text));
  }

  let chooseDialog = (key) => {
    let id = key;
    props.chooseDialog(id);
  }

  const companionElements = props.companionData.dialogs
    .map(user => <Companion chooseDialog={chooseDialog}
      key={user.id}
      pathName={user.id}
      status={user.status}
      userName={user.userName}
      avatar={user.avatar} />)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogList}>
        {companionElements}
      </div>
      <div className={s.discussion}>
        <Companion
          pathName={props.companionData.activeDialog.id}
          status={props.companionData.activeDialog.status}
          userName={props.companionData.activeDialog.userName}
          avatar={props.companionData.activeDialog.avatar} />
        <div className={s.display}>
          <Messages messages={props.companionData.messages} />
        </div>
        <div className={s.inputs}>
          <input ref={ref} onChange={typeInput} placeholder="Type your message" value={props.companionData.newMessage} />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;