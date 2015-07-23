myApp = angular.module('myApp',['ngRoute', 'templates'])

$(document).on('ready page:load', function(event) {
  angular.bootstrap(document, ['myApp'])
});

// myApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/', {
//         templateUrl: 'index.html',
//         controller: 'SomeController'
//       }).
//       when('/recipes/new', {
//         templateUrl: 'new.html',
//         controller: 'SomeOtherController'
//       })
//   }]);
