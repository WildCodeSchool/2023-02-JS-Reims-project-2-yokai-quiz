const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const temples = [
  {
    id: 1,
    templeName: "Meji-Jingu",
    story:
      "Hello, I am a Kappa, a legendary Japanese creature that lives near water. I have fast swimming abilities and am known to grab careless humans who swim in my domain. I have a preference for cucumbers and a unique personality that can be both mischievous and protective towards those around me.",
    yokaiName: "Kappa",
    level: "easy",
    yokaiLife: 5,
    yokaiImage: "/assets/images/kappa.png",
  },
  {
    id: 2,
    templeName: "Senso-ji",
    story: "histoire Kasa-Obake",
    yokaiName: "Kasa-Obake",
    level: "easy",
    yokaiLife: 5,
    yokaiImage: "/assets/images/kasa-obake.png",
  },
  {
    id: 3,
    templeName: "Okunitama Jinja",
    story: "histoire Akamata",
    yokaiName: "Akamata",
    level: "easy",
    yokaiLife: 5,
    yokaiImage: "/assets/images/oniImg.png",
  },
  {
    id: 4,
    templeName: "Ise-Jingu",
    story: "histoire Akurojin-no-hi",
    yokaiName: "Akurojin-no-hi",
    level: "medium",
    yokaiLife: 5,
    yokaiImage: "/assets/images/oniImg.png",
  },
  {
    id: 5,
    templeName: "Asuka-Dera",
    story: "histoire Oni",
    yokaiName: "Yokai5",
    level: "medium",
    yokaiLife: 5,
  },
  {
    id: 6,
    templeName: "Asuka",
    story: "histoire Oni",
    yokaiName: "Yokai6",
    level: "medium",
    yokaiLife: 5,
  },
  {
    id: 7,
    templeName: "Dera",
    story: "histoire Oni",
    yokaiName: "Yokai7",
    level: "hard",
    yokaiLife: 5,
    yokaiImage: "/assets/images/oniImg.png",
  },
];

const trashtalk = [
  "You're not even worth possessing.",
  "Is this the best the human world has to offer?",
  "Your skills are as weak as your spirit.",
  "I'll have more fun watching paint dry than fighting you.",
  "You're nothing but a mere mortal.",
  "I'll send you back to the afterlife in no time.",
  "You're not even worth the energy it takes to defeat you.",
  "I'm disappointed. I expected more of a challenge.",
  "Is that all you've got? Pathetic.",
  "You might as well just give up now.",
  "I'll make sure you regret challenging me.",
  "I've faced tougher opponents in my sleep.",
  "You're not even worthy of being my opponent.",
  "I'll send you back to the world of the living with your tail between your legs.",
  "You're not even worth the breath it takes to speak to you.",
  "I'll make quick work of you, and move on to more important matters.",
  "You're like a fly, buzzing around, annoying but ultimately insignificant.",
  "I can see why humans are considered weaklings in the Yokai realm.",
  "Is this the best you can do? How disappointing.",
  "I'll show you the true meaning of fear.",
  "You're like a twig in the wind, easy to break.",
  "I've seen better fighters in my nightmares.",
  "You might as well surrender now, it would save us both some time.",
  "Is that all you've got? I expected more of a challenge.",
  "Your spirit is weaker than a candle flame.",
  "I'll make sure you regret ever crossing me.",
  "You're not even worth the dirt under my nails.",
  "I'll crush you like a bug, and enjoy every moment.",
  "Your fighting style is more laughable than intimidating.",
  "You're nothing but a pawn in my game.",
  "You're no match for my power and skill.",
  "You'll be begging for mercy by the time I'm done with you.",
  "I'll make you suffer for daring to challenge me.",
  "Your attacks are as weak as your resolve.",
  "I'll send you back to the human world in shame.",
  "You're not even worth the effort it takes to defeat you.",
  "You're no match for the true strength of a Yokai.",
  "I'll break your spirit and your bones.",
  "You're just a pitiful human, unworthy of my attention.",
  "You'll never be able to defeat me, no matter how hard you try.",
];
router.get("/trashtalk", (req, res) => {
  res.json(trashtalk);
});

router.get("/temples", (req, res) => {
  res.json(temples);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
