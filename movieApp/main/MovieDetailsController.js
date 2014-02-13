(function() {

    var module = angular.module("movieApp");

    var MovieDetailsController = function($scope, $routeParams, movieService) {

        var title = $routeParams.title;
        movieService
            .getByTitle(title)
            .then(function(movie) {
                $scope.movie = movie;
            });        
    };

    module.controller("MovieDetailsController", MovieDetailsController);

}());