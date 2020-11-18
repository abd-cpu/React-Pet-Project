import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import App from './App';

let rerenderDom = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App 
                state={store.getState()}
                addMessage={store.dispatch.bind(store)}
                typeNewMessage={store.dispatch.bind(store)}
                addPost={store.dispatch.bind(store)}
                typePost={store.dispatch.bind(store)}
                />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderDom(store);

store.setSubscribe(rerenderDom);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
