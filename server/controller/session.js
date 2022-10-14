const { Session } = require("../models/session");
const { colors } = require("colors");

module.exports = {
  addSession: async (req, res) => {
    const { date, time } = req.body;
    const { userId } = req.params;
    try {
      const addSession = await Session.create({
        date,
        time,
        userId,
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
