sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function (BaseController,JSONModel,MessageBox) {
	"use strict";
	 return BaseController.extend("sap.ui.demo.nav.controller.plan.PlanDisplay", {
	 	onInit: function () {
	 				// set mock model
			var sPath = jQuery.sap.getModulePath("sap.ui.demo.nav.json", "/data.json");
			var oModel1 = new JSONModel(sPath);
			this.getView().setModel(oModel1);
 			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
 			oRouter.getRoute("PlanDisplay").attachPatternMatched(this._onObjectMatched, this);
	 	},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path : "/TileCollection/" + oEvent.getParameter("arguments").id +"/"
			});
		},
		
		_getVal: function(evt) {
			return sap.ui.getCore().byId(evt.getParameter('id')).getValue();
		},

		handleTelPress: function (evt) {
			sap.m.URLHelper.triggerTel(this._getVal(evt));
		},

		handleSmsPress: function (evt) {
			sap.m.URLHelper.triggerSms(this._getVal(evt));
		},

		handleEmailPress: function (evt) {
			sap.m.URLHelper.triggerEmail(this._getVal(evt), "Info Request");
		},

		handleUrlPress: function (evt) {
			sap.m.URLHelper.redirect(this._getVal(evt), true);
		}
// 		onInit: function () {
// 			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
// 			oRouter.getRoute("PlanDisplay").attachPatternMatched(this._onObjectMatched, this);
// 		},
// 		_onObjectMatched: function (oEvent) {
// 			this.getView().bindElement({
// //				path: "/" + oEvent.getParameter("arguments").id,
// 				path : "/TileCollection/" + oEvent.getParameter("arguments").id +"/",
// 				model: "plans"
// 			});
// 		}
	
// 		onInit: function () {
// 			var oRouter = this.getRouter();
// 			oRouter.getRoute("PlanDisplay").attachMatched(this._onRouteMatched, this);
			
// 			// Hint: we don't want to do it this way
// 			/*
// 			oRouter.attachRouteMatched(function (oEvent){
// 				var sRouteName, oArgs, oView;
// 				sRouteName = oEvent.getParameter("name");
// 				if (sRouteName === "employee"){
// 					this._onRouteMatched(oEvent);
// 				}
// 			}, this);
// 			*/
// 		},
// 		_onRouteMatched : function (oEvent) {
// 			var oArgs, oView;
// 			oArgs = oEvent.getParameter("arguments");
// 			oView = this.getView();

// 			oView.bindElement({
// //				path : "/TileCollection(" + oArgs.id + ")",
// 				path : "/TileCollection/" + oArgs.id  + "/",
// //				path : "/" + oArgs.id ,
// //				model: "plans",
// 				events : {
// 					change: this._onBindingChange.bind(this),
// 					dataRequested: function (oEvent) {
// 						oView.setBusy(true);
// 					},
// 					dataReceived: function (oEvent) {
// 						oView.setBusy(false);
// 					}
// 				}
// 			});
// 		},
// 		_onBindingChange : function (oEvent) {
// 			// No data for the binding
// 			if (!this.getView().getBindingContext()) {
// 				this.getRouter().getTargets().display("notFound");
// 			}
// 		}
 	});
});