module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/scss/variables/variables.scss";`,
            },
        },
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');

        config.plugin('html').tap((args) => {
            args[0].meta = [
                { name: 'description', content: 'Director / London' },
                { name: 'robots', content: 'nosnippet' },
            ];
            return args;
        });
    },
};
