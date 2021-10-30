const mongoose = require('mongoose');

const musicLabelsSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,

    },
    owner:{
        type: String,
        trim: true,

    },
    
    
    home:{
        type: String,
        trim: true,

    },
    icon:{
        type: String,
        trim: true,

    },
    
    slogan:{
        type: String,
        trim: true,

    },
    
    sponsors:{
        type: Array,
        trim: true,

    },
   
    
    dateofformation:{
        type: Number,
        trim: true,

    },
   
   
    numberofmembers:{
        type: String,
        trim: true,

    },
    artistsmanaged:{
        data: Buffer,
        type: String

    },
   
    
    
    
    

    

})
module.exports =  mongoose.model('labels', musicLabelsSchema)