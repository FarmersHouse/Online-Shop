/* Creates a menu element for use in the markup. The element represents the menu part of the 
former index.html page allowing for repeated use without repeating the entirety of the markup */
(function(angular) {
    angular
        .module('app')
        .directive('menu', function() {
           return {
              restrict: 'E',
              templateUrl: '/shared/menu/menu.html'
            };
           });
}(this.angular))