/* Controller storing product information and product like function logic */
(function(angular) {
    angular
        .module('app')
        .controller('productController', function($scope) {
            var honey = { 
                title: 'Honung', 
                imgUrl: '/content/image/honey_jar_small.png', 
                imgAlt: 'Honungsburk',  
                weight: '700g', 
                price: '59.90kr/st', 
                comparativeprice: '85', 
                likes: 0 }
            var apple = { 
                title: 'Äpple', 
                imgUrl: '/content/image/apple_small.png', 
                imgAlt: 'Äpple',  
                weight: '1kg', 
                price: '25 kr/kg', 
                comparativeprice: '25', 
                likes: 0 }
            var yellowonion = { 
                title: 'Lök', 
                imgUrl: '/content/image/yellow_onion_small.png', 
                imgAlt: 'Lök',  
                weight: '1kg', 
                price: '10 kr/kg', 
                comparativeprice: '10', 
                likes: 0 }
            var redonion = { 
                title: 'Rödlök', 
                imgUrl: '/content/image/red_onion_small.png', 
                imgAlt: 'Rödlök',  
                weight: '1kg', 
                price: '15 kr/kg', 
                comparativeprice: '15', 
                likes: 0 }
            var hops = { 
                title: 'Humle', 
                imgUrl: '/content/image/hops_small.png', 
                imgAlt: 'Humle',  
                weight: '100g', 
                price: '59 kr', 
                comparativeprice: '590', 
                likes: 0 }
            var tomato = { 
                title: 'Tomat', 
                imgUrl: '/content/image/tomato_small.png', 
                imgAlt: 'Tomat',  
                weight: '1kg', 
                price: '50 kr/kg', 
                comparativeprice: '50', 
                likes: 0 }
            var meat = { 
                title: 'Kaninfilé', 
                imgUrl: '/content/image/meat_small.png', 
                imgAlt: 'Kaninfilé',  
                weight: '1kg', 
                price: '200 kr/kg', 
                comparativeprice: '200', 
                likes: 0 }
            var carrot = { 
                title: 'Morot', 
                imgUrl: '/content/image/carrots_small.png', 
                imgAlt: 'Morot',  
                weight: '1kg', 
                price: '15 kr/kg', 
                comparativeprice: '15', 
                likes: 0 }
            
            var products = [honey, apple, yellowonion, redonion, hops, tomato, meat, carrot]
            
            
            $scope.products = products;
            
            $scope.incrementLikes = function(product) {
                product.likes++;
            }
            
            
        });
                    
}(this.angular));