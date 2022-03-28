const { Router } = require("express");
const { Countries, Activities } = require("../db");



const routerActivities = Router();

routerActivities.get("/", (req, res, next) => {
    return Activities.findAll({})
    .then((activity) => {
        res.send(activity)
    })
    .catch((error) => {
        next(error);
    })
});


routerActivities.post("/", async (req, res, next) => {
    try {
      const {  countryID, name, difficulty, duration, season } = req.body;
      const newActivities = await Activities.create({
        name,
        difficulty,
        duration,
        season,
      });
      let country = await Countries.findByPk(countryID);
      await country.addActivities(newActivities.id);
      res.status(200).send(newActivities);
    } catch (error) {
      next(error);
    }
  });

module.exports = routerActivities;
