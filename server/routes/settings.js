const Settings = require("../models").Settings;

module.exports = function(router) {
  router.get("/settings", (req, res) => {
    Settings.findOrCreate({where: {settingsId: 1}})
      .then(settings => {
        res.json(settings);
      })
      .catch(err => res.json(err));
  });

  // router.get("/physicians/:id", (req, res) => {
  //   Physician.findAll({
  //     where: { id: req.params.id }
  //   })
  //     .then(physician => {
  //       res.json(physician[0]);
  //     })
  //     .catch(err => res.json(err));
  // });
  //
  // router.post("/physicians", (req, res) => {
  //   Physician.create({
  //     name: req.body.name
  //   })
  //     .then(res => {
  //       res.json(res);
  //     })
  //     .catch(err => res.json(err));
  // });
  //
  // router.put("/physicians/:id", (req, res) => {
  //   Physician.update({ name: req.body.name }, { where: { id: req.params.id } })
  //     .then(updatedPhysician => {
  //       res.json(updatedPhysician);
  //     })
  //     .catch(err => res.json(err));
  // });
  //
  // router.delete("/physicians/:id", (req, res) => {
  //   Physician.destroy({
  //     where: { id: req.params.id }
  //   })
  //     .then(physician => {
  //       res.json(physician);
  //     })
  //     .catch(err => res.json(err));
  // });
};