(function () {

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
            
            var deferred = $q.defer();

            var movies =  [
                { "title": "Star Wars 4", "length": 120 },
                { "title": "Gravity", "length": 90 },
                { "title": "The Hobbit 2", "length": 240 }
            ];

            $timeout(function() {
                deferred.resolve(movies);
            }, 3000);       
           
            return deferred.promise;

            //return $http.get("movies.json");
        };

        return {            
          getAll: get  
        };

    };

    module.factory("movieService", movieService);

}());