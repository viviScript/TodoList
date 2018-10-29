import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        this.props.deteleItem(this.props.index)
    }
    render() {
        const { content } = this.props;
        return (
            <div className='list-item'>
                {content}
                <span className='delete' onClick={this.handleClick}>X</span>
            </div>
        )
    }
}

export default TodoItem;