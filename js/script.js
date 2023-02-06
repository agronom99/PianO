const whiteKeys = [...document.querySelectorAll("path.white-keys")];
console.log(whiteKeys);
const blackKeys = [...document.querySelectorAll("path.black-keys")];
console.log(blackKeys);

const keys = [...whiteKeys, ...blackKeys];
console.log(keys);

let audio;
// console.log(audio);

const playSound = (keyPlayedNow) => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio = new Audio(`audio/key-${keyPlayedNow}.mp3`);
  audio.play();
  console.log(audio);
};

keys.forEach((key, i) => {
  key.dataset.index = i + 1;

  key.addEventListener("click", (e) => {
    const specificKey = e.target.dataset.index;
    console.log(specificKey);
    playSound(specificKey);
  });
});
