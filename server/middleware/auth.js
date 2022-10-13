require("dotenv").config();
const jweb = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = process.env;

module.exports = {
  isAuthenticated: (req, res, next) => {
    try {
      const headerToken = req.get("Authorization");

      if (!headerToken) {
        console.log("ERROR IN auth middleware");
        res.sendStatus(401);
      }

      let token;

      try {
        token = jweb.verify(headerToken, ACCESS_TOKEN_SECRET);
      } catch (err) {
        err.statusCode = 500;
        throw err;
      }

      if (!token) {
        const error = new Error("Not authenticated.");
        error.statusCode = 401;
        throw error;
      }
    } catch (err) {
      console.error("ERROR in authentication: ", err);
      res.status(500).send(err);
    }

    next();
  },
};
