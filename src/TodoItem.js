import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        const {deteleItem, index} = this.props;
        // this.props.deteleItem(this.props.index)
        deteleItem(index);
    }
    // 一个组件要从父组建接收参数
    // 只要父组建的render函数被重新执行了，子组建的生命周期就会执行
    // 如果这个组件第一次存在父组建中，不会执行
    // 如果这个组件之前已经存在父组件中，就会执行
    componentWillReceiveProps () {
        console.log('child componentWillReceiveProps')
    }
    // 当组件被销毁时，会执行
    componentWillUnmount () {
        console.log('child componentWillUnmount')
    }
    render() {
        const { content, index } = this.props;
        return (
            <div className='list-item'>
                {index}-{content}
                <span className='delete' onClick={this.handleClick}>X</span>
            </div>
        )
    }
}

// 传值校验
// isRequired 必须传
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    deteleItem: PropTypes.func,
    index: PropTypes.number
}
// 默认传值
TodoItem.defaultProps = {
    test: 'hello world'
}
export default TodoItem;