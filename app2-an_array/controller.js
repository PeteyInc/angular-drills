angular.module("arrayApp").controller("mainCtrl", function($scope, mainService) {
  $scope.getData = function() {
    $scope.data = mainService.getData();
  };
  $scope.getData();
});
