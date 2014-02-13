(function () {

    var module = angular.module("dataServices", ["movieModels"]);    

    module.config(function ($provide) {
        $provide.provider("movieService", function () {

            var movieUrl = "movies.json";

            this.setMovieUrl = function (url) {
                movieUrl = url;
            };

            this.$get = function ($http, $q, Movie) {
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
                this.$get.$inject = ["$http", "Movie"];

                return {
                    getAll: get,
                    getByTitle: getByTitle
                };
            };
        });
    });

}());