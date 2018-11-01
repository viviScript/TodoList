import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render () {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input onChange={this.handleInputChange} value={this.state.inputValue} style={{width: '300px', marginRight: '10px'}} placeholder='todolist input' />
                    <Button onClick={this.handleBtnClick} type='primary'>提交</Button>
                </div>    
                <List
                    style={{width: '300px',marginTop: '10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
             </div>
        )
    }
    handleStoreChange () {
        this.setState(store.getState());
    }
    handleInputChange (e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }
    handleBtnClick () {
        const action = {
            type: 'add_list_item'
        }
        store.dispatch(action);
    }
}

export default TodoList;