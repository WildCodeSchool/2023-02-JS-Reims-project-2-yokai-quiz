const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const temples = [
  {
    id: 1,
    templeName: "",
    story: "",
    yokaiName: "Hahakigami",
    level: "easy",
    yokaiLife: 5,
    yokaiImage: "/assets/images/Hahakigami.png",
  },
  {
    id: 2,
    templeName: "",
    story: "",
    yokaiName: "Lantern Soul",
    level: "easy",
    yokaiLife: 5,
    yokaiImage: "/assets/images/Lantern Soul.png",
  },
  {
    id: 3,
    templeName: "",
    story: "",
    yokaiName: "Hitotsume",
    level: "easy",
    yokaiLife: 5,
    yokaiImage: "/assets/images/Hitotsume.png",
  },
  {
    id: 4,
    templeName: "",
    story: "",
    yokaiName: "Kasa-Obake",
    level: "medium",
    yokaiLife: 5,
    yokaiImage: "/assets/images/kasa-obake.png",
  },
  {
    id: 5,
    templeName: "",
    story:
      "Hello, I am a Kappa, a legendary Japanese creature that lives near water. I have fast swimming abilities and am known to grab careless humans who swim in my domain. I have a preference for cucumbers and a unique personality that can be both mischievous and protective towards those around me.",
    yokaiName: "Kappa",
    level: "medium",
    yokaiLife: 5,
    yokaiImage: "/assets/images/kappa.png",
  },
  {
    id: 6,
    templeName: "",
    story: "",
    yokaiName: "Kanko",
    level: "medium",
    yokaiLife: 5,
    yokaiImage: "/assets/images/Kanko.png",
  },
  {
    id: 7,
    templeName: "",
    story: "",
    yokaiName: "Oni",
    level: "hard",
    yokaiLife: 5,
    yokaiImage: "/assets/images/oni.png",
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
