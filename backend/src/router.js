const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const temples = [
  {
    id: 1,
    templeName: "Temple of Hahakigami",
    yokaiStory: {
      appearance:
        "A hahakigami is a tsukumogami which takes up residence in a broom. They can sometimes be seen on cold, windy late autumn mornings, sweeping wildly at the blowing leaves.",
      origin:
        "Long ago, brooms were not household cleaning tools, but actually holy instruments used in ritual purification ceremonies. They were used to on the air in a room or area in order to purify it and sweep out any evil spirits and negative energy that might be lingering there. Like any tool used for many years, a broom which reaches a very old age becomes a perfect home for a spirit — perhaps even more so in the case of a hahakigami because of the ritual nature of its origin.",
    },
    yokaiName: "Hahakigami",
    level: "easy",
    yokaiLife: 5,
    yokaiImage: "/assets/images/Hahakigami.png",
  },
  {
    id: 2,
    templeName: "Temple of Chōchin obake",
    yokaiStory: {
      appearance:
        " When a paper lantern, or a chōchin, reaches an advanced age, it may transform into a chōchin obake. The paper of the lantern splits along one of its wooden ribs, forming a gaping mouth with a wild, lolling tongue. One or two eyes pop out from the upper half of the lantern. Arms or legs may even sprout from its body as well, although this is rare.",
      origin:
        "Like karakasa kozō, chōchin obake rarely cause physical harm, preferring simply to surprise and scare humans. They cackle and roll their huge tongues and big eyes at guests in the home. But you shouldn’t be too quick to laugh them off. Occasionally, powerful onryō disguise themselves as chōchin obake—a case of one of the most dangerous supernatural entities masquerading as one of the most harmless.",
    },
    yokaiName: "Chōchin obake",
    level: "easy",
    yokaiLife: 5,
    yokaiImage: "/assets/images/Lantern Soul.png",
  },
  {
    id: 3,
    templeName: "Temple of Hitotsume kozō",
    yokaiStory: {
      appearance:
        "Child-like and mischievous, hitotsume kozō are little one-eyed goblins that are well-known in all parts of Japan. They wear shaved heads and robes, like tiny Buddhist monks. They have long red tongues and a single, enormous eye.",
      origin:
        "Though similar in name to other one-eyed monsters like hitotsume nyūdō, there is little evidence suggesting a relation between the two. Many believe that hitotsume kozō’s origins are connected in some way with Enryaku-ji, the head temple of the Tendai sect of Buddhism. Others believe that they were once local mountain deities who over time devolved and changed into yōkai.",
    },
    yokaiName: "Hitotsume kozō",
    level: "easy",
    yokaiLife: 5,
    yokaiImage: "/assets/images/Hitotsume.png",
  },
  {
    id: 4,
    templeName: "Temple of Karakasa kozō",
    yokaiStory: {
      appearance:
        "These silly looking yōkai are transformations of Chinese-style oiled-paper umbrellas. They have a single large eye, a long, protruding tongue, and either one or two legs upon which they hop around wildly.",
      origin:
        "Karakasa kozō are not particularly fearsome as far as yōkai go. Their favorite method of surprising humans is to sneak up on them and deliver a large, oily lick with their enormous tongues—which may be traumatic even though it isn’t dangerous. Caution is advised, however. There are other umbrella tsukumogami which are dangerous to humans, and care should be taken not to confuse them with this more playful spirit.",
    },
    yokaiName: "Karakasa kozō",
    level: "medium",
    yokaiLife: 5,
    yokaiImage: "/assets/images/kasa-obake.png",
  },
  {
    id: 5,
    templeName: "Temple of Kappa",
    yokaiStory: {
      appearance:
        "Kappa are aquatic, reptilian humanoids who inhabit the rivers and streams flowing over Japan. Clumsy on land, they are at home in the water, and thrive during the warm months. Kappa are generally the size and shape of a human child, yet despite their small stature they are physically stronger than a grown man. Their scaly skin ranges from a deep, earthy green to bright reds and even blue. ",
      origin:
        "While younger kappa are frequently found in family groups, adult kappa live solitary lives. However, it is common for kappa to befriend other yōkai and sometimes even people. Possessed of a keen intelligence, kappa are one of the few yōkai able to learn human languages. They are highly knowledgeable about medicine and the art of setting bones. According to legend, friendly kappa taught these skills to humans. For fun, they love causing mischief, practicing martial arts like sumo wrestling, and playing games of skill like shogi. Kappa are proud and stubborn, but also fiercely honorable; they never break a promise. Kappa will eat almost anything, but they are particularly fond of two foods: cucumbers and raw innards—particularly human anuses.",
    },
    yokaiName: "Kappa",
    level: "medium",
    yokaiLife: 5,
    yokaiImage: "/assets/images/kappa.png",
  },
  {
    id: 6,
    templeName: "Temple of Kudagitsune",
    yokaiStory: {
      appearance:
        "Kudagitsune are a type of tsukimono—a spirit that can possess and manipulate humans. They are a breed of tiny, thin, magical foxes, about the size of a rat. They are usually found in the service of sorcerers and fortune tellers. Because of their diminutive size, they can be conveniently hidden on the body, tucked in a sleeve or pocket, or carried inside of a matchbox or a bamboo pipe (from which they get their name).",
      origin:
        "Kudagitsune originate in the mountain shaman traditions of Nagano Prefecture, but have spread throughout the mountainous regions of central and eastern Japan. Because of their diverse range, they are known by various other names from region to region. The most famous of these is izuna, from Mount Iizuna, a mountain in Nagano Prefecture with ancient ties to Shugendō and folk magic.",
    },
    yokaiName: "Kudagitsune",
    level: "medium",
    yokaiLife: 5,
    yokaiImage: "/assets/images/Kanko.png",
  },
  {
    id: 7,
    templeName: "Temple of Oni",
    yokaiStory: {
      appearance:
        "Oni are one the greatest icons of Japanese folklore. They are large and scary, standing taller than the tallest man, and sometimes taller than trees. ",
      origin:
        "Originally, all spirits, ghosts, and monsters were known as oni. The root of their name is a word meaning “hidden” or “concealed,” and it was written with the Chinese character for ghost. In the old days of Japan, before the spirits were well-cataloged, oni could refer to almost any supernatural creature—ghosts, obscure gods, large or scary yōkai, even particularly vicious and brutal humans. As the centuries shaped the Japanese language, the definitions we know for the various kinds of monsters gradually came into being. Female demons are not called oni, but are known by another name: kijo.",
    },
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
