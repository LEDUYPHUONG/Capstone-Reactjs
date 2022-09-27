import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/configStore';
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import Index from './pages/Index/Index'
import Detail from './pages/Detail/Detail'
import Login from './pages/Login/Login'
import Carts from './pages/carts/Carts'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
import Search from './pages/Search/Search'
import '../src/assets/scss/styles.scss'

//cấu hình history (chuyển hướng không cần hook navigate)
export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='' element={<App />}>
            <Route index element={<Index />}></Route>
            {/* <Route path='detail'>
              <Route path=':id' element={<Detail/>}></Route>
            </Route> */}
            <Route path='detail' element={<Detail />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='carts' element={<Carts />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='search' element={<Search />}></Route>
          </Route>
        </Routes>
        {/* <Routes>
          <Route path='admin' element={<AdminPage />}>
            <Route index element={<AdminTemplate Component={Login} />}></Route>
          </Route>
        </Routes> */}
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
