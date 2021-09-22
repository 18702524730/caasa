import Mock from 'mockjs'
var obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};
Mock.mock('msg', 'get', function() {
    return Mock.mock({
        "user|1-3": [{
            'name': '@cname',
            'id': 88
        }
      ]
    });
});