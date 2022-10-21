require("dotenv").config();
const bcrypt = require("bcrypt");
const colors = require("colors");
const jweb = require("jsonwebtoken");

const { User } = require("../models/user");
const { ACCESS_TOKEN_SECRET } = process.env;

const makeToken = (username, id) => {
  return jweb.sign({ username, id }, ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
};

module.exports = {
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (username === "" || password === "") {
        throw "You must provide a username and password";
      }

      const existingUser = await User.findOne({
        where: { username },
      });

      if (existingUser) {
        throw "User already exists";
      } else {
        const salt = bcrypt.genSaltSync(8);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
          username,
          hashed_pass: hash,
        });

        const token = makeToken(
          newUser.dataValues.username,
          newUser.dataValues.id
        );

        const expirationTime = Date.now() + 1000 * 60 * 60;

        res.status(200).send({
          username: newUser.dataValues.username,
          userId: newUser.dataValues.id,
          token,
          expirationTime,
        });
      }
    } catch (err) {
      console.error("Error in register: ", err);
      res.status(400).send(err);
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const knownUser = await User.findOne({
        where: { username },
      });

      if (knownUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          knownUser.hashed_pass
        );

        if (isAuthenticated) {
          const token = makeToken(
            knownUser.dataValues.username,
            knownUser.dataValues.id
          );

          const expirationTime = Date.now() + 1000 * 60 * 60;

          res.status(200).send({
            username: knownUser.dataValues.username,
            userId: knownUser.dataValues.id,
            token,
            expirationTime,
          });
        } else throw "Cannot log in! Please try again.";
      } else throw "Cannot log in. User not found.";
    } catch (err) {
      console.error("ERROR in login", err);
      res.status(400).send(err);
    }
  },
};
