import { defineConfig } from '@rspack/cli';

export default defineConfig({
    entry: './src/index.ts',
    watch: true,
    resolve: {
        extensions: [".ts", ".js", ".json", ".wasm"],
    },
    devtool: false,
    externals: {
    },
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
});