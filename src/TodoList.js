import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';
import { initListAction,getInputChangeAction, getAddItemAction, getDeteleItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI';
import axios from 'axios';
require('./mock/index');

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render () {
        return (
                <TodoListUI 
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    handleItemDelete={this.handleItemDelete}
                    />
            )
    }
    componentDidMount () {
        axios.post('/api/test').then((res) => {
            const data = res.data.list
            const action = initListAction(data)
            store.dispatch(action);
            console.log(res);
        })
    }
    handleStoreChange () {
        this.setState(store.getState());
    }
    handleInputChange (e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleItemDelete (index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeteleItemAction();
        store.dispatch(action);
    }
    handleBtnClick () {
        // const action = {
        //     type: ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action);
    }
}

export default TodoList;