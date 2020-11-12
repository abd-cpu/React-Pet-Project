import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const companionData = [
  {id: "1", status: "online", userName: "Bob Marlie", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-01.22e5a823.jpg"},
  {id: "2", status: "online", userName: "Jim Trevor", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-09.0309b6a2.jpg"},
  {id: "3", status: "online", userName: "Lin Hue", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-04.ac29a257.jpg"},
  {id: "4", status: "offline", userName: "Xiao Han", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-05.1c0efd4b.jpg"},
  {id: "5", status: "offline", userName: "Chelsea Lee", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/user-06.e2faac12.jpg"} 
];

const postsData = [
  {userName: "Ira Membrit", likeCount: "123", commentCount: "13", shareCount: "22", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/g1.b1be77be.jpg"},
  {userName: "Harry Potter", likeCount: "154", commentCount: "21", shareCount: "23", avatar: "https://iqonic.design/themes/socialv/html/images/user/04.jpg"},
  {userName: "Ronald Wheasley", likeCount: "134", commentCount: "22", shareCount: "1", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/g2.32d0f5a2.jpg"},
  {userName: "Hermiona Ginger", likeCount: "111", commentCount: "11", shareCount: "45", avatar: "https://iqonic.design/themes/socialv/vue/dist/img/g3.fec54150.jpg"},
];

ReactDOM.render(
  <React.StrictMode>
    <App companionData={companionData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
