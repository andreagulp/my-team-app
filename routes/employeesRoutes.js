const mongoose = require("mongoose");

const Employee = mongoose.model("employee");

module.exports = app => {
  app.post("/api/new_employee", (req, res) => {
    const employee = new Employee({
      ...req.body,
      _user: req.user.id,
      creationDate: Date.now()
    });
    employee.save();
    res.send("post request done");
  });
};
