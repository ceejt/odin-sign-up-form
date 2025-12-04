const name = document.querySelector("#username");
const greetBtn = document.querySelector(".greet-btn");
const greetOut = document.querySelector(".greeting");

greetBtn.addEventListener("click", (event) => {
  greetOut.innerText = "Sup " + name.value;
});
