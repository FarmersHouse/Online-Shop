/* Creates a product-info element for use in the markup. The element represents the product-info part of the 
former products.html page allowing for repeated use without repeating the entirety of the markup. The value
attribute is configured to hold the current (ng-repeat loops through the entries) entry of the products array. */
(function(angular) {
    angular
        .module('app')
        .directive('productInfo', function() {
           return {
              restrict: 'E',
              scope: {
              value: '='
              },
               templateUrl: '/specific/products/productinfo.html'
            };
           });
}(this.angular))