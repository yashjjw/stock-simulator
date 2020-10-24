window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label} {y}",
        dataPoints: [
          { y: 40, label: "TCS" },
          { y: 20, label: "MRF" },
          { y: 20, label: "AXIS" },
          { y: 15, label: "HP" },
          { y: 5, label: "Others" }
        ]
      }]
    });
    chart.render();

  }

