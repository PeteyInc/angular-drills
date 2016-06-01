angular.module("routingApp").controller("detailsCtrl", function($scope, mainService) {

  $scope.smurfData = function() {
    mainService.getData().then(function(response) {
      console.log(response);
      $scope.smurfs = response;
    });
  };

  $scope.smurfData();

});
