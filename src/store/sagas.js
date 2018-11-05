import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';
function* getInitList () {
    try {
        const res = yield axios.post('/api/test');
        const action = initListAction(res.data.list);
        yield put(action);
    } catch(e) {
        console.log('api 网络请求失败')
    }
    
    // axios.post('/api/test').then((res) => {
    //     const data = res.data.list
    //     const action = initListAction(data)
    //     put(action);
    //     console.log(res);
    // })
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}
export default mySaga;