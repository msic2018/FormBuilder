'use strict';

var app = angular.module('app', ['ngRoute', 'angular-storage', 'ctlMain', 'myServices']);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $routeProvider.when('/', {
        controller: 'mainCtrl',
        templateUrl: '/formBuilder.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

}]);