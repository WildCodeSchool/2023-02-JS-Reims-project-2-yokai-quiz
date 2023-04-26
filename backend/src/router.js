const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const temples = [
  {
    id: 1,
    templeName: "Meji-Jingu",
    story: "histoire Kappa",
    yokaiName: "Kappa",
    level: 1,
    yokaiLife: 5,
  },
  {
    id: 2,
    templeName: "Senso-ji",
    story: "histoire Kase-Obake",
    yokaiName: "Kase-Obake",
    level: 1,
    yokaiLife: 5,
  },
  {
    id: 3,
    templeName: "Okunitama Jinja",
    story: "histoire Akamata",
    yokaiName: "Akamata",
    level: 1,
    yokaiLife: 5,
  },
  {
    id: 4,
    templeName: "Ise-Jingu",
    story: "histoire Akurojin-no-hi",
    yokaiName: "Akurojin-no-hi",
    level: 2,
    yokaiLife: 5,
  },
  {
    id: 5,
    templeName: "Asuka-Dera",
    story: "histoire Oni",
    yokaiName: "Oni",
    level: 2,
    yokaiLife: 5,
  },
  {
    id: 6,
    templeName: "Asuka",
    story: "histoire Oni",
    yokaiName: "Oni",
    level: 2,
    yokaiLife: 5,
  },
  {
    id: 7,
    templeName: "Dera",
    story: "histoire Oni",
    yokaiName: "Oni",
    level: 3,
    yokaiLife: 5,
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
