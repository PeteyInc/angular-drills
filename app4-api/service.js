angular.module("apiApp").service("starWars", function($http, $q) {

  this.getPeople = function() {
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "http://swapi.co/api/people/"

    }).then(function(response) {
      deferred.resolve(response.data.results);
    });
    return deferred.promise;
  };

});
