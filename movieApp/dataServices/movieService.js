(function () {

    var module = angular.module("dataServices", ["movieModels"]);

    module.config(function ($provide) {
        $provide.provider("movieService", function () {

            var movieUrl = "movies.json";

            this.setMovieUrl = function (url) {
                movieUrl = url;
            };

            this.$get = function ($http, Movie) {
                var movies = [];

                var get = function () {

                    return $http.get(movieUrl)
                                .then(function (response) {
                                    movies = [];
                                    var moviesJson = response.data;
                                    angular.forEach(moviesJson, function(json) {
                                        var movie = new Movie();
                                        angular.extend(movie, json);
                                        movies.push(movie);
                                    });
                                    return movies;
                                });
                };

                return {
                    getAll: get
                };
            };
        });
    });

}());