angular.module("apiApp").controller("starControl", function($scope, starWars) {

  $scope.getData = function() {
    starWars.getData().then(function(starWarsData) {
      $scope.api = starWarsData;
    });
  };

  $scope.getData();

// $scope.getFilms = function() {
//
// }

});
