(function () {
    "use strict";

    var module = angular.module("movieApp", ["dataServices"]);

    module.config(function($provide) {
        $provide.decorator("$exceptionHandler", function($delegate) {
            return function(ex, cause) {
                $delegate(ex, cause);
            };
        });
    });

    module.config(function ($provide) {
        $provide.decorator("$log", function ($delegate) {
            
            // ...
            return $delegate;
        });
    });

    module.config(function (movieServiceProvider) {
        movieServiceProvider.setMovieUrl("dataServices/movies.json");
    });


    module.run(function ($rootScope, $timeout, $log) {
        $rootScope.message = "Hello, World";
    });

}());


