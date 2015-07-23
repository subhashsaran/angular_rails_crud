myApp = angular.module('myApp',[])

$(document).on('ready page:load', function(event) {
  angular.bootstrap(document, ['myApp'])
});
