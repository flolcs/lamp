const leftLamp1 = document.querySelector("#leftLamp1");
const leftLamp2 = document.querySelector("#leftLamp2");
const leftLamp3 = document.querySelector("#leftLamp3");
const choixLamp1 = document.querySelector(".choixLamp1");
const choixLamp2 = document.querySelector(".choixLamp2");
const choixLamp3 = document.querySelector(".choixLamp3");
const rightLamp1 = document.querySelector("#rightLamp1");
const rightLamp2 = document.querySelector("#rightLamp2");
const rightLamp3 = document.querySelector("#rightLamp3");

choixLamp1.addEventListener("click", () => {
  leftLamp1.style.visibility = "visible";
  rightLamp1.style.visibility = "visible";
  leftLamp2.style.visibility = "hidden";
  rightLamp2.style.visibility = "hidden";
  leftLamp3.style.visibility = "hidden";
  rightLamp3.style.visibility = "hidden";
  choixLamp1.classList.remove("lampActive");
  choixLamp2.classList.remove("lampActive");
  choixLamp3.classList.remove("lampActive");
  choixLamp1.classList.add("lampActive");
});

choixLamp2.addEventListener("click", () => {
  leftLamp2.style.visibility = "visible";
  rightLamp2.style.visibility = "visible";
  leftLamp1.style.visibility = "hidden";
  rightLamp1.style.visibility = "hidden";
  leftLamp3.style.visibility = "hidden";
  rightLamp3.style.visibility = "hidden";
  choixLamp1.classList.remove("lampActive");
  choixLamp2.classList.remove("lampActive");
  choixLamp3.classList.remove("lampActive");
  choixLamp2.classList.add("lampActive");
});

choixLamp3.addEventListener("click", () => {
  leftLamp3.style.visibility = "visible";
  rightLamp3.style.visibility = "visible";
  leftLamp2.style.visibility = "hidden";
  rightLamp2.style.visibility = "hidden";
  leftLamp1.style.visibility = "hidden";
  rightLamp1.style.visibility = "hidden";
  choixLamp1.classList.remove("lampActive");
  choixLamp2.classList.remove("lampActive");
  choixLamp3.classList.remove("lampActive");
  choixLamp3.classList.add("lampActive");
});
