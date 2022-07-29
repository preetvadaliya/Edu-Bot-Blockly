const { src, dest, watch } = require('gulp');
const minifyJs = require('gulp-uglify');
const concat = require('gulp-concat');

const FILES = [
	'src/edubotInfo.js',

	//Blocks
	'src/blocks/aMovements.js',
	'src/blocks/controls.js',
	'src/blocks/events.js',
	'src/blocks/iMovements.js',
	'src/blocks/lights.js',
	'src/blocks/movements.js',
	'src/blocks/operators.js',
	'src/blocks/sensors.js',
	'src/blocks/sMovements.js',
	'src/blocks/sounds.js',
	

	//Generator
	'src/generator/aMovements.js',
	'src/generator/controls.js',
	'src/generator/events.js',
	'src/generator/iMovements.js',
	'src/generator/lights.js',
	'src/generator/movements.js',
	'src/generator/operators.js',
	'src/generator/sensors.js',
	'src/generator/sMovements.js',
	'src/generator/sounds.js',
];

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
