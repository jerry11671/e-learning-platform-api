const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name.']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email',]
    },
    password: {
        type: String,
        required: [true, 'Please provide password.']
    },
    role: {
        type: String,
        enum: ['admin', 'instructor', 'student'],
    }
}, { timesatamps: true });





module.exports = mongoose.model('User', userSchema);