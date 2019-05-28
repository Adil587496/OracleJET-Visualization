/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojchart'],
 function(oj, ko, $) {
  
    function DashboardViewModel() {
      var self = this;
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        
        /* chart data */
        var barSeries = [{name: "Germany", items: [55, 70, 50]},
                         {name: "Australia", items: [47, 62, 41]},
                         {name: "USA", items: [36, 50, 39]},
                         {name: "Nerway", items: [22, 46, 33]}];
    
        var barGroups = ["Furmiture", "Technology", "Office Supplies"];
   
        self.barSeriesValue = ko.observableArray(barSeries);
        self.barGroupsValue = ko.observableArray(barGroups);
        
        
        /* chart data countries*/
        
        var scatterSeries = [{name : "Germany", items : [{x:600, y:5000}, {x:230, y:4600}, {x:150, y:3000}]},
{name : "Australia", items : [{x:470, y:3700}, {x:200, y:2800}, {x:100, y:1500}]},
{name : "USA", items : [{x:670, y:4300}, {x:300, y:5400}, {x:400, y:4900}]},
{name : "Norway", items : [{x:380, y:3200}, {x:110, y:1900}, {x:190, y:2500}]}];
    
        
    
        
        self.scatterSeriesValue = ko.observableArray(scatterSeries);
        
        
        
         /* chart data BPC */
        var boxPlotSeries = [
          {name: "Germany", items : [
            {low: 18, q1: 25, q2: 33, q3: 38, high: 50, items: [60, 70]},
            {low: 40, q1: 49, q2: 56, q3: 63, high: 80, items: [89]},
            {low: 20, q1: 28, q2: 32, q3: 38, high: 45}
           
          ]},
      {name: "Australia", items : [
            {low: 12, q1: 16, q2: 20, q3: 24, high: 30, items: [40, 50]},
            {low: 21, q1: 24, q2: 36, q3: 44, high: 65, items: [15]},
            {low: 7, q1: 16, q2: 23, q3: 32, high: 49}
           
          ]},
      {name: "USA", items : [
            {low: 10, q1: 14, q2: 22, q3: 17, high: 28, items: [40, 50]},
            {low: 21, q1: 24, q2: 36, q3: 44, high: 65, items: [15]},
            {low: 7, q1: 16, q2: 23, q3: 32, high: 49}
           
          ]},
          {name: "Norway", items : [
            {low: 12, q1: 17, q2: 21, q3: 24, high: 35},
            {low: 5, q1: 14, q2: 24, q3: 31, high: 47},
            {low: 26, q1: 37, q2: 48, q3: 52, high: 71, items: [9, 12, 78]}
          ]}
        ];
        var boxPlotGroups = ["Furmiture", "Technology", "Office Supplies"];
   
        self.boxPlotSeriesValue = ko.observableArray(boxPlotSeries);
        
      
      
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
