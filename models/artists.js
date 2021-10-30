const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,

    },
    lastname: {
        type: String,
        trim: true,

    },
    stagename: {
        type: String,
        trim: true,

    },
    artistid: {
        type: String,
        trim: true,

    },
    telephonecontact: {
        type: String,
        trim: true,

    },
    twitterhandle: {
        type: String,
        trim: true,

    },
    artistemail: {
        type: String,
        trim: true,

    },
    artistdob: {
        type: Date,
        trim: true,

    },
    districtbasedin: {
        type: String,
        trim: true,

    },
    nationalidnumber: {
        type: String,
        trim: true,

    },
    dateofstart: {
        type: Date,
        trim: true,

    },
    location: {
        type: String,
        trim: true,

    },

    numberofalbums: {
        type: Number,
        trim: true,

    },
    numberofsongs: {
        type: Number,
        trim: true,

    },
    genre: {
        type: String,
        trim: true,

    },
    uploadpicture: {
        type: String

    }
})
module.exports = mongoose.model('Artist', artistSchema)