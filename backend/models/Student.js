const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  surname: {
    type: String
  },
  firstname: {
    type: String
  },
  middlename: {
    type: String
  },
  email: {
    type: String
  },
  number: {
    type: Number
  },
  course: {
    type: String
  },
  year: {
    type: Number
  },
  gender: {
    type: String
  },
}, {
  collection: 'students'
})
module.exports = mongoose.model('Student', studentSchema)