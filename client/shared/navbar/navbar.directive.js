/* Creates a navbar element for use in the markup. The element represents the navbar part of the 
former index.html page allowing for repeated use without repeating the entirety of the markup */
(function(angular) {
    angular
        .module('app')
        .directive('navbar', function() {
           return {
              restrict: 'E',
              templateUrl: '/shared/navbar/navbar.html'
            };
           });
}(this.angular))