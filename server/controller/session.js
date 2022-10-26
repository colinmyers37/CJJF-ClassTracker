const { Session } = require("../models/session");
const { colors } = require("colors");
const { json } = require("sequelize");

module.exports = {
  addSession: async (req, res) => {
    const { date, time, lesson, userId } = req.body;

    try {
      console.log({
        date,
        userId,
        lesson: JSON.stringify(lesson),
      });
      const addSession = await Session.create({
        date,
        userId,
        lesson: JSON.stringify(lesson),
      });
      res.status(200).send(addSession);
    } catch (err) {
      console.log(err);
    }
  },
  getAllSessions: async (req, res) => {
    const { userId } = req.params;
    try {
      const session = await Session.findAll({
        where: {
          userId: +userId,
        },
      });
      res.status(200).send(session);
    } catch (err) {
      console.log(err);
    }
  },
};
