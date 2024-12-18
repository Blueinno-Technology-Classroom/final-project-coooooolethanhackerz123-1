const generateBtn = document.getElementById("generate");
const playerImg = document.getElementById("player-img");
const playerNames = document.getElementById("player-Names");
const atkText = document.getElementById("atk");
const atkInput = document.getElementById("atk-input");
const overallScore = document.getElementById("overall-score");
console.log(atkInput);

function changePlayer() {
  const imgList = [
    "imgs/1.png",
    "imgs/2.png",
    "imgs/3.png",
    "imgs/4.png",
    "imgs/5.png",
    "imgs/6.png",
    "imgs/7.png",
    "imgs/8.png",
    "imgs/9.png",
    "imgs/10.png",
    "imgs/11.png",
    "imgs/12.png",
    "imgs/13.png",
    //"imgs/14.png",
    "imgs/15.png",
    "imgs/16.png",
    "imgs/17.png",
    "imgs/18.png",
    "imgs/19.png",
    "imgs/20.png",
    "imgs/21.png",
    "imgs/22.png",
    "imgs/23.png",
    "imgs/24.png",
    "imgs/25.png",
    "imgs/26.png",
    "imgs/27.png",
    "imgs/28.png",
    "imgs/29.png",
    "imgs/30.png",
    "imgs/31.png",
  ];

  const names = [
    "Ronaldo",
    "Messi",
    "Van Dijk",
    "Vinicius Jr",
    "Benzema",
    "Bale",
    "Lewandowski",
    "Bellingham",
    "Mo Salah",
    "Mbappe",
    "Haaland",
    "Neymar jr",
    "Rudiger",
    //"Dybala",
    "Courtois",
    "Son",
    "Ramos",
    "Kroos",
    "Modric",
    "Saka",
    "Bruno Fernandes",
    "De Bruyne",
    "Osimhen",
    "Suarez",
    "Joselu",
    "Carvajal",
    "Wirtz",
    "Rodrygo",
    "Camavinga",
    "Pepe",
    "Valverde",
    //...
  ];

  // pick a random from `imgList`
  const random = Math.floor(Math.random() * imgList.length);
  const img = imgList[random];
  const name = names[random];
  playerImg.src = img;
  playerNames.textContent = name;
}

function atkChanged() {
  const inputVal = atkInput.value;
  atkText.textContent = inputVal;

  const scores = inputVal.split(" ");
  console.log(scores);

  let totalScroe = 0;
  let count = 0;
  for (let i in scores) {
    const sc = scores[i];
    if (sc === "") continue;

    const num = Number(sc);
    if (num > 99) {
      alert(`what do you think ur doing!?`);
      return;
    }

    totalScroe += num;
    count += 1;
  }
  const score = totalScroe / count;
  // TODO: update the overall score HTML element with `overallScore`
  overallScore.textContent = Math.round(score);
}

generateBtn.addEventListener("click", changePlayer);
atkInput.addEventListener("change", atkChanged);
