/* Controller handling registration form */
(function(angular) {
    angular
        .module('app')
        .controller('registerController', function($scope) {

            // function to submit the form after all validation has occurred            
            $scope.submitForm = function(isValid) {
            
                // check to make sure the form is completely valid
                if (isValid) {
                    alert('Välkommen som ny kund i vår Gårdsbutik!');
                }

            };

});

}(this.angular));