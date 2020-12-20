// 自己添加的配置信息

module.exports = {
    // 用于配置webpack打包工具
    configureWebpack: {
        resolve: {
            // 用于配置哪些后缀名可以省略
            // extensions: ['.css'],
            // 用于配置别名
            alias: {
                'assets': '@/assets',
                'common_js': '@/common_js',
                'components': '@/components',
                'network': '@/network',
                'router': '@/router',
                'store': '@/store',
                'views': '@/views'
            }
        }
    }
}