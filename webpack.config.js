'use strict';

const path = require('path');

module.exports = {
  egg: true,
  framework: 'vue', // 使用 easywebpack-vue 构建解决方案
  entry: {
    'home/index': 'app/web/page/home/index.js',
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, './app'),
    },
  },
};
