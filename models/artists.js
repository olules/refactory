const mongoose = require('mongoose');
const passportmongoose = require('passport-local-mongoose');

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
    email: {
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
        type: String,

    },

})
artistSchema.plugin(passportmongoose, {
    usernameField: 'email',

});
module.exports = mongoose.model('Artist', artistSchema)