const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const temples = [
  {
    id: 1,
    nameTemple: "Meji-Jingu",
    story: "histoire Kappa",
    nemeYokai: "Kappa",
    level: 1,
    lifeYokai: 5,
  },
  {
    id: 2,
    nameTemple: "Senso-ji",
    story: "histoire Kase-Obake",
    nemeYokai: "Kase-Obake",
    level: 1,
    lifeYokai: 5,
  },
  {
    id: 3,
    nameTemple: "Okunitama Jinja",
    story: "histoire Akamata",
    nemeYokai: "Akamata",
    level: 2,
    lifeYokai: 5,
  },
  {
    id: 4,
    nameTemple: "Ise-Jingu",
    story: "histoire Akurojin-no-hi",
    nemeYokai: "Akurojin-no-hi",
    level: 2,
    lifeYokai: 5,
  },
  {
    id: 5,
    nameTemple: "Asuka-Dera",
    story: "histoire Oni",
    nemeYokai: "Oni",
    level: 3,
    lifeYokai: 5,
  },
];

router.get("/temples", (req, res) => {
  res.json(temples);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
