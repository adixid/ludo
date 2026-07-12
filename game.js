const myDice = ["one", "two", "three", "four", "five", "six"];

function playDice () {
  for (let i = 0; i < 10; i++) {

  const randomNumber = Math.floor(Math.random() * 6);

    setTimeout(() => {
      myDice.forEach(face =>
        document.querySelector("." + face).style.display = "none"
      );

      document.querySelector("." + myDice[randomNumber]).style.display = "flex";
    }, i * 100);
  }
}



    
    
  