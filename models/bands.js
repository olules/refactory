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
        type: String,
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
        type: String,
        trim: true,

    },
    
    
    dateofformation:{
        type: Date,
        trim: true,

    },
    telephonecontact:{
        type: String,
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
    bandicon:{
        type: String

    },
    profilepicture:{
        type: String

    }
})
module.exports =  mongoose.model('band', bandSchema)