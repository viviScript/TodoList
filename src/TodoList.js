import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDetele = this.handleItemDetele.bind(this);
        this.getTodoItem = this.getTodoItem.bind(this);
    }

    handleInputChange (e) {
        // console.log(e.target.value)
        // this.setState({
        //     inputValue: e.target.value
        // });
        const value = e.target.value
        this.setState(() => {
            return {
                inputValue: value
            }
        })
    }
    handleButtonClick () {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }
    handleItemDetele (index) {
        console.log(index);
        // preState是修改之前的state状态 
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {
                list: list
            }
        })
    
    }

    getTodoItem () {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                <TodoItem content={item} index={index} deteleItem={this.handleItemDetele} />
                {
                    /* 
                <li key={index}
                dangerouslySetInnerHTML={{__html: item}}
                onClick={this.handleItemDetele.bind(this, index)}>
                </li>
                 */
                }
                </div>
            )
        }
        )
    }

    render() {
        return (
            <Fragment>
                <div>
                {
                    // 下面是一个input框
                    /* 输入todolist内容 */ 
                }
                    <label htmlFor='insertArea'>输入内容</label>
                    <input className='input' id='insertArea' value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;