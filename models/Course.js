const mongoose = require('mongoose')


const courseSchema = new mongoose.Schema({
    instructor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    students: [{
        type: mongoose.SchemaType.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true })




module.exports = mongoose.model('Course', courseSchema);