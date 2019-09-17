const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "users" },
  name: String,
  lastName: String,
  iconsUrl: String,
  jobRole: String,
  creationDate: Date,
  isFavourite: Boolean
});

mongoose.model("employee", employeeSchema);
