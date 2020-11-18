const ADD_MESSAGE = "ADD-MESSAGE";
const TYPE_MESSAGE = "TYPE-MESSAGE";

let messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: "7",
                author: true,
                message: state.newMessage,
                date: "18:40",
                avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg"
            };
            state.messages.push(message);
            state.newMessage = "";
            return state;
        case TYPE_MESSAGE:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }    
}

export let addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export let typeInputActionCreator = (text) => ({
    type: TYPE_MESSAGE,
    newText: text
});

export default messageReducer;