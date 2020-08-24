const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    brand: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    price: {
        type: Number,
        required: true,
        min: 7000,
        max: 100000
    },
    speed: {
        type: Number,
        required: true,
        min: 3,
        max: 100
    }    
});

const Car =  mongoose.model('cars', carSchema);

module.exports = Car;