const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeNotesSchema = new Schema({
  creationDate: Date,
  text: String,
  isStarred: Boolean
});

module.exports = employeeNotesSchema;
