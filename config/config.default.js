'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {
    REQUEST: {
      host: 'api.taoyiwenhua.cn',
      pathname: 'wzt',
      protocol: 'http'
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541593288598_9988';

  // add your config here
  config.middleware = [];

  config.static = {
    
  }
  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    mapping: {
      '.html': 'nunjucks',
    },
  }
  config.static = {
    dir: path.join(appInfo.baseDir, 'app/public'),
    prefix: '/',
    buffer: true
  };
  config.session = {
    key: 'TY_SESSION_52678',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  };
  
  return config;
};
