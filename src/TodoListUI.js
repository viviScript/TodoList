import React from 'react';
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <div>
                <Input onChange={props.handleInputChange} value={props.inputValue} style={{width: '300px', marginRight: '10px'}} placeholder='todolist input' />
                <Button onClick={props.handleBtnClick} type='primary'>提交</Button>
            </div>    
            <List
                style={{width: '300px',marginTop: '10px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
    )
}
// class TodoListUI extends Component {
//     render () {
//         return (
//             <div style={{marginTop: '10px', marginLeft: '10px'}}>
//             <div>
//                 <Input onChange={this.props.handleInputChange} value={this.props.inputValue} style={{width: '300px', marginRight: '10px'}} placeholder='todolist input' />
//                 <Button onClick={this.props.handleBtnClick} type='primary'>提交</Button>
//             </div>    
//             <List
//                 style={{width: '300px',marginTop: '10px'}}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }
export default TodoListUI;