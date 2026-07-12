const myDice = ["one", "two", "three", "four", "five", "six"];

for (let i = 0; i < myDice.length; i++) {
  setTimeout(() => {
    myDice.forEach(face =>
      document.querySelector("." + face).style.display = "none"
    );

    document.querySelector("." + myDice[i]).style.display = "flex";
  }, i * 1000);
}