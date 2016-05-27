angular.module("app3").controller("mainCtrl", function($scope, mainService) {
  $scope.getData = function() {
    $scope.users = mainService.getData();
  };

  $scope.getData();
});
