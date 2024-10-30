import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProfilePage from './profile/UserProfilePage';
import reportWebVitals from './reportWebVitals';
import MainEvent from './Event/MainEvent';



// import LogAdmin from './Dashboard/LogAdmin';
// import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MainEvent/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
