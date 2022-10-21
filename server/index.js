const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// require("./routes/routes")(app);
const port = process.env.PORT || 4000;

const { sequelize } = require("./database/sequelize");
const { User } = require("./models/user");
const { Session } = require("./models/session");
const { Technique } = require("./models/technique");
User.hasMany(Session);
Session.belongsTo(User);
Session.hasMany(Technique);
Technique.belongsTo(Session);

// app.get("/", (req, res) => console.log("hit server"));
//routes due to routes file not working properly
const { signup, login } = require("./controller/signup");
const { addSession, getAllSessions } = require("./controller/session");
const { getAllTechniques, addTechnique } = require("./controller/technique");
const { Authenticater } = require("./middleware/auth");

//Signup/Login
app.post("/api/signup", signup);
app.post("/api/login", login);

//Session Routes
app.post("/session/:userId", Authenticater, addSession);
app.get("/session/:userId", Authenticater, getAllSessions);

//Technique Routes
app.get("/technique", Authenticater, getAllTechniques);
app.post("/technique/:sessionId", Authenticater, addTechnique);

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(port, () =>
      console.log(`DB synced and server running on port ${port}`)
    );
  })
  .catch((err) => console.error(err));
