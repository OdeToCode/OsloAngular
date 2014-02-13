(function () {

    var module = angular.module("dataServices", []);

    module.config(function ($provide) {
        $provide.provider("movieService", function () {

            var movieUrl = "movies.json";

            this.setMovieUrl = function (url) {
                movieUrl = url;
            };

            this.$get = function ($http) {
                var movies = [];

                var get = function () {

                    return $http.get(movieUrl)
                                .then(function (response) {
                                    movies = response.data;
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