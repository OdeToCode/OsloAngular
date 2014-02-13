(function() {

    var module = angular.module("movieApp");

    module.directive("rating", function($compile) {
        return {            
            restrict: "EA",
            replace: true,
            scope: {
                value: "="
            },
            link: function(scope, element) {
                element.on("click", function() {
                    scope.$apply(function() {
                        scope.value += 1;
                        if (scope.value > 5) {
                            scope.value = 1;
                        }
                    });
                });

                scope.foo = function() {
                    alert("test");
                };

                scope.$watch("value", function(newValue) {
                    element.empty();
                    for (var i = 0; i < newValue; i++) {
                        var star = angular.element("<span ng-click='foo()' class='glyphicon glyphicon-star'></span>");
                        //$compile(star)(scope, function(cloned) {
                        //    element.append(cloned);
                        //});
                        element.append(star);
                    }
                });
            }                        
        };
    });


}());