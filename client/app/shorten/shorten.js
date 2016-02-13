angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  
  $scope.addLink = function() {
    Links.addLink()
    .then(function(res) {
      console.log(res);
      console.log('Hello Alex---------');
    });
  };
});
