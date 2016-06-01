angular.module("routingApp").controller("signupCtrl", function($scope, $state) {

  $scope.saySomething = "I'm giving up.";

  $scope.goDetails = function() {
    $state.go('details');
  };
});
