const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    street : String,
    city : String,
    zipcode : Number | null
})

const taskSchema = mongoose.Schema({
    title : String, 
    completed : Boolean
})

const postSchema = mongoose.Schema({
    title : String, 
    body : String
})

const userSchema = mongoose.Schema({
    id : Number,
    name : String,
    email : String,
    address : addressSchema,
    tasks : [taskSchema],
    posts : [postSchema],
    isSelected : Boolean
})

module.exports = mongoose.model('users',userSchema);