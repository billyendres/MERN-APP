const mongoose = require('mongoose')
// const Schema = mongoose.Schema 
//same thing bellow but destructured
const { Schema } = mongoose
//freely add and remove properties
const userSchema = new Schema({
    googleID: String
})
//tells mongoose to create a new collection called users
mongoose.model('users', userSchema)