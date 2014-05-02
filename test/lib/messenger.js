define(['lib/app', 'messenger'], function (app, messenger) {
	"use strict";

	describe('messenger', function () {

		describe('show', function () {

			it('should show a message', function (done) {

				app.on('messenger:show:done', function (event, type, text) {
					expect(type).to.equal('message');
					expect(text).to.equal('hello');
					expect(app.$root.find('.messenger-message').html()).to.contain('hello');

					done();
				});

				app.trigger('messenger:show', ['message', 'hello']);
			});

		});

	});

});
