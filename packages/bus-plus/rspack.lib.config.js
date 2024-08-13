const { defineConfig } = require("rspack-lib");
const { RspackDtsPlugin } = require("rspack-dts-plugin");

module.exports = defineConfig({
    lib: [
        // 编译commonjs
        {
            target: 'node',
            externalsType: 'commonjs',
            output: {
                filename: 'cjs/index.js',
                iife: false,
                chunkFormat: 'commonjs',
                library: {
                    type: 'commonjs2',
                },
            },
        },
        // 编译esmodule
        {
            target: 'es5',
            optimization: {
                concatenateModules: true,
            },
            experiments: {
                outputModule: true,
            },
            output: {
                module: true,
                chunkFormat: 'module',
                filename: 'esm/index.js',
                library: {
                    type: 'module',
                },
            },
            plugins: [
                new RspackDtsPlugin()
            ],
        },
    ],
    // rspack 配置
    rspack: {
        entry: './src/index.ts',
        watch: false,
        resolve: {
            extensions: [".ts", ".js", ".json", ".wasm"],
        },
        devtool: false,
        externals: {
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: [/node_modules/],
                    loader: 'builtin:swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: 'typescript',
                            },
                        },
                    },
                    type: 'javascript/auto',
                },
            ],
        },
    },
});