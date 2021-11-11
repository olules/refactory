const mongoose = require('mongoose');
const passportmongoose = require('passport-local-mongoose');
const musicLabelsSchema = new mongoose.Schema({
    labelname: {
        type: String,
        trim: true,
        required: true

    },
    labelowner: {
        type: String,
        trim: true,
        required: true

    },

    labelhome: {
        type: String,
        trim: true,
        required: true

    },
    labelicon: {
        type: String,
        trim: true,
        required: true

    },


    labelsponsors: {
        type: String,
        trim: true,
        required: false

    },
    labelslogan:{
        type: String,
        trim: true,
        required: false
    },


    dateofformation: {
        type: Date,
        trim: true,
        required: true

    },
    numberofmembers: {
        type: Number,

    },
    artistsmanaged: {
        type: String,
        required: true

    },
    profilepicture: {
        type: String,
        required: true


    }
});

musicLabelsSchema.plugin(passportmongoose, {
    usernameField: 'email',})
module.exports = mongoose.model('labels', musicLabelsSchema)