import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id:1, message: "Hi, how are you?", likesCount: 2},
    {id:2, message: "Hola", likesCount: 5},
    {id:3, message: "It\'s my first post", likesCount: 3},
];

let dialogsData = [
    {id:1, name: "Gotama"},
    {id:2, name: "Alesha"},
    {id:3, name: "Sashko"},
];

let messagesData = [
    {id:1, message: "Hi"},
    {id:2, message: "Who are you?"},
    {id:3, message: "TT"},
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
