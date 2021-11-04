const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        trim: true,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
         
    },
    message: {
        type: String,
        required: true,   
        
    },
});

module.exports = mongoose.model('contact', contactSchema);