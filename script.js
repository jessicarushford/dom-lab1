"use strict";

// 1. VENDING MACHINE CHALLENGE

const totalParagraph = document.querySelector(".total");
// const colaButton = document.querySelector(".cola");
// const peanutsButton = document.querySelector(".peanuts");
// const chocolateButton = document.querySelector(".chocolate");
// const gummiesButton = document.querySelector(".gummies");

const snackButtons = document.querySelectorAll(".snack-button");
// can also use ".one button" instead of class ".snack-button"

let total = 0;

// console.dir(totalParagraph);

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
    // parseInt changes the string of info into a number
    totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
  });
});

// 2. MAKE MONEY CHALLENGE

const form = document.querySelector(".two form");
const bank = document.querySelector(".bank");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   prevents from reloading the page first on a form, that is the default
  const howMany = document.querySelector("#howMany").value;
  //   .value will grab the value of that element (which is an input)
  const whichCoin = document.querySelector("#whichCoin").value;
  //   console.log(howMany, whichCoin);
  for (let i = 0; i < howMany; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", whichCoin);
    // /DDS A DYNAMIC CLASS -- these classes dictate manipulation in CSS
    newCoin.textContent = whichCoin;
    bank.append(newCoin);
  }
});

// 3. LIGHT BULB CHALLENGE

const bulb = document.querySelector(".bulb");
const on = document.querySelector(".on-switch");
const off = document.querySelector(".off-switch");
const toggle = document.querySelector(".toggle-switch");
const end = document.querySelector(".end-switch");

on.addEventListener("click", () => {
  bulb.classList.add("on");
});

off.addEventListener("click", () => {
  bulb.classList.remove("on");
});

toggle.addEventListener("click", () => {
  bulb.classList.toggle("on");
});

//   if (toggle.style.backgroundColor == "lightgray") {
//     toggle.style.backgroundColor = "darkgray";
//   } else {
//     toggle.style.backgroundColor = "lightgray";
//   }
// });

end.addEventListener("click", () => {
  bulb.remove();
  on.disabled = true;
  off.disabled = true;
  toggle.disabled = true;
  end.disabled = true;
});
