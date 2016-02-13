angular.module('shortly.links', [])

.controller('LinksController', function LinksController($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(res) {
      $scope.data.links = res.data;
    });
  };

  $scope.getLinks();
});
