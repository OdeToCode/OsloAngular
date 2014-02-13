(function () {

    var module = angular.module("movieApp");

    var MovieEditController = function ($scope) {

        $scope.isValid = function () {
            return $scope.movieEditForm.$valid;
        };

    };

    module.controller("MovieEditController", MovieEditController);

}());
