(function() {

    var module = angular.module("movieApp");

    var allJson = function () {
        return function (o) {
            return JSON.stringify(o, null, 2);
        };
    };
    module.filter("alljson", allJson);
}());
