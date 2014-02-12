(function () {
    "use strict";

    var module = angular.module("movieApp", []);

    module.run(function ($rootScope, $timeout) {

        $rootScope.editFormUrl = "editMovie.html";

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

    var allJson = function() {
        return function(o) {
            return JSON.stringify(o, null, 2);
        };
    };
    module.filter("alljson", allJson);

    module.controller("MovieEditController", MovieEditController);

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

        $scope.message = "Hello from Movie List Controller";

        movieService
             .getAll()
              .then(showMovies, onError);

        $scope.makeLonger = function (movie) {

            movie.length += 1;
        };

        $scope.makeShorter = function (movie) {
            movie.length -= 1;
        };

    };

    module.controller("MovieListController", MovieListController);

}());

(function () {

    var module = angular.module("movieApp");

    var movieService = function ($http, $q, $timeout) {
        
        var get = function () {                       
            return $http.get("movies.json");
        };

        return {            
          getAll: get  
        };

    };
    movieService.$inject = ["$http", "$q", "$timeout"];

    module.factory("movieService", movieService);

}());
