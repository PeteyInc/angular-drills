angular.module("routingApp").service("mainService", function($http, $q) {

    this.getData = function() {
        $http({
            method: "GET",
            url: "http://smurfs.devmounta.in/smurfs/"
        });
    };

});
