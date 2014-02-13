(function() {

    var Movie = function() {
        this.length = 0;
        this.title = "";
    };
    Movie.maxLength = 245;

    Movie.prototype = {        
        makeLonger: function () {
            if (this.length < Movie.maxLength) {
                this.length += 1;
            }
        },
        makeShorter: function() {
            if (this.length > 0) {
                this.length -= 1;
            }
        }
    };

    var module = angular.module("movieModels");
    module.value("Movie", Movie);

}());