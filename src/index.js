import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ExpensesDetail} from "./components/ExpensesDetail";
import {AddExpenses} from "./components/AddExpenses";
import Navbar from "./components/common/Navbar";
import ManagementCenter from "./components/management-center/ManagementCenter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar/>
      {/*<AddExpenses/>*/}
      <ManagementCenter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
