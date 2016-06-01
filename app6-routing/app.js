angular.module("routingApp", ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'homeTmpl.html',
      controller: 'mainCtrl'
    }).state('details', {
      url: '/details',
      templateUrl: 'details.html',
      controller: 'detailsCtrl'
    }).state('signup', {
      url: '/signup',
      templateUrl: 'signup.html',
      controller: 'signupCtrl'
    });

});
