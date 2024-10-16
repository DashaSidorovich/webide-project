sap.ui.define([
		"lesson1sidorovich/lesson1sidorovich/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("lesson1sidorovich.lesson1sidorovich.controller.NotFound", {

			
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);