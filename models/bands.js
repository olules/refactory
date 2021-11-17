const mongoose = require('mongoose');
const passportmongoose = require('passport-local-mongoose');
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
        type: Number,
        trim: true,

    },
    bandcrowns:{
        type: String,
        trim: true,

    },
    email:{
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
bandSchema.plugin(passportmongoose, {
    usernameField: 'email',})
module.exports =  mongoose.model('band', bandSchema)