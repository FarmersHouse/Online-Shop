(function(angular) {
  
    angular
        .module('app')
        .factory('productService', productService);
    
    productService.$inject = ['$http'];
    
    function productService($http){

        var service = {
            getProducts: getProducts,
            updateProduct: updateProduct
        }
        return service;
        
        function getProducts(){
            return $http.get("/dbapi/products")
				.then(function(response){
					return response.data;
				})
        }
        
        function updateProduct(product){
            return $http({
		        method: "POST",
		        url: "/dbapi/updateproduct", 
		        data: product
		    })
		    .then(function(){
		        console.log("Product updated.");      
		    }); 
        }

    }
})(this.angular);