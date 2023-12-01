import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import store from './state/store';
import WeekView from './components/WeekView';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/weekview/:habbitId' element={<WeekView />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);
