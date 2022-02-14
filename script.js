"use strict";

// 1. VENDING MACHINE CHALLENGE

const totalParagraph = document.querySelector(".total");
// const colaButton = document.querySelector(".cola");
// const peanutsButton = document.querySelector(".peanuts");
// const chocolateButton = document.querySelector(".chocolate");
// const gummiesButton = document.querySelector(".gummies");

const snackButtons = document.querySelectorAll(".snack-button");

let total = 0;

console.dir(totalParagraph);

// colaButton.addEventListener("click", () => {
//   total += 2;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
//   console.log(total);
// });

// peanutsButton.addEventListener("click", () => {
//   total += 3;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
//   console.log(total);
// });

// chocolateButton.addEventListener("click", () => {
//   total += 4;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
//   console.log(total);
// });

// gummiesButton.addEventListener("click", () => {
//   total += 6;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
//   console.log(total);
// });

snackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cost = button.getAttribute("date-cost");
    total += parseInt(cost);
    // console.log(total);
    totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
  });
});

// 2. MAKE MONEY CHALLENGE

const makeMoneyForm = document.querySelector(".two form");
const formContainer = document.querySelector(".two");
const coins = document.querySelectorAll("#select");

makeMoneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// 3. LIGHT BULB CHALLENGE

const lightBulb = document.querySelector(".light-bulb");
const on = document.querySelector(".on");
const off = document.querySelector(".off");
const toggle = document.querySelector(".toggle");
const end = document.querySelector(".end");

on.addEventListener("click", () => {
  on.style.backgroundColor = "lightgray";
});

off.addEventListener("click", () => {
  off.style.backgroundColor = "darkgray";
});

toggle.addEventListener("click", () => {
  if (toggle.style.backgroundColor == "lightgray") {
    toggle.style.backgroundColor = "darkgray";
  } else {
    toggle.style.backgroundColor = "lightgray";
  }
});

end.addEventListener("click", () => {
  lightBulb.remove();
  on.disabled = true;
  off.disabled = true;
  toggle.disabled = true;
  end.disabled = true;
});
