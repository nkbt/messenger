(function () {
	"use strict";

	require.config({
		baseUrl: '../js',
		paths: {
			underscore: '../bower/underscore/underscore',
			dom: '../bower/jquery/dist/jquery',
			'lib/app': '../bower/core/js/app',

			test: '../test',
			mocha: '../bower/mocha/mocha',
			chai: '../bower/chai/chai',

			'messenger': '../js/messenger',
			'messenger/html': '../html'
		},
		shim: {
			underscore: {
				exports: '_'
			},
			dom: {
				exports: 'jQuery'
			},
			mocha: {
				exports: 'mocha'
			},
			chai: {
				exports: 'chai'
			}
		},
		map: {
			'*': {
				'css': '../bower/require-css/css',
				'txt': '../bower/requirejs-text/text'
			}
		}
	});

	require([
		'mocha', 'chai'
	], function (mocha, chai) {
		mocha.ui('bdd');
		window.expect = chai.expect;
		require([
			'test/lib/messenger'
		], function () {
			if (window.mochaPhantomJS) {
				mochaPhantomJS.run();
			} else {
				mocha.run();
			}
		});
	});


})();
