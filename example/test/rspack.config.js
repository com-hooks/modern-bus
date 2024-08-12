// @ts-check
const rspack = require('@rspack/core');

/** @type {import('@rspack/cli').Configuration} */
module.exports = {
    entry: './src/index.js',
    plugins: [new rspack.HtmlRspackPlugin({})]
}