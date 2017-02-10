var chartModule = angular.module('ChartModule', ['chart.js']);
chartModule.controller("LineCtrl", function ($scope,$http) {
    $http(
        {
            method: 'get',
            datatype: 'jsonp',
            headers: {
                'Content-Type': 'application/json'

            },
            url: 'https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json'


        }).then(function (response) {
            //console.log(response.data.dataset_data.data);
            $scope.labels = [];
       
            $scope.series = ['Series A'];
            $scope.data = [];
            angular.forEach(response.data.dataset_data.data, function (key, value) {

                //console.log(key.length);
                console.log(key[0]);
                $scope.labels.push(key[0]);
                for (i in key) {
                   if(i>0)  
                    $scope.data.push(key[i]);
                }

                //var date = new Date(key[0]);
                //locale = "en-us";
                //month = date.toLocaleString(locale, { month: "long" });
                //console.log(month);
            })
          

            
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
            $scope.datasetOverride = [{ yAxisID: 'y-axis-1' },
                { yAxisID: 'y-axis-2' }];
            $scope.options = {
                scales: {
                    yAxes: [
                      {
                          id: 'y-axis-1',
                          type: 'linear',
                          display: true,
                          position: 'left'
                      },
                      {
                          id: 'y-axis-2',
                          type: 'linear',
                          display: true,
                          position: 'right'
                      }
                    ]
                }
            };



        });


   
});



chartModule.controller("BarCtrl", function ($scope) {
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
});
 
chartModule.controller("DoughnutCtrl", function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
});

chartModule.controller("BubbleCtrl",
  function ($scope) {
      // see examples/bubble.js for random bubbles source code
      $scope.series = ['Series A', 'Series B'];

      $scope.data = [
        [{
            x: 40,
            y: 10,
            r: 20
        }],
        [{
            x: 10,
            y: 40,
            r: 50
        }]
      ];
  });
  


chartModule.controller("MixedChartCtrl",
  function ($scope) {
      $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

      $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      $scope.data = [
        [65, -59, 80, 81, -56, 55, -40],
        [28, 48, -40, 19, 86, 27, 90]
      ];
      $scope.datasetOverride = [
        {
            label: "Bar chart",
            borderWidth: 1,
            type: 'bar'
        },
        {
            label: "Line chart",
            borderWidth: 3,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            type: 'line'
        }
      ];
  });
  

chartModule.controller("RadarCtrl", function ($scope) {
    $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];
});