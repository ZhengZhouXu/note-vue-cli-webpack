// 引入utils
var utils = require('./utils')

// 引入配置文件
var config = require('../config')

// 当前是否是生成环境
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: utils.cssLoaders({ //设置cssLoaders方法的参数
        sourceMap: isProduction ?
            config.build.productionSourceMap : config.dev.cssSourceMap,
        extract: isProduction
    }),
    postcss: [
        require('autoprefixer')({ //自动补全浏览器前缀
            browsers: ['last 2 versions'] //使用最近的两个版本
        })
    ]
}
