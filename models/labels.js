const mongoose = require('mongoose');
const passportmongoose = require('passport-local-mongoose');
const musicLabelsSchema = new mongoose.Schema({
    labelname: {
        type: String,
        trim: true,

    },
    labelowner: {
        type: String,
        trim: true,

    },

    labelhome: {
        type: String,
        trim: true,

    },
    labelicon: {
        type: String,
        trim: true,

    },


    labelsponsors: {
        type: String,
        trim: true,

    },


    dateofformation: {
        type: Date,
        trim: true,

    },
    numberofmembers: {
        type: String,
        trim: true,

    },
    artistsmanaged: {
        data: Buffer,
        type: String

    },
    profilepicture: {
        type: String


    }
});

musicLabelsSchema.plugin(passportmongoose, {
    username: 'email',})
module.exports = mongoose.model('labels', musicLabelsSchema)