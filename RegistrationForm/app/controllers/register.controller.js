const Register = require("../models/register.model.js");

// Create and Save a new Register
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Register
  const register = new Register({
    name: req.body.name,
    mobile: req.body.mobile,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    address: req.body.address
  });

  // Save Register in the database
  Register.create(register, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Register."
      });
    else res.send(data);
  });
};

// Find a single Register with a registerId
exports.findOne = (req, res) => {
  Register.findById(req.params.username,req.params.password, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Register with username ${req.params.username}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Register with username " + req.params.username
        });
      }
    } else res.send(data);
  });
};