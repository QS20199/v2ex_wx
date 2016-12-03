let app = getApp();
let defaultConfig = require('../common/list')();
defaultConfig.data.listTitle = '最新的主题';
defaultConfig.cgiUrl = 'https://www.v2ex.com/api/topics/latest.json';

Page(defaultConfig);