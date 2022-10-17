const { Technique } = require("../models/technique");

module.exports = {
  getAllTechniques: async (req, res) => {
    const { sessionId } = req.params;
    try {
      const technique = await Technique.findAll({
        where: {
          sessionId: +sessionId,
        },
      });
      res.status(200).send(technique);
    } catch (err) {
      console.log(err);
    }
  },
  addTechnique: async (req, res) => {
    const { date, time } = req.body;
    const { sessionId } = req.params;
    try {
      const addTechnique = await Technique.create({
        date,
        time,
        sessionId,
      });
      res.status(200).send(addTechnique);
    } catch (err) {
      console.log(err);
    }
  },
};