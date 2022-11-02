const { Technique } = require("../models/technique");
const colors = require("colors");

module.exports = {
  getAllTechniques: async (req, res) => {
    try {
      const technique = await Technique.findAll();
      res.status(200).send(technique);
    } catch (err) {
      console.log(err);
    }
  },
  addTechnique: async (req, res) => {
    console.log(req.body);
    const { name, category } = req.body;
    try {
      const addTechnique = await Technique.create({
        name,
        category,
      });
      res.status(200).send(addTechnique);
    } catch (err) {
      console.log(err);
    }
  },
};
