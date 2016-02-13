angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  
  $scope.addLink = function() {
    console.log($scope.link);
    Links.addLink($scope.link)
    .then(function(res) {
      
    });
  };
});
