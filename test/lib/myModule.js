define(['myModule'], function (myModule) {
	"use strict";


	describe('myModule', function () {


		it('should return containerTemplate', function () {
			expect(myModule.containerTemplate).to.be.equal('<div class="myModule-container"></div>\n');
		});


	});


});
