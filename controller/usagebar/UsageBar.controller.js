sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.demo.nav.controller.usagebar.UsageBar", {
	
	onInit: function() {
		               //-------column chart vizframe-------
		                    	  		var oVizFrame4 = this.getView().byId("idoVizFrame4");
		                    			var oDataset4 = new sap.viz.ui5.data.FlattenedDataset({
		                    				'dimensions' : [ {
		                    					'name' : 'Week',
		                    					'value' : "{Week}"
		                    				} ],

		                    				'measures' : [ {
		                    					'name' : 'kWh',
		                    					'value' : '{kWh}'
		                    				} ],
		                    				'data' : {
		                    					'path' : "/businessData"
		                    				}
		                    			});
		                    					 oVizFrame4.setVizProperties({  
												      plotArea: {
												        showGap: true
												      },
											        title : {
											            visible : true, 
											            text : 'Last 6 weeks Usage' 
											  }		 });

											  
		                    			// var amModel4 = new sap.ui.model.json.JSONModel({
		                    			// 	'businessData' : [ 
		                    	  //				{'Country': "Canada", 'revenue': 410.87, 'profit': 141.25},
		                    	  //				{'Country': "China", 'revenue': 338.29, 'profit': 133.82},
		                    	  //				{'Country': "France", 'revenue': 487.66, 'profit': 348.76},
		                    	  //				{'Country': "Germany", 'revenue': 470.23, 'profit': 217.29},
		                    	  //				{'Country': "India", 'revenue': 170.93, 'profit': 117.00},
		                    	  //				{'Country': "United States", 'revenue': 905.08, 'profit': 609.16},
		                    	  //				{'Country': "Italy", 'revenue': 410.87, 'profit': 141.25},
		                    	  //				{'Country': "Spain", 'revenue': 338.29, 'profit': 133.82},
		                    	  //				{'Country': "Portugal", 'revenue': 487.66, 'profit': 348.76},
		                    	  //				{'Country': "Ireland", 'revenue': 470.23, 'profit': 217.29},
		                    	  //				{'Country': "Scotland", 'revenue': 170.93, 'profit': 117.00},
		                    	  //				{'Country': "Wales", 'revenue': 905.08, 'profit': 609.16},
		                    	  //				{'Country': "England", 'revenue': 410.87, 'profit': 141.25},
		                    	  //				{'Country': "Belgium", 'revenue': 338.29, 'profit': 133.82},
		                    	  //				{'Country': "Andorra", 'revenue': 487.66, 'profit': 348.76},
		                    	  //				{'Country': "Netherlands", 'revenue': 470.23, 'profit': 217.29},
		                    	  //				{'Country': "Poland", 'revenue': 170.93, 'profit': 117.00},
		                    	  //				{'Country': "Danemark", 'revenue': 905.08, 'profit': 609.16},
		                    	  //				{'Country': "Sweden", 'revenue': 410.87, 'profit': 141.25},
		                    	  //				{'Country': "Norway", 'revenue': 338.29, 'profit': 133.82},
		                    	  //				{'Country': "Finland", 'revenue': 487.66, 'profit': 348.76},
		                    	  //				{'Country': "Russia", 'revenue': 470.23, 'profit': 217.29},
		                    	  //				{'Country': "Bularia", 'revenue': 170.93, 'profit': 117.00},
		                    	  //				{'Country': "Romania", 'revenue': 905.08, 'profit': 609.16},
		                    	  //				{'Country': "Alabania", 'revenue': 410.87, 'profit': 141.25},
		                    	  //				{'Country': "Greece", 'revenue': 338.29, 'profit': 133.82},
		                    	  //				{'Country': "Turkey", 'revenue': 487.66, 'profit': 348.76},
		                    	  //				{'Country': "South Africa", 'revenue': 470.23, 'profit': 217.29},
		                    	  //				{'Country': "Australia", 'revenue': 170.93, 'profit': 117.00},
		                    	  //				{'Country': "New Zeland", 'revenue': 905.08, 'profit': 609.16},
		                    	  //				{'Country': "Japan", 'revenue': 410.87, 'profit': 141.25},
		                    	  //				{'Country': "Indonesia", 'revenue': 338.29, 'profit': 133.82},
		                    	  //				{'Country': "Argentina", 'revenue': 487.66, 'profit': 348.76},
		                    	  //				{'Country': "Mexico", 'revenue': 470.23, 'profit': 217.29},
		                    	  //				{'Country': "Brazil", 'revenue': 170.93, 'profit': 117.00},
		                    	  //				{'Country': "Chile", 'revenue': 905.08, 'profit': 609.16},
		                    	  //				{'Country': "Peru", 'revenue': 410.87, 'profit': 141.25},
		                    	  //				{'Country': "Colombia", 'revenue': 338.29, 'profit': 133.82},
		                    	  //				{'Country': "Venezuela", 'revenue': 487.66, 'profit': 348.76},
		                    	  //				{'Country': "Uruguay", 'revenue': 470.23, 'profit': 217.29},
		                    	  //				{'Country': "Honduras", 'revenue': 170.93, 'profit': 117.00},
		                    	  //				{'Country': "Ghana", 'revenue': 905.08, 'profit': 609.16},
		                    	  //				{'Country': "Israel", 'revenue': 410.87, 'profit': 141.25},
		                    	  //				{'Country': "Lybia", 'revenue': 338.29, 'profit': 133.82},
		                    	  //				{'Country': "Algeria", 'revenue': 487.66, 'profit': 348.76},
		                    	  //				{'Country': "Marroco", 'revenue': 470.23, 'profit': 217.29},
		                    	  //				{'Country': "Guinea", 'revenue': 170.93, 'profit': 117.00},
		                    	  //				{'Country': "Iran", 'revenue': 905.08, 'profit': 609.16},
		                    	  //				{'Country': "Irak", 'revenue': 410.87, 'profit': 141.25},
		                    	  //				{'Country': "Egypt", 'revenue': 338.29, 'profit': 133.82},
		                    	  //				{'Country': "Kenya", 'revenue': 487.66, 'profit': 348.76},
		                    	  //				{'Country': "Island", 'revenue': 470.23, 'profit': 217.29},
		                    	  //				{'Country': "Cuba", 'revenue': 170.93, 'profit': 117.00},
		                    	  //				{'Country': "Pakistan", 'revenue': 905.08, 'profit': 609.16}
		                    	  //			 ]
		                    			var amModel4 = new sap.ui.model.json.JSONModel({
		                    				'businessData' : [ 
		                    	  				{'Week': "This Week", 'revenue': 905.08, 'kWh': 5.221},
												{'Week': "Last Week", 'revenue': 905.08, 'kWh': 88.674},
												{'Week': "10/25 - 10/31", 'revenue': 905.08, 'kWh': 23.556},
												{'Week': "10/18 - 10/24", 'revenue': 905.08, 'kWh': 66.334},
												{'Week': "10/11 - 10/17", 'revenue': 905.08, 'kWh': 23.344}
		                    	  			 ]
		                    			});
		                    			var feedPrimaryValues4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
		                    				'uid' : "primaryValues",
		                    				'type' : "Measure",
		                    				'values' : [ "kWh" ]
		                    			}), feedAxisLabels4 = new sap.viz.ui5.controls.common.feeds.FeedItem({
		                    				'uid' : "axisLabels",
		                    				'type' : "Dimension",
		                    				'values' : [ new sap.viz.ui5.controls.common.feeds.AnalysisObject({
		                    					'uid' : "Week",
		                    					'type' : "Dimension",
		                    					'name' : "Week"
		                    				}) ]
		                    			});
		                    			  oVizFrame4.setDataset(oDataset4);
		                    			  oVizFrame4.setModel(amModel4);
		                    			  oVizFrame4.addFeed(feedPrimaryValues4);
		                    			  oVizFrame4.addFeed(feedAxisLabels4);
		                    			  oVizFrame4.setVizType('column');
	}


	});
});