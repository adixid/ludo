function darkMode () {
      let element = document.body;
      element.classList.toggle("dark-mode");
    }

//draw board

// assign each square a div to begin with
for (let i = 0; i < 121; i++) {
  const playArea = document.getElementById("play-area");
  const square = document.createElement("div");

  square.classList.add("square");
  playArea.appendChild(square);
  square.setAttribute("id", `square${i}`);
}

const myPath = [114, 103, 92, 81, 70, 69, 68, 67, 66, 55,
                44, 45, 46, 47, 48, 37, 26, 15, 4, 5,
                6, 17, 28, 39, 50, 51, 52, 53, 54, 65, 
                76, 75, 74, 73, 72, 83, 94, 105, 116, 115];

// blue, orange, green and red
const homeSquares = [[99, 100, 110, 111], [0, 1, 11, 12], [9, 10, 20, 21], [108, 109, 119, 120]];
const safeSquares = [[104, 93, 82, 71], [56, 57, 58, 59], [16, 27, 38, 49], [64, 63, 62, 61]];
const startSquares = [0, 10, 20, 30];
const myColours = ["safe-blue", "safe-orange", "safe-green", "safe-red",];
const temp = ["blue", "orange", "green", "red"];

// path 
let n = 1;
for (let i = 0; i < myPath.length; i++) {
  const cir2 = document.getElementById(`square${myPath[i]}`);
  const circle = document.createElement("div");
  cir2.appendChild(circle);
  circle.classList.add("circle");
  circle.setAttribute("id", `path${n}`);
  n++;
  for (let j = 0; j < 4; j++) {   // highlight start squares
    if (i === startSquares[j]) {
      circle.classList.add(`${myColours[j]}`);
      }
    }
  }
  
  // home squares
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      const cir2 = document.getElementById(`square${homeSquares[j][i]}`);
      const circle = document.createElement("div");
      cir2.appendChild(circle);
      circle.classList.add("circle");
      circle.classList.add(`${myColours[j]}`);  // highlight squares with a colour
      circle.setAttribute("id", `home-${temp[j]}-${i+1}`);
    }
  }
  
  // safe squares
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      const cir2 = document.getElementById(`square${safeSquares[j][i]}`);
      const circle = document.createElement("div");
      cir2.appendChild(circle);
      circle.classList.add("circle");
      circle.classList.add(`${myColours[j]}`);  // highlight squares with a colour
      circle.setAttribute("id", `safe-${temp[j]}-${i+1}`);
    }
  }
  
  // arrows
  document.getElementById("square34").innerHTML = "&#8594";
  document.getElementById("square18").innerHTML = "&#8595";
  document.getElementById("square86").innerHTML = "&#8592";
  document.getElementById("square102").innerHTML = "&#8593";
  /*
  //tokens
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      const myToken = document.getElementById(`home-${temp[j]}-${i+1}`);
      const token = document.createElement("div");
      myToken.appendChild(token);
      token.classList.add(`token-${temp[j]}`);
      token.setAttribute("id", `token-${temp[j]}-${i+1}`);
    }  
  }
  
const gameToken = [[], [], [], []];
*/