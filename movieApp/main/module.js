(function () {
    "use strict";

    var module = angular.module("movieApp", ["dataServices"]);

    module.config(function($provide) {
        $provide.decorator("$exceptionHandler", function($delegate) {
            return function (ex, cause) {
                // my code here
                $delegate(ex, cause);
            };
        });
    });

    module.config(function ($provide) {
        $provide.decorator("$log", function ($delegate) {
            
            // ... forward calls to $delegate
            return $delegate;
        });
    });

    module.config(function (movieServiceProvider) {
        movieServiceProvider.setMovieUrl("dataServices/movies.json");
    });


    var app = angular.module('plunker', []);

    app.controller('MainCtrl', function ($scope, $http) {
        for (var i = 10; i--;) {
            $http.get('./style.css?i=' + i);
        }

    });

    app.config(function ($httpProvider) {
          $httpProvider.responseInterceptors.push(function ($rootScope) {
              $rootScope.ajaxLoadingCount = 0;
              return function (promise) {
                  $rootScope.ajaxLoadingCount++;                  
                  var hide = function (r) {
                      if ((--$rootScope.ajaxLoadingCount) === 0) {
                          console.log('hide the loading screen');
                      }
                      return r;
                  };
                  return promise.then(hide, hide);
              };
          });
      });

    module.run(function ($rootScope, $timeout, $log) {
        $rootScope.message = "Hello, World";
        $rootScope.greetingType = "warning";
        $rootScope.closeGreeting = function() {

            $log.info("You closed greeting!");
            $log.info(arguments);

        };


        $rootScope.reply2 = "Default reply";
    });

}());


