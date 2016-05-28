angular.module("apiApp").service("starWars", function($http, $q) {

  this.getData = function() {
      var deferred = $q.defer();
      $http({
          method: "GET",
          url: "http://swapi.co/api/"
      }).then(function(response) {
            var parsedData = response.data;
            for (var key in parsedData) {
                $http({
                      method: "GET",
                      url: "parsedData[key]"
                  });
              }
          return deferred.promise;
      });
    };
});
