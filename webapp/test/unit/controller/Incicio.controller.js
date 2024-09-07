/*global QUnit*/

sap.ui.define([
	"projeto_netflix/controller/Incicio.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Incicio Controller");

	QUnit.test("I should test the Incicio controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
