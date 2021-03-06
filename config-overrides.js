const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

// 主题样式修改 https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
// less 版本的坑，备注 https://github.com/ant-design/ant-motion/issues/44
module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
        "@border-radius-base": "4px"
    },
  })(config, env);
  return config;
};
