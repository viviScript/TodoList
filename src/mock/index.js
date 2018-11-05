const Mock = require('mockjs');
// const Random = Mock.Random;

Mock.mock('/api/test', 'post', {
    'list|4': ['pack', 'dell', 'bill']
}
)