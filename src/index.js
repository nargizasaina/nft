import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from './App';
import reducer from "./store/reducer";
import './index.css';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);