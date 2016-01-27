/* Creates a footer element for use in the markup. The element represents the footer part of the 
former index.html page allowing for repeated use without repeating the entirety of the markup */
(function(angular) {
    angular
        .module('app')
        .directive('footer', function() {
           return {
              restrict: 'E',
              templateUrl: '/shared/footer/footer.html'
            };
           });
}(this.angular))