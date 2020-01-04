module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    lintOnSave: false,
    productionSourceMap: true, // 生产环境sourceMap
    chainWebpack: config => {
        config.module
            .rule('zepto')
            .test(require.resolve('zepto'))
            .use('exports')
            .loader('exports-loader?window.Zepto') // 可通过import $ from 'zepto' 方式引入
            .end()
            .use('script')
            .loader('script-loader') // 在window全局变量下运行zepto
            .end()
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 6000
            })
            .end()
    }
}
