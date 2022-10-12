const path = require("path");

module.exports = {
  getLandingPage: (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  },
};
