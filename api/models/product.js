var mongoose = require('mongoose');

// how to write geojson: https://mongoosejs.com/docs/geojson.html
// I used pointSchema here
const productSchema = new mongoose.Schema(
    {
        "userId":String,
        "createdAt":String,
        "name":String,
        "description":String,
        "expirationDate":String,
        "address": String,
        "marker": {
            "lat": Number,
            "lng": Number
        },
        "category":String,
        "condition":String,
        "rating":Number
    }
);

var products = mongoose.model('products', productSchema);
