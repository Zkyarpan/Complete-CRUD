const UserDB = require("../model/model");

// create and save new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ msg: "Content can not be empty.." }); // When you make a post request  using a form all the data of the form is stored in the body of the request object.
    return;
  }
  // new user
  const user = UserDB({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  // save user in the database
  user
    .save(user)
    .then((data) => {
      // res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

// retrive and return all users/retrive and return a single user
exports.find = (req, res) => {
  UserDB.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
};

// retrive and return all users/retrive and return a single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    UserDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Not found user with id ${id}` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: `Error retriving user with id ${id}.` });
      });
  } else {
    UserDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          msg: err.msg || "Error occured while retriving user information.",
        });
      });
  }
};

// Update a new identified user by user id
exports.update = (req, res) => {
  if (!req.body) {
    // if req.body is not available
    return res.status(400).send({ msg: "Data to update can not be empty." });
  }
  const id = req.params.id;
  UserDB.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          msg: `Cannot Update user with ${id}. Maybe user not found.`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ msg: "Error updata user information .." });
    });
};

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id; //By assigning req.params.id to the id variable using const id = req.params.id;, the code is capturing the value of the id parameter and storing it in a local variable named id
  UserDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ msg: `Cannot Delete woth with id${id}. Maybe id is wrong.` });
      } else {
        res.send({
          msg: `With the following ID (${id}), the user has been successfully deleted.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        msg: `Could not delete user with _id:${id}.`,
      });
    });
};
