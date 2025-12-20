let button = document.querySelector("#btn");
const body = document.querySelector("body");

let mode = "light";

const lightMode = () => {
  console.log("Button was clicked...");
  if (mode === "light") {
    console.log(" mode is dark ");
    mode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    console.log(" mode is light");
    mode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
};

button.addEventListener("click", lightMode);
