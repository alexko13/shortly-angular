angular.module('shortly.links', [])

.controller('LinksController', function LinksController($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(res) {
      $scope.data.links = res.data;
      // $scope.data.links = [];
      // $scope.data.links[0] = 'Hello World';
      // $scope.data.links[1] = '!!!!!!!';
    });
  };

  $scope.getLinks();
});
