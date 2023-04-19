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
    yokaiImage: "/assets/images/oniImg.png",
  },
  {
    id: 2,
    templeName: "Senso-ji",
    story: "histoire Kase-Obake",
    yokaiName: "Kase-Obake",
    level: 1,
    yokaiLife: 5,
    yokaiImage: "/assets/images/oniImg.png",
  },
  {
    id: 3,
    templeName: "Okunitama Jinja",
    story: "histoire Akamata",
    yokaiName: "Akamata",
    level: 2,
    yokaiLife: 5,
    yokaiImage: "/assets/images/oniImg.png",
  },
  {
    id: 4,
    templeName: "Ise-Jingu",
    story: "histoire Akurojin-no-hi",
    yokaiName: "Akurojin-no-hi",
    level: 2,
    yokaiLife: 5,
    yokaiImage: "/assets/images/oniImg.png",
  },
  {
    id: 5,
    templeName: "Asuka-Dera",
    story: "histoire Oni",
    yokaiName: "Oni",
    level: 3,
    yokaiLife: 5,
    yokaiImage: "/assets/images/oniImg.png",
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
