import React from "react";
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';
import store from './redux/store'



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
