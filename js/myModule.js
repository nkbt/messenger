define([
	'module', 'dom', 'underscore',
	'txt!myModule/html/container.html'
], function (module, $, _, containerTemplate) {
	"use strict";

	var config = _.defaults(module.config(), {
	});

	return {
		config: config,
		containerTemplate: containerTemplate
	};
});
