/* Top-level application module - ngRoute (provides routing and deeplinking 
services and directives for angular apps) and validation.match (provides 
funtionality for confirming form input values) are added as dependencies */
(function(angular) {
    angular
        .module('app', ['ngRoute', 'validation.match'])
    
    
}(this.angular))