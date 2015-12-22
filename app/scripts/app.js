'use strict';

/**
 * @ngdoc overview
 * @name weatherApp
 * @description
 * # weatherApp
 *
 * Main module of the application.
 */
export default angular
  .module('weatherApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller:  'ForecastCtrl',
        controllerAs: 'fcast'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
