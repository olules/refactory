const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
    bandname:{
        type: String,
        trim: true,

    },
    bandowner:{
        type: String,
        trim: true,

    },
    bandalbums:{
        type: String,
        trim: true,

    },
    bandcrowns:{
        type: String,
        trim: true,

    },
    bandemail:{
        type: String,
        trim: true,

    },
    bandhome:{
        type: String,
        trim: true,

    },
    bandicon:{
        type: String,
        trim: true,

    },
    bandid:{
        type: Date,
        trim: true,

    },
    bandslogan:{
        type: String,
        trim: true,

    },
    bandsongs:{
        type: String,
        trim: true,

    },
    bandsponsors:{
        type: Date,
        trim: true,

    },
    
    
    dateofformation:{
        type: Number,
        trim: true,

    },
    telephonecontact:{
        type: Number,
        trim: true,

    },
    otherbandowners:{
        type: String,
        trim: true,

    },
    bandnumberofmembers:{
        type: String,
        trim: true,

    },
    genre:{
        type: String,
        trim: true,

    },
    profilepicture:{
        data: Buffer,
        type: String

    }
   
    
    
    
    

    

})
module.exports =  mongoose.model('band', bandSchema)