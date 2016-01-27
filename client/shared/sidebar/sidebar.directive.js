/* Creates a sidebar element for use in the markup. The element represents the sidebar part of
the former index.html page allowing for repeated use without repeating the entirety of the markup */
(function(angular) {
    angular
        .module('app')
        .directive('sidebar', function() {
           return {
              restrict: 'E',
              templateUrl: '/shared/sidebar/sidebar.html'
            };
           });
}(this.angular))