import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
import TodoListRedux from './TodoListRedux'
import { Provider } from 'react-redux';
import store from './storeRedux/index';

const App = (
    <Provider store={store}>
        <TodoListRedux></TodoListRedux>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
