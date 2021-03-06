/*!
 * remark v1.0.7 (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$(document).ready(function($) {
  Site.run();


  // Widget Linearea Color
  // ---------------------
  (function() {
    var timeline_labels = [];
    var timeline_data1 = [];
    var timeline_data2 = [];
    var timeline_data3 = [];
    var totalPoints = 20;
    var updateInterval = 2000;
    var now = new Date().getTime();

    function GetData() {
      timeline_labels.shift();
      timeline_data1.shift();
      timeline_data2.shift();
      timeline_data3.shift();

      while (timeline_data1.length < totalPoints) {
        var x = Math.random() * 100 + 800;
        var y = Math.random() * 100 + 400;
        var z = Math.random() * 100 + 200;
        timeline_labels.push(now += updateInterval);
        timeline_data1.push(x);
        timeline_data2.push(y);
        timeline_data3.push(z);
      }
    }
    var timlelineData = {
      labels: timeline_labels,
      series: [
        timeline_data1,
        timeline_data2,
        timeline_data3
      ]
    };

    var timlelineData = {
      labels: timeline_labels,
      series: [
        timeline_data1,
        timeline_data2,
        timeline_data3
      ]
    };
    var timelineOptions = {
      low: 0,
      showArea: true,
      showPoint: false,
      showLine: false,
      fullWidth: true,
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      axisX: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      plugins: [
        Chartist.plugins.tooltip()
      ]
    };
    new Chartist.Line("#widgetLineareaColor .ct-chart", timlelineData,
      timelineOptions);

    function update() {
      GetData();

      new Chartist.Line("#widgetLineareaColor .ct-chart", timlelineData,
        timelineOptions);
      setTimeout(update, updateInterval);
    }

    update();
  })();

  // Widget Stacked Bar
  // ------------------
  (function() {
    var timeline_labels = [];
    var timeline_data1 = [];
    var timeline_data2 = [];
    var totalPoints = 30;
    var updateInterval = 2500;
    var now = new Date().getTime();

    function GetData() {
      timeline_labels.shift();
      timeline_data1.shift();
      timeline_data2.shift();

      while (timeline_data1.length < totalPoints) {
        var x = Math.floor(Math.random() * 100) + 800;
        var y = Math.floor(Math.random() * 100) + 600;
        timeline_labels.push(now += updateInterval);
        timeline_data1.push(x);
        timeline_data2.push(y);
      }
    }
    var timlelineData = {
      labels: timeline_labels,
      series: [
        timeline_data1,
        timeline_data2
      ]
    };

    var timlelineData = {
      labels: timeline_labels,
      series: [
        timeline_data1,
        timeline_data2
      ]
    };
    var timelineOptions = {
      stackBars: true,
      fullWidth: true,
      seriesBarDistance: 0,
      chartPadding: {
        top: 0,
        right: 30,
        bottom: 30,
        left: 20
      },
      axisX: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      plugins: [
        Chartist.plugins.tooltip()
      ]
    };
    new Chartist.Bar("#widgetStackedBar .ct-chart", timlelineData,
      timelineOptions);

    function update() {
      GetData();

      new Chartist.Bar("#widgetStackedBar .ct-chart", timlelineData,
        timelineOptions);
      setTimeout(update, updateInterval);
    }

    update();
  })();

  // Widget Statistic
  // ----------------
  (function() {
    (function() {
      var defaults = $.components.getDefaults('vectorMap');
      var options = $.extend({}, defaults, {
        map: "au_mill_en",
        markers: [{
          latLng: [-33.55, 150.53],
          name: '1,512 Visits'
        }, {
          latLng: [-37.5, 144.58],
          name: '940 Visits'
        }, {
          latLng: [-31.58, 115.49],
          name: '340 Visits'
        }],
        markerStyle: {
          initial: {
            r: 6,
            fill: $.colors("blue-grey", 600),
            stroke: $.colors("blue-grey", 600),
            "stroke-width": 6,
            "stroke-opacity": 0.6
          },
          hover: {
            r: 10,
            fill: $.colors("blue-grey", 500),
            "stroke-width": 0
          }
        }
      }, true);

      $('#widgetJvmap').vectorMap(options);
    })();
  })();


  // Widget Linepoint
  // ----------------
  (function() {
    new Chartist.Line("#widgetLinepoint .ct-chart", {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
      series: [
        [10, 15, 5, 20, 5, 25, 15, 20]
      ]
    }, {
      low: 0,
      showArea: false,
      showPoint: true,
      showLine: true,
      fullWidth: true,
      lineSmooth: false,
      chartPadding: {
        top: 10,
        right: -4,
        bottom: 10,
        left: -4
      },
      axisX: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      plugins: [
        Chartist.plugins.tooltip()
      ]
    });
  })();

  // Widget Sale Bar
  // ---------------
  (function() {
    new Chartist.Bar("#widgetSaleBar .ct-chart", {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'],
      series: [
        [50, 90, 100, 90, 110, 100, 120, 130, 115, 95, 80, 85, 100, 140, 130, 120]
      ]
    }, {
      low: 0,
      fullWidth: true,
      chartPadding: {
        top: 0,
        right: 20,
        bottom: 30,
        left: 20
      },
      axisX: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      plugins: [
        Chartist.plugins.tooltip()
      ]
    });
  })();



  // Widget Overall Views
  // --------------------
  (function() {
    new Chartist.Bar("#widgetOverallViews .small-bar-one", {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      series: [
        [120, 60, 100, 50, 40, 120, 80, 130]
      ]
    }, {
      low: 0,
      fullWidth: true,
      chartPadding: {
        top: -10,
        right: 0,
        bottom: 0,
        left: 0
      },
      axisX: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      plugins: [
        Chartist.plugins.tooltip()
      ]
    });

    new Chartist.Bar("#widgetOverallViews .small-bar-two", {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      series: [
        [50, 90, 30, 90, 130, 40, 120, 90]
      ]
    }, {
      low: 0,
      fullWidth: true,
      chartPadding: {
        top: -10,
        right: 0,
        bottom: 0,
        left: 0
      },
      axisX: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      plugins: [
        Chartist.plugins.tooltip()
      ]
    });

    new Chartist.Bar("#widgetOverallViews .line-chart", {
      labels: ['josh', 'felicia', 'marco', 'alexander', 'maurice', 'joseph', 'jacklyn','augustin', 'sean', 'oscar', 'nancy', 'dominique'],
      series: [
        [20, 50, 70, 110, 100, 200, 230, 20, 50, 70, 110, 100],
        [50, 70, 60, 160, 150, 100, 290, 80, 200, 80, 210, 200]
      ]
    }, {
      low: 0,
      showArea: false,
      showPoint: false,
      showLine: true,
      lineSmooth: false,
      fullWidth: true,
      chartPadding: {
        top: 0,
        right: 10,
        bottom: 0,
        left: 10
      },
      axisX: {
        showLabel: true,
        showGrid: false,
        offset: 30
      },
      axisY: {
        showLabel: true,
        showGrid: true,
        offset: 30
      },
      plugins: [
        Chartist.plugins.tooltip()
      ]
    });
	

    new Chartist.Radar("#widgetOverallRadar .line-chart", {
      labels: ['josh', 'felicia', 'marco', 'alexander', 'maurice'],
      series: [
        [20, 50, 70, 110, 100]
      ]
    }, {
      plugins: [
        Chartist.plugins.tooltip()
      ]
    });
  })();

  // Widget Timeline
  // ---------------
  (function() {
    var timeline_labels = [];
    var timeline_data1 = [];
    var timeline_data2 = [];
    var totalPoints = 20;
    var updateInterval = 1000;
    var now = new Date().getTime();

    function GetData() {
      timeline_labels.shift();
      timeline_data1.shift();
      timeline_data2.shift();

      while (timeline_data1.length < totalPoints) {
        var x = Math.random() * 100 + 800;
        var y = Math.random() * 100 + 400;
        timeline_labels.push(now += updateInterval);
        timeline_data1.push(x);
        timeline_data2.push(y);
      }
    }

    var timlelineData = {
      labels: timeline_labels,
      series: [
        timeline_data1,
        timeline_data2
      ]
    };

    var timelineOptions = {
      low: 0,
      showArea: true,
      showPoint: false,
      showLine: false,
      fullWidth: true,
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      axisX: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      plugins: [
        Chartist.plugins.tooltip()
      ]
    };
    new Chartist.Line("#widgetTimeline .ct-chart", timlelineData, timelineOptions);

    function update() {
      GetData();

      new Chartist.Line("#widgetTimeline .ct-chart", timlelineData, timelineOptions);
      setTimeout(update, updateInterval);
    }

    update();

  })();

  (function() {
    var snow = new Skycons({
      "color": $.colors("blue-grey", 500)
    });
    snow.set(document.getElementById("widgetSnow"), "snow");
    snow.play();

    var sunny = new Skycons({
      "color": $.colors("blue-grey", 700)
    });
    sunny.set(document.getElementById("widgetSunny"), "clear-day");
    sunny.play();
  })();


  // Widget Linepoint
  // ----------------
  (function() {
    new Chartist.Line("#widgetLinepointDate .ct-chart", {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
      series: [
        [36, 45, 28, 19, 39, 46, 35, 13]
      ]
    }, {
      low: 0,
      showArea: false,
      showPoint: true,
      showLine: true,
      fullWidth: true,
      lineSmooth: false,
      chartPadding: {
        top: 5,
        right: -4,
        bottom: 10,
        left: -4
      },
      axisX: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      axisY: {
        showLabel: false,
        showGrid: false,
        offset: 0
      },
      plugins: [
        Chartist.plugins.tooltip()
      ]
    });
	
	
  })();
  
});

  
  // Example Chartjs Radar
  // --------------------
  (function() {
    var radarChartData = {
      labels: ["Arithmetic", "Integration", "Derivative Applications", "Derivatives", "Trigonometry", "Non-Linear", "Log and Expo", "Quadratic/Polynomials", "Functions", "Simultaneous Equations", "Straight Lines", "Z-Notation", "Algebra"],
      pointLabelFontSize: 14,
      datasets: [{
        fillColor: "rgba(98,168,234,0.35)",
        strokeColor: "rgba(0,0,0,0)",
        pointColor: $.colors("blue", 600),
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: $.colors("blue", 600),
        data: [28, 48, 40, 19, 96, 27, 100, 28, 48, 40, 19, 96, 27]
      }, {
        fillColor: "rgba(125,211,174,0.7)",
        strokeColor: "rgba(0,0,0,0)",
        pointColor: $.colors("green", 600),
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: $.colors("blue-grey", 300),
        data: [65, 59, 90, 81, 56, 55, 40, 65, 59, 90, 81, 56, 55]
      }]
    };

    var myRadar = new Chart(document.getElementById("exampleChartjsRadar").getContext("2d")).Radar(radarChartData, {
      scaleShowLabels: false,
      pointLabelFontSize: 10
    });
  })();