(function () {

    var module = angular.module("movieApp");

    var MovieListController = function ($scope, movieService, $timeout) {

        var onError = function (error) {
            $scope.error = error;
        };

        var showMovies = function (movies) {
            $scope.movies = movies;
        };

        $scope.editformurl = "main/editMovie.html";
        $scope.message = "Hello from Movie List Controller";

        movieService
             .getAll()
              .then(showMovies, onError);

        $scope.isEditMode = function () {
            return editableMovie;
        };

        $scope.editMovie = function (movie) {
            $scope.editableCopy = angular.copy(movie);
            $scope.editableMovie = movie;            
        };

        $scope.makeLonger = function (movie) {
            movie.length += 1;
        };

        $scope.makeShorter = function (movie) {
            movie.length -= 1;
        };

        $scope.saveMovie = function (movie) {
            // call movie service and http.put the movie
            $scope.editableMovie = null;
        };
        $scope.cancelEdit = function (movie) {
            if ($scope.editableCopy) {
                angular.extend(movie, $scope.editableCopy);
            }
        };
    };

    module.controller("MovieListController", MovieListController);

}());
