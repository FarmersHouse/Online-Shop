/* Controller storing product information and product like function logic */
(function(angular) {
    angular
        .module('app')
        .controller('productController', productController); 
        
        	function productController($scope, productService){
        		
        		var modelProducts = function(data){
        			$scope.products = data;
        		};
        
        		
        		$scope.updateProduct = function(product) {
        		    productService.updateProduct();
        		}
        		
        		$scope.incrementLikes = function(product) {
        		    product.likes++;
        		    var newValue = {
    		            _id: product._id,
    		            likes: product.likes
        		    };
        		    productService.updateProduct(newValue)
        		        /*.then(function(){console.log("Controller sent update value to service.")})*/
        		    ;
        		};
        		
        		productService.getProducts()
        			.then(modelProducts);

        	}
            
}(this.angular));