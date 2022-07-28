const { src, dest, watch } = require('gulp');
const minifyJs = require('gulp-uglify');
const concat = require('gulp-concat');

const FILES = [];

const bundleAll = function () {
	return src(FILES).pipe(concat('blockly-all.js')).pipe(dest('./bundle/'));
};

const bundleAllMinify = function () {
	return src(FILES).pipe(minifyJs()).pipe(concat('blockly-all.js')).pipe(dest('./bundle/'));
};

const watchBundleAll = function () {
	watch(FILES, bundleAll);
};

exports.bundleAll = bundleAll;
exports.watchBundleAll = watchBundleAll;
exports.bundleAllMinify = bundleAllMinify;
