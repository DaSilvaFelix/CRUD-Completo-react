import "./assets/style/style.css";
import { divOne, divTwo } from "./components/Divs.js";
import { getData } from "./assets/js/getData.js";

const main = document.querySelector("#app");
main.classList.add("2xl:min-h-full", "min-h-screen");
const index = document.createElement("div");
index.append(divOne, divTwo);
index.classList.add("h-screen", "flex-row", "flex");
main.append(index);
getData(document.getElementById("enviar"));
