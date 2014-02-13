(function() {

    var module = angular.module("movieApp");

    var MovieDetailsController = function($scope, $routeParams, movieService) {

        var title = $routeParams.title;
        movieService
            .getByTitle(title)
            .then(function(movie) {
                $scope.movie = movie;
            });
        
        $scope.showMore = true;
        $scope.toggleShow = function () {
            $scope.showMore = !$scope.showMore;
        };
    };

    

    module.controller("MovieDetailsController", MovieDetailsController);

}());