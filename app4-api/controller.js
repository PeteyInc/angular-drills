angular.module("apiApp").controller("starControl", function($scope, starWars) {

  $scope.name = "Jared";

  $scope.getPeople = function() {
    starWars.getPeople().then(function(starWarsData) {
      $scope.people = starWarsData;
    });
  };

  $scope.getPeople();

});
