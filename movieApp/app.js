(function() {

    var module = angular.module("movieApp", []);

    module.run(function($rootScope) {
        $rootScope.message = "Hello, World";
    });
   
}());

(function () {

    var module = angular.module("movieApp");

    var MovieListController = function($scope) {

        $scope.message = "Hello from Movie List Controller";

        $scope.movies = [
            { title: "Star Wars", length: 120 },
            { title: "Gravity", length: 90 },
            { title: "The Hobbit 2", length: 240 }
        ];

        $scope.makeLonger = function(movie) {
            movie.length += 1;
        };

        $scope.makeShorter = function (movie) {
            movie.length -= 1;
        };

    };

    module.controller("MovieListController", MovieListController);

}());