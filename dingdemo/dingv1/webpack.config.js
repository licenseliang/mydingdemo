/* eslint-disable */
'use strict';

module.exports = (config, webpack) => {
    config.entry.vendor = [
    'react',
    'react-dom',
    'rc-form',
    'react-keeper',
    'react-router'
    ];

var CompressionWebpackPlugin = require('compression-webpack-plugin');
  config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            //注意一个单引号一个双引号…… 这里是要将 "production" 替换到文件里面
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
    //在 plugins 中添加
    /*new webpack.optimize.UglifyJsPlugin({
        comments: false,        //去掉注释
        compress: {
            warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
        }
    }),*/
    //在 plugin 中添加
    new CompressionWebpackPlugin({ //gzip 压缩
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
            '\\.(js|css|jsx)$'    //压缩 js 与 css
        ),
        threshold: 10240,
        minRatio: 0.8
    })
  );
  
    config.resolve.extensions = ['', '.web.js', '.jsx', '.js', '.json'];
    config.module.loaders = config.module.loaders.filter((n) => !/\.svg/.test(n.test));
    config.module.loaders.forEach((n) => {
        if (/\.jsx/.test(n.test)) {
            n.query.plugins.push(['import', [{ style: 'css', libraryName: 'antd-mobile' }]])
        } else if (/\.css/.test(n.test)) {
            delete n.include;
        }
    });
    config.module.loaders.push({
        test: /.svg$/,
        loader: 'svg-sprite-loader',
    });
    config.module.rules = [
        {test: /\.(js|jsx)$/},
        {exclude: /node_modules/}, // 这里面的不解析
        {loader: 'babel-loader'},
        {query: [  // 相当于babel的options
            {presets: ['react', 'es2015']}
        ]}
    ];

};