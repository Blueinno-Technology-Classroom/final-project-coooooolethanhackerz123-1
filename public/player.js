const generateBtn = document.getElementById("generate");
const playerImg = document.getElementById("player-img");

function changePlayer() {
  const imgList = [
    "imgs/1.webp",
    "imgs/2.png",
    "imgs/3.jpg",
    "imgs/4.jpg",
    "imgs/5.png",
    "imgs/6.png",
    "imgs/7.jpg",
    "imgs/8.jpg",
  ];

  // pick a random from `imgList`
  const random = Math.floor(Math.random() * imgList.length);
  const img = imgList[random];
  playerImg.src = img;
}

generateBtn.addEventListener("click", changePlayer);
