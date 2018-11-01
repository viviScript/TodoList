const Mock = require('mockjs');
const Random = Mock.Random;



Mock.mock('/api/test', 'post', {
    'list|1-10': [1,2,3,4]
}
)