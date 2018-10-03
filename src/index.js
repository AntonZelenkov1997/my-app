import React from 'react';
import ReactDOM from 'react-dom';
import { Routers } from './components/routers/routers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducerSearchBarComponent } from './store/redusers';

export const store = createStore(reducerSearchBarComponent)

const root = document.getElementById("root");

ReactDOM.render(
    <Provider store = {store}>
        <Routers />
    </Provider>, root
);