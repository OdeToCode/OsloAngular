(function() {

    var Movie = function() {
        this.length = 0;
        this.title = "";
        this.rating = 1;
    };

    Movie.minLength = 0;
    Movie.maxLength = 300;
    Movie.minRating = 1;
    Movie.maxRating = 5;

    Movie.prototype = {

        setRating: function(newRating) {
            if (newRating <= Movie.maxRating &&
                newRating >= Movie.minRating) {
                this.rating = newRating;
            } else {
                throw "Invalid rating value: " + newRating;
            }
        },

        makeLonger: function() {
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