(function() {

    var module = angular.module("movieApp");

    module.directive("otcGreeting", function ($log) {        
        $log.info("Creating otcGreeting DDO");
        return {
            restrict: "EA",
            templateUrl: "main/greetingTemplate.html",
            transclude: true,
            replace: true,
            scope: {
                response: "=?reply",
                type: "@",
                close: "&"
            },
            link: function(scope, element,                
                            attrbiutes, controllers,
                            transcludeFn) {

                //element.bind("click", function() {
                //    element.remove();
                //    scope.close();
                //});

                var classes = {
                    "warning": "greetingWarning",
                    "success": "greetingSuccess"
                };
                element.addClass(classes[scope.type]);

            }
        };
    });

})();