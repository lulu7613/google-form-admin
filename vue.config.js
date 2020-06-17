const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false, // 是否开启eslint

  chainWebpack: (config) => {
    // 先刪除預設 svg 配置
    config.module.rules.delete('svg');

    // 新增 svg-sprite-loader 設定
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' });

    // 修改 images-loader 配置
    // 原本的 images-loader 排除 icon 資料夾的路徑，這樣只要放在 src/assets/icon 的 SVG 就不能用 <img> 引入
    config.module
      .rule('images')
      .exclude.add(resolve('src/assets/icon'));
  },
};
