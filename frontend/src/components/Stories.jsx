const Trashtalk = [
  "lorem ipsum 1",
  "lorem ipsum 2",
  "lorem ipsum 3",
  "lorem ipsum 4",
];

function Stories() {
  const random = Math.floor(Math.random() * Trashtalk.length);

  return Trashtalk[random];
}

export default Stories;
