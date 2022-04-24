const yourturn = document.getElementById("player");
const allblocks = document.getElementById("container");
const result = document.getElementById("result");
const Button = document.getElementById("restart");
Button.style.display = "none";
var count = 1;

for (var controlvariable = 0; controlvariable < 9; controlvariable++) {
  allblocks.children[controlvariable].addEventListener("click", startthegame);
}
let yourturnvariable = "X";
let clicked = [];

function startthegame() {
  if (this.classList[1] != "Clicked!") {
    this.classList.add("Clicked!");
    this.children[0].innerText = yourturnvariable;
    control_draw()
    control_lines()
    control_colums()
    control_cross()
    if (yourturnvariable == "X") yourturnvariable = "O";
    else yourturnvariable = "X";
    yourturn.innerText = yourturnvariable + " 's Turn";
  } else {
    alert("Select a box!");
  }
}

function control_lines() {
  if (allblocks.children[0].textContent == allblocks.children[1].textContent && allblocks.children[0].textContent == allblocks.children[2].textContent && allblocks.children[0].textContent !== "") final()
  if (allblocks.children[3].textContent == allblocks.children[4].textContent && allblocks.children[3].textContent == allblocks.children[5].textContent && allblocks.children[3].textContent !== "") final()
  if (allblocks.children[6].textContent == allblocks.children[7].textContent && allblocks.children[6].textContent == allblocks.children[8].textContent && allblocks.children[6].textContent !== "") final()
}

function control_colums() {
  if (allblocks.children[0].textContent == allblocks.children[3].textContent && allblocks.children[0].textContent == allblocks.children[6].textContent && allblocks.children[0].textContent !== "") final()
  if (allblocks.children[1].textContent == allblocks.children[4].textContent && allblocks.children[1].textContent == allblocks.children[7].textContent && allblocks.children[1].textContent !== "") final()
  if (allblocks.children[2].textContent == allblocks.children[5].textContent && allblocks.children[2].textContent == allblocks.children[8].textContent && allblocks.children[2].textContent !== "") final()
}

function control_cross() {
  if (allblocks.children[0].textContent == allblocks.children[4].textContent && allblocks.children[0].textContent == allblocks.children[8].textContent && allblocks.children[0].textContent !== "") final()
  if (allblocks.children[2].textContent == allblocks.children[4].textContent && allblocks.children[2].textContent == allblocks.children[6].textContent && allblocks.children[2].textContent !== "") final()
}

function final() {
  document.querySelector("#body").style.background = "#363636";
  Button.style.display = "block";
  result.style.display = "block";
  result.innerText = yourturnvariable + " is Win!";

}

function control_draw() {
  for (controlvariable = 0; controlvariable < 9; controlvariable++) {
    if (allblocks.children[controlvariable].classList[1] == "Clicked!") {
      count += 1;
      break;
    }
  }
  if (count == 10) {
    document.querySelector("#body").style.background = "#363636";
    Button.style.display = "block";
    result.style.display = "block";
    result.innerText = "The Game is Draw!";
  }
}










// let cells = document.querySelectorAll("[data-cell]");

// // this will give each element an event listener
// cells.forEach((cell, i) => {
//   cell.addEventListener("click", handleclick, { once: true });
// });
// let choice = false;
// var counter = 0;
// function handleclick(e) {
//   // change the value in that cell
//   counter++;
//   let cell = e.target;
//   if (choice === true) {
//     cell.style.background = "red";
//   } else {
//     cell.style.background = "blue";
//   }
//   check("red");
//   check("blue");
//   choice = !choice;
// }

// function check(pick) {
//   if (
//     cells[0].style.background === pick &&
//     cells[1].style.background === pick &&
//     cells[2].style.background === pick
//   ) {
//     alert(pick + " is the winner ");
//   } else if (
//     cells[3].style.background === pick &&
//     cells[4].style.background === pick &&
//     cells[5].style.background === pick
//   ) {
//     alert(pick + " is the winner ");
//   } else if (
//     cells[6].style.background === pick &&
//     cells[7].style.background === pick &&
//     cells[8].style.background === pick
//   ) {
//     alert(pick + " is the winner ");
//   } else if (
//     cells[0].style.background === pick &&
//     cells[3].style.background === pick &&
//     cells[6].style.background === pick
//   ) {
//     alert(pick + " is the winner ");
//   } else if (
//     cells[1].style.background === pick &&
//     cells[4].style.background === pick &&
//     cells[7].style.background === pick
//   ) {
//     alert(pick + " is the winner ");
//   } else if (
//     cells[2].style.background === pick &&
//     cells[5].style.background === pick &&
//     cells[8].style.background === pick
//   ) {
//     alert(pick + " is the winner ");
//   } else if (
//     cells[0].style.background === pick &&
//     cells[4].style.background === pick &&
//     cells[8].style.background === pick
//   ) {
//     alert(pick + " is the winner ");
//   } else if (
//     cells[2].style.background === pick &&
//     cells[4].style.background === pick &&
//     cells[6].style.background === pick
//   ) {
//     alert(pick + " is the winner ");
//   } else if (counter >= 9) {
//     alert("it's a draw");
//   }
// }

// function clean() {
//   window.location.reload();
// }

// // Try the most easy
// // DRY : don't repeat yorself
// // check for back practice
// // emprove your app