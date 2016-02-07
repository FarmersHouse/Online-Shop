var mongoose = require('mongoose');

var schema = {
    
    id: Number,
    title: String, 
    imgUrl: String, 
    imgAlt: String, 
    weight: String, 
    price: String, 
    comparativeprice: Number, 
    likes: Number 
    
}

var Products = mongoose.model("Products", schema);

module.exports = Products;