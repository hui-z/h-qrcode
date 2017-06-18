const path = require('path');
const buble = require('rollup-plugin-buble');
const replace = require('rollup-plugin-replace');
const uglify = require('rollup-plugin-uglify');

const builds = {
    umd: {
        entry: path.resolve('src/index.js'),
        dest: path.resolve('dist/h-qrcode.min.js'),
        format: 'umd',
        env: 'production',
        moduleName: 'QRCode',
    }
};

function genConfig(opts) {
    const config = {
        entry: opts.entry,
        dest: opts.dest,
        format: opts.format,
        moduleName: opts.moduleName,
        plugins: [
          buble(),
          // uglify({})
        ].concat(opts.plugins || []),
    };

    if (opts.env) {
        config.plugins.push(
            replace({
                'process.env.NODE_ENV': JSON.stringify(opts.env),
            })
        );
    }

    return config;
}

module.exports = genConfig(builds[process.env.TARGET]);
