import React from 'react';
import { addMessageActionCreator, typeInputActionCreator } from '../../redux/messageReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  let sendMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let typeInput = (text) => {
    props.dispatch(typeInputActionCreator(text));
  }

  return <Dialogs sendMessage={sendMessage} typeInput={typeInput} companionData={props.companionData} />
}
export default DialogsContainer;