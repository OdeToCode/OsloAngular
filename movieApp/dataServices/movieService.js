(function () {
    'use strict';
    var module = angular.module("dataServices", ["movieModels"]);

    var movieUrl = "movies.json";

    var movieService = function($http, $q, modelTransformer, Movie) {
        var movies = [];

        var getByTitle = function(title) {
            var deferred = $q.defer();
            var result = null;

            for (var i = 0; i < movies.length; i++) {
                if (movies[i].title == title) {
                    result = movies[i];
                    break;
                }
            }
            if (result) {
                deferred.resolve(result);
            } else {
                deferred.reject("Could not find that movie!");
            }


            return deferred.promise;
        };

        var get = function() {

            return $http.get(movieUrl)
                .then(function(response) {
                    movies = modelTransformer.transform(response.data, Movie);
                    return movies;
                });
        };

        return {
            getAll: get,
            getByTitle: getByTitle
        };
    };

    module.config(function($provide) {
        $provide.provider("movieService", function() {

            this.setMovieUrl = function(url) {
                movieUrl = url;
            };

            this.$get = movieService;
        });
    });

}());