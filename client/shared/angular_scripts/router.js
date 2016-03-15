/* Router responsible for presenting the page-specific content in the ng-view on the shared index page */
(function(angular) {
angular
    .module('app')
    .config(config);
    
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl: '/specific/home/index.html'
            })
            .when('/products', {
                templateUrl: '/specific/products/products.html',
            })
            .when('/philosophy', {
                templateUrl: '/specific/philosophy/philosophy.html'
            })
            .when('/about', {
                templateUrl: '/specific/about/about.html'
            })
            .when('/contact', {
                templateUrl: '/specific/contact/contact.html'
            })
            .when('/register_html5', {
                templateUrl: '/specific/register/register_html5.html'
            })
            .when('/register_js', {
                templateUrl: '/specific/register/register_js.html'
            })
            .when('/register_jquery', {
                templateUrl: '/specific/register/register_jquery.html'
            })
            .when('/register_angularjs', {
                templateUrl: '/specific/register/register_angularjs.html'
            })
            .when('/login', {
                templateUrl: '/specific/login/login.html'
            })
            
            .otherwise({redirectTo: '/home'});
    }
}(this.angular));