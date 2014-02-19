(function() {
    "use strict";

    var module = angular.module("movieApp", ["ngRoute", "ngAnimate",
        "dataServices"
    ]);


    module.config(function($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "main/movieList.html"
            }).
        when("/detail/:title", {
            templateUrl: "main/movieDetail.html",
            controller: "MovieDetailsController"
        }).
        otherwise({
            redirectTo: "/"
        });

    });




    module.config(function($provide) {
        $provide.decorator("$exceptionHandler", function($delegate) {
            return function(ex, cause) {
                // my code here
                $delegate(ex, cause);
            };
        });
    });

    module.config(function($provide) {
        $provide.decorator("$log", function($delegate) {

            // ... forward calls to $delegate
            return $delegate;
        });
    });

    module.config(function(movieServiceProvider) {
        movieServiceProvider.setMovieUrl("dataServices/movies.json");
    });


    module.config(function($httpProvider) {
        $httpProvider.responseInterceptors.push(function($rootScope) {
            $rootScope.ajaxLoadingCount = 0;
            return function(promise) {
                $rootScope.ajaxLoadingCount += 1;
                var hide = function(response) {
                    $rootScope.ajaxLoadingCount -= 1;
                    return response;
                };
                return promise.then(hide, hide);
            };
        });
    });

    module.run(function($rootScope, $timeout, $log) {
        $rootScope.message = "Hello, World";
        $rootScope.greetingType = "warning";
        $rootScope.closeGreeting = function() {

            $log.info("You closed greeting!");
            $log.info(arguments);

        };


        $rootScope.reply2 = "Default reply";
    });

}());