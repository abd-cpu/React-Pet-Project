import { createStore, combineReducers } from 'redux';
import messageReducer  from "./messageReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer
});

let store = createStore(reducers);

export default store;

