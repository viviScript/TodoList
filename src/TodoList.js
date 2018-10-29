import React, { Component, Fragment } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange (e) {
        // console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        });
    }
    handleButtonClick () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDetele (index) {
        console.log(index);
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue}
                           onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                        return (
                            <li key={index} onClick={this.handleItemDetele.bind(this, index)}>{item}</li>
                        )}
                        )
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;