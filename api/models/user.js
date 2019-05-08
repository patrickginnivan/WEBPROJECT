var mongoose = require('mongoose');
var userSchema = mongoose.Schema(
    {
    	"createdAt":String,
    	"userId":String,
        "name":String,
        "email":String,
        "password":String,
        "phoneNumber":String,
        "userRating":Number,
        "streetAddress": {
        	"text":String,
        	"components": {
        		"street":String,
        		"number":String,
        		"city":String,
        		"area":String,
        		"country":String,
        		"postalCode":String,
        		"building":String
        	}
        }
    }
);

var users = mongoose.model('users', userSchema);
