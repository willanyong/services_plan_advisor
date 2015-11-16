sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.demo.nav.controller.usage.UsageChart", {
		onInit : function (evt) {
	var oVizFrame = this.getView().byId("idoVizFrame");

		 var oModel_bl = new sap.ui.model.json.JSONModel({
		      "Products":[
		                 {
		                 "Year": "2010",
		                 "Profit": 100,
		                 "Forcast": 200,
		                 "Target": 20,
		                 "kWh": 4328,
		                 "Revenue2": 20,
		                 "Revenue3": 512
		                 },
		                 {
		                   "Year": "2011",
		                   "Profit": 159,
		                   "Forcast": 140,
		                   "Target": 150,
		                   "kWh": 3874,
		                   "Revenue2": 100,
		                   "Revenue3": 303
		               },
		               {
		                   "Year": "2012",
		                   "Profit": 129,
		                   "Forcast": 120,
		                   "Target": 100,
		                   "kWh": 2985,
		                   "Revenue2": 222,
		                   "Revenue3": 263
		               },
		               {
		                   "Year": "2013",
		                   "Profit": 58,
		                   "Forcast": 60,
		                   "Target": 3877,
		                   "kWh": 3872,
		                   "Revenue2": 152,
		                   "Revenue3": 113
		               },
		               {
		                   "Year": "2014",
		                   "Profit": 149,
		                   "Forcast": 120,
		                   "Target": 150,
		                   "kWh": 5487,
		                   "Revenue2": 292,
		                   "Revenue3": 443
		               },
		               {
		                   "Year": "2015",
		                   "Profit": 49,
		                   "Forcast": 60,
		                   "Target": 55,
		                   "kWh": 4344,
		                   "Revenue2": 242,
		                   "Revenue3": 243
		               }               
		                 ]
		    });
		    var oDataset_bl = new sap.viz.ui5.data.FlattenedDataset({
		       dimensions: [{
		         name: 'Year',
		         value: "{Year}"
		       }],
		       measures: [
		         {
				   group:1,
		           name: 'Profit', 
		           value: '{Revenue2}' 
		         },
		         {
					 group:1,
		           name : 'Target',
		           value : '{Target}'
		         },
		         {
					 group:1,
		           name : "Forcast",
		           value : "{Forcast}"
		         },
		         {
				   group:1,
		           name : "kWh",
		           value : "{kWh}"
		         },
		         {
					 group:1,
		           name : 'Revenue2',
		           value : '{Revenue2}'
		         },
		         {
					 group:1,
		           name : "Revenue3",
		           value : "{Revenue3}"
		         }
		       ],
		       data: {
		         path: "/Products"
		       }
		     });
	  	
		 oVizFrame.setVizProperties({  
		      plotArea: {
		        showGap: true
		      },
	        title : {
	            visible : true, 
	            text : '2010 - 2015' 
	  }			 
		    });
		    oVizFrame.setDataset(oDataset_bl);
		    oVizFrame.setModel(oModel_bl);

		    var feedPrimaryValues_bl7 = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid' : "primaryValues",
		      'type' : "Measure",
//		      'values' : ["Profit", "Revenue"]
		      'values' : ["kWh"]
		    }), feedAxisLabels_bl7 = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid' : "axisLabels",
		      'type' : "Dimension",
		      'values' : ["Year"]
		    }),
		    feedTargetValues_bl7 = new sap.viz.ui5.controls.common.feeds.FeedItem({
		      'uid' : "targetValues",
		      'type' : "Measure",
		      'values' : ["Target"]
		    });

		    oVizFrame.addFeed(feedPrimaryValues_bl7);
		    oVizFrame.addFeed(feedAxisLabels_bl7);
		    oVizFrame.addFeed(feedTargetValues_bl7);
		    oVizFrame.setVizType('line');
		}
	});
});