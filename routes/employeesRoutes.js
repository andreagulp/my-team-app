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

  app.get("/api/employees", (req, res, next) => {
    Employee.find({ _user: req.user.id })
      .populate("_user")
      .exec()
      .then(docs => {
        res.status(200).json(docs);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
};
