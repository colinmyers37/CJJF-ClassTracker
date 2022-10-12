const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

const { sequelize } = require("./database/sequelize");
const { User } = require("./models/user");
const { Session } = require("./models/session");
const { Technique } = require("./models/technique");
User.hasMany(Session);
Session.belongsTo(User);
Technique.hasMany(Session);
Session.belongsTo(Technique);
// require("./routes/routes")(app);
// app.get("/", (req, res) => console.log("hit server"));

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(port, () =>
      console.log(`DB synced and server running on port ${port}`)
    );
  })
  .catch((err) => console.error(err));
