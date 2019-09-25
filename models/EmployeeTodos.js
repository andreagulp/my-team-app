const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeTodosSchema = new Schema({
  creationDate: Date,
  text: String,
  isPriority: Boolean,
  dueDate: Date
});

module.exports = employeeTodosSchema;
