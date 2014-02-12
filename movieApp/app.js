(function () {
    "use strict";

    var module = angular.module("movieApp", []);

    module.run(function ($rootScope) {
        $rootScope.message = "Hello, World";
    });

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

(function() {

    var module = angular.module("movieApp");

    var SimpleController1 = function($scope) {

        var user = {
            
        };

        $scope.user = user;

    };

    var SimpleController2 = function ($scope) {

    };


    module.controller("SimpleController1", SimpleController1);
    module.controller("SimpleController2", SimpleController2);

}());