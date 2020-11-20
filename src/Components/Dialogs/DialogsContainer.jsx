import { connect } from 'react-redux';
import { addMessageActionCreator, chooseDialogActionCreator, typeInputActionCreator } from '../../redux/messageReducer';
import Dialogs from './Dialogs';

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
    },
    chooseDialog: (id) => {
      dispatch(chooseDialogActionCreator(id))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;