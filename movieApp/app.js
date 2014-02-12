(function () {
    "use strict";

    var module = angular.module("movieApp", []);

    module.run(function ($rootScope, $timeout) {        
        $rootScope.message = "Hello, World";       
    });

}());


(function() {
    
    var module = angular.module("movieApp");

    var MovieEditController = function($scope) {

        $scope.isValid = function() {
            return $scope.movieEditForm.$valid;
        };

    };

    module.controller("MovieEditController", MovieEditController);
    
    var allJson = function() {
        return function(o) {
            return JSON.stringify(o, null, 2);
        };
    };
    module.filter("alljson", allJson);
    
}());

(function () {

    var module = angular.module("movieApp");

    var MovieListController = function ($scope, movieService) {

        var onError = function(error) {
            $scope.error = error;
        };

        var showMovies = function(response) {
            $scope.movies = response.data;
        };

        $scope.editformurl = "editMovie.html";
        $scope.message = "Hello from Movie List Controller";

        movieService
             .getAll()
              .then(showMovies, onError);

        $scope.isEditMode = function () {           
            return editableMovie;
        };

        $scope.editMovie = function(movie) {
            $scope.editableCopy = angular.copy(movie);
            $scope.editableMovie = movie;
        };

        $scope.makeLonger = function (movie) {
            movie.length += 1;
        };

        $scope.makeShorter = function (movie) {
            movie.length -= 1;
        };

        $scope.saveMovie = function(movie){
            // call movie service and http.put the movie
            $scope.editableMovie = null;
        };
        $scope.cancelEdit = function(movie){
            if($scope.editableCopy){
                angular.extend(movie, $scope.editableCopy);
            }
        };
    };

    module.controller("MovieListController", MovieListController);

}());

(function () {

    var module = angular.module("movieApp");

    var movieService = function ($http) {
        
        var get = function () {                       
            return $http.get("movies.json");
        };

        return {            
          getAll: get  
        };

    };

    module.factory("movieService", movieService);

}());
