angular.module('todoApp', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
   controller: 'TodoController'
 }).when('/:status', {
   controller: 'TodoController',
  }).otherwise({
    redirectTo: '/'
  });
}]);
