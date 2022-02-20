var myheader = document.querySelector("h1")

let hexNum = "abedef0123456789"

function randomColor(string) {
  let hexCode = '#';

  //generate the random hex value
  for (var i = 0; i < 6; i++) {
    randomNumberIndex = Math.floor(Math.random() * 16)
    hexCode =  hexCode + string[randomNumberIndex]
  }

  return hexCode;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


myheader.style.color = randomColor(hexNum);


//setInterval("randomColor()", 500)
