myApp = angular.module('myApp', ['ngRoute', 'templates']);

$(document).on('ready page:load', function(event) {
  angular.bootstrap(document, ['myApp'])
});

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/thisisme', {
        templateUrl: '/test_go.html',
        controller: 'RecipesController'
      }).
      when('/you', {
        templateUrl: 'test_template.html'
      })
  }]);


myApp.controller("RecipesController", ['$scope',
  function($scope){
    alert("Testing");
  }
]);
