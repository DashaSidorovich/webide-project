sap.ui.define([
		"lesson1sidorovich/lesson1sidorovich/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("lesson1sidorovich.lesson1sidorovich.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);