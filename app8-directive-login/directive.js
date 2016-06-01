angular.module('login').directive('loginDir', function() {
  return {
    restrict: 'E',
    templateUrl: 'loginDir.html',
    scope: {},
    controller: function($scope) {
      $scope.login = function($scope) {
        console.log(this.username);
        console.log(this.password);
        alert("Logged In!");
      };
    }
  };
});
