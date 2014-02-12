(function() {

    var module = angular.module("movieApp", []);

    module.run(function($rootScope) {
        $rootScope.message = "Hello, World";
    });


}());