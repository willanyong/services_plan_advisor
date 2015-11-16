sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	'sap/m/MessageBox'
], function (BaseController,JSONModel,MessageBox) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.Home", {
		
		onInit: function () {
      
					//	create JSON model instance
			var oModel = new JSONModel();

			// JSON sample data
			var mData = {
				pages: [
					{
						pageId: "meterPageId",
						header: "Meter info",
						title: "ESIID",
//						titleUrl: "http://sap.com",
						icon: "sap-icon://building",
						description: "1008901023808531210100",
						groups: [
							{
								heading: "Contact Details",
								elements: [
									{
										label: "Name",
										value: "William Yong",
										elementType: sap.m.QuickViewGroupElementType.text
									},
									{
										label: "Address",
										value: "2601 WOODLAND PARK DR #6207, HOUSTON, TX",
										elementType: sap.m.QuickViewGroupElementType.text
									}
								]
							},
							{
								heading: "Meter Details",
								elements: [
									{
										label: "Meter Number",
										value: "89372328",
										elementType: sap.m.QuickViewGroupElementType.text
									},
									{
										label: "Meter Multiplier",
										value: "1",
										elementType: sap.m.QuickViewGroupElementType.text
									}
								]
							}
						]
					},
					{
						pageId: "companyEmployeePageId",
						header: "Employee Info",
						title: "John Doe",
						icon: "sap-icon://person-placeholder",
						description: "Department Manager",
						groups: [
							{
								heading: "Company",
								elements: [
									{
										label: "Name",
										value: "Adventure Company",
										url: "http://sap.com",
										elementType: sap.m.QuickViewGroupElementType.link
									},
									{
										label: "Address",
										value: "Sofia, Boris III, 136A"
									},
									{
										label: "Slogan",
										value: "Innovation through technology"
									}
								]
							}
						]
					}
				]
			};

			// set the data for the model
			oModel.setData(mData);
			this.getView().setModel(oModel);

//			var myControl = sap.ui.getCore().view.byId("quickViewCard");
//			myControl.setModel(oModel, "quickViewCardContainer");
			
		// set mock model
			var sPath = jQuery.sap.getModulePath("sap.ui.demo.nav.json", "/data.json");
			var oModel1 = new JSONModel(sPath);
			this.getView().setModel(oModel1,"plans");

		},
	
		onDisplayNotFound : function (oEvent) {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},
		
		onNavToEmployees : function (oEvent){
			this.getRouter().navTo("employeeList");
		},

		onNavToUsageChart : function (oEvent){
			this.getRouter().navTo("UsageChart");
		},
		
		onNavToUsageBar : function (oEvent){
			this.getRouter().navTo("UsageBar");
		},
		
		onNavToPlanDisplay : function (oEvent){
/*			this.getRouter().navTo("PlanDisplay",{
				invoicePath: "1234" });*/
/*			var oItem = oEvent.getSource();
			this.getRouter().navTo("PlanDisplay", {
				invoicePath: oItem.getBindingContext("TileCollection").getPath().substr(1)
			});*/
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext("plans");
			this.getRouter().navTo("PlanDisplay",{
				id : oCtx.getProperty("id")
			});
			
		}

	});

});