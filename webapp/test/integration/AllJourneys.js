/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"lesson1sidorovich/lesson1sidorovich/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"lesson1sidorovich/lesson1sidorovich/test/integration/pages/Worklist",
	"lesson1sidorovich/lesson1sidorovich/test/integration/pages/Object",
	"lesson1sidorovich/lesson1sidorovich/test/integration/pages/NotFound",
	"lesson1sidorovich/lesson1sidorovich/test/integration/pages/Browser",
	"lesson1sidorovich/lesson1sidorovich/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "lesson1sidorovich.lesson1sidorovich.view."
	});

	sap.ui.require([
		"lesson1sidorovich/lesson1sidorovich/test/integration/WorklistJourney",
		"lesson1sidorovich/lesson1sidorovich/test/integration/ObjectJourney",
		"lesson1sidorovich/lesson1sidorovich/test/integration/NavigationJourney",
		"lesson1sidorovich/lesson1sidorovich/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});