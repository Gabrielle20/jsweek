import "./styles.css";
import "@glidejs/glide/dist/css/glide.core.min.css";

// Optional Theme Stylesheet
//import "@glidejs/glide/src/assets/sass/glide.theme";
import Glide from "@glidejs/glide";
import Clock from "./Clock";
import "./fetch";

const clock = new Clock();
clock.init();

let display = document.querySelector("#display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});

const sliders = document.querySelectorAll(".glide").forEach((slider) => {
  return new Glide(`.${slider.classList[1]}`, {
    type: "carousel",
    startAt: 0,
    perView: 1,
    gap: 0,
    keyboard: true
  }).mount();
  document
    .querySelector(".glide__arrow--right")
    .addEventListener("click", () => {
      slider.go(">");
    });

  document
    .querySelector(".glide__arrow--left")
    .addEventListener("click", () => {
      slider.go("<");
    });
});
