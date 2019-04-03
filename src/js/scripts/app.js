// React---------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from "react-loadable";
import { Provider } from "react-redux";
import { Router, Route, Switch } from 'react-router-dom';
// Other---------------------------------------
// Store---------------------------------------
import configureStore from "../store/configureStore";
const store = configureStore();
// Loadable Components------------------------
const LoadableNavbar = Loadable({
    loader: () => import("../components/layout/Navbar"),
    loading() {
        return <div><i className="fas fa-spinner fa-pulse"></i> Loading...</div>
    }
});

const LoadableIndex = Loadable({
    loader: () => import("../components/layout/Body"),
    loading() {
        return <div><i className="fas fa-spinner fa-pulse"></i> Loading...</div>
    }
});
const LoadableReset = Loadable({
    loader: () => import("../components/layout/Reset"),
    loading() {
        return <div><i className="fas fa-spinner fa-pulse"></i> Loading...</div>
    }
});

const routes = (
    <Provider store={store}>
        <div className="app-container">
            <LoadableNavbar />
            <LoadableReset />        
            <LoadableIndex />
        </div>
    </Provider>
);

var appRoot = document.getElementById("root");
ReactDOM.render(routes, appRoot);