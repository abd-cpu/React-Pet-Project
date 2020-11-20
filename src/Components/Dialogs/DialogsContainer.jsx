import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, typeInputActionCreator } from '../../redux/messageReducer';
import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {

//   let sendMessage = () => {
//     props.dispatch(addMessageActionCreator());
//   }

//   let typeInput = (text) => {
//     props.dispatch(typeInputActionCreator(text));
//   }

//   return <Dialogs sendMessage={sendMessage} typeInput={typeInput} companionData={props.companionData} />
// }

const mapStateToProps = (state) => {
  return {
    companionData: state.messagesPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    },
    typeInput: (text) => {
      dispatch(typeInputActionCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;