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
        console.log(props)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDetele = this.handleItemDetele.bind(this);
        this.getTodoItem = this.getTodoItem.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
    }
    render() {
        console.log('render');
        return (
            <Fragment>
                <div className='wrapper'>
                {
                    // 下面是一个input框
                    /* 输入todolist内容 */ 
                }
                    <label className='input-label' htmlFor='insertArea'>输入内容:</label>
                    <input className='input' id='insertArea' value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    ref={(input) => {this.input = input}}
                    />
                    <button className='input-submit' onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul className='wrapper-list'>
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>
        )
    }
    // 在组件即将被挂载到页面的时刻自动执行
    componentWillMount () {
        console.log('componetWillMount')
        document.removeEventListener("keydown",this.handleEnterKey);
    }
    // 在组件被挂载到页面后 自动执行
    componentDidMount () {
        console.log('componentDidMount')
        document.addEventListener("keydown",this.handleEnterKey);
    }
    // 组件被更新之前，自动执行
    shouldComponentUpdate () {
        console.log('shouldComponentUpdate')
        return true;
    }
    // 组件被更新之前，会自动自动执行，
    // 但在shouldComponentUpdate返回true之后执行
    // 如果返回false，这个函数就不会被执行了
    componentWillUpdate () {
        console.log('componentWillUpdate')
    }
    // 组件更新完成之后，会自动执行
    componentDidUpdate () {
        console.log('componentDidUpdate') 
    }
    // 在接收props时，执行
    componentWillReceiveProps () {

    }
    handleEnterKey (e) {
        // console.log(e)
        if (e.keyCode === 13) {
            this.handleButtonClick()
        }
    }
    handleInputChange (e) {
        // console.log(e.target.value)
        // this.setState({
        //     inputValue: e.target.value
        // });
        // const value = e.target.value
        const value = this.input.value
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
                <Fragment key={index}>
                <TodoItem content={item} index={index} deteleItem={this.handleItemDetele} />
                {
                    /* 
                <li key={index}
                dangerouslySetInnerHTML={{__html: item}}
                onClick={this.handleItemDetele.bind(this, index)}>
                </li>
                 */
                }
                </Fragment>
            )
        }
        )
    }

    
}

export default TodoList;