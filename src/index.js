import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './Components/list';
import Details from './Components/details';
import All from './Components/all';
import Random from './Components/random';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list" element={<List />}>
          <Route path="details/:_id" element={<Details />} />
          <Route index element={<All />} />
        </Route>
        <Route path="/random" element={<Random />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
