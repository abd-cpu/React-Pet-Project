const ADD_MESSAGE = "ADD-MESSAGE";
const TYPE_MESSAGE = "TYPE-MESSAGE";

let initialState = {
    dialogs: [{ id: "1", status: "online", userName: "Bob Marlie", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-01.22e5a823.jpg" },
    { id: "2", status: "online", userName: "Jim Trevor", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-09.0309b6a2.jpg" },
    { id: "3", status: "online", userName: "Lin Hue", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-04.ac29a257.jpg" },
    { id: "4", status: "offline", userName: "Xiao Han", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-05.1c0efd4b.jpg" },
    { id: "5", status: "offline", userName: "Chelsea Lee", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-06.e2faac12.jpg" }],
    messages: [{ id: "1", author: true, message: "Hey", date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg" },
    { id: "2", author: false, message: "Hi", date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/10.34632b93.jpg" },
    { id: "3", author: true, message: "H u doin", date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg" },
    { id: "4", author: false, message: "fine, u", date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/10.34632b93.jpg" },
    { id: "5", author: true, message: "me too", date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg" },
    { id: "6", author: true, message: "thank u", date: "18:40", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg" },
    ],
    newMessage: "asd",
}

let messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let message = {
                id: "7",
                author: true,
                message: state.newMessage,
                date: "18:40",
                avatar: "https://iqonic.design/themes/socialv/vue/dist/img/09.b245ce8d.jpg"
            };
            let copyState = {...state};
            copyState.messages = [...state.messages];
            copyState.messages.push(message);
            copyState.newMessage = "";
            return copyState;
        }
        case TYPE_MESSAGE:{
            let copyState = {...state};
            copyState.newMessage = action.newText;
            return copyState;
        }
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