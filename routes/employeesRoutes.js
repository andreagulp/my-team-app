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

  app.get("/api/employees/:employeeId", (req, res, next) => {
    const id = req.params.employeeId;
    Employee.findById(id)
      .populate("_user")
      .exec()
      .then(doc => {
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  });
};
