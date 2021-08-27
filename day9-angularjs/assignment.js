angular.module('orderByExample2', [])
.controller('ExampleController', ['$scope', function($scope) {
  var players = [
    {name: 'kohli',   team: 'RCB',  season: 2020, runs:400, wickets:0},
    {name: 'ABD',   team: 'RCB',  season: 2020, runs:345, wickets:0},
    {name: 'Dhoni',   team: 'CSK',  season: 2020, runs:440, wickets:0},
    {name: 'jadeja',   team: 'CSK',  season: 2020, runs:250, wickets:10},
    {name: 'Bumbrah',   team: 'MI',  season: 2020, runs:100, wickets:15},
    
  ];
 
  $scope.propertyName = 'runs';
  $scope.reverse = true;
  $scope.players = players;
 
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
}]);