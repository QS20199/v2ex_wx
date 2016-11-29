let app = getApp();
let defaultConfig = require('../common/list');
defaultConfig.data.listTitle = '最热的主题';
defaultConfig.cgiUrl = 'https://www.v2ex.com/api/topics/hot.json';

Page(defaultConfig);