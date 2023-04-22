const mongoose = require('mongoose')
const { Schema } = mongoose;

const todoSchema = new Schema({
  text: String, // String is shorthand for {type: String}

  
});


module.exports = mongoose.model('ToDO', todoSchema)