(function() {

    var module = angular.module("movieApp");

    module.directive("rating", function() {
        return {            
            restrict: "EA",
            replace: true,
            scope: {
                value: "="
            },
            link: function(scope, element) {
                element.on("click", function() {
                    
                        scope.value += 1;
                        if (scope.value > 5) {
                            scope.value = 1;
                        }
                
               
                });
                scope.$watch("value", function(newValue) {
                    element.empty();
                    for (var i = 0; i < newValue; i++) {
                        element.append("<span class='glyphicon glyphicon-star'></span>");
                    }
                });
            }                        
        };
    });


}());