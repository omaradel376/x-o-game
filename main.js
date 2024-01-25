let turn = "x";
let win = document.querySelector(".win")


addEventListener("click", function (e) {
  for (let i = 1; i < 10; i++) {
    if (e.target.id == `item_${i}`) {
      game(e.target);
      e.target.style.cursor = "no-drop";
      // e.target.style.backgroundColor = "rgb(102, 102, 102)"
    }
  }
});
let header = document.querySelector(".header")
function game(e) {
  if (turn === "x" && e.innerHTML == "") {
    e.innerHTML = "x";
    header.innerHTML = "O turn"
    turn = "o";
  } else if (turn === "o" && e.innerHTML == "") {
    e.innerHTML = "o";
    header.innerHTML = "X turn"
    turn = "x";
  }
  let squress = document.querySelectorAll(".squre");
  if (
    squress[0].innerHTML == squress[1].innerHTML &&
    squress[1].innerHTML == squress[2].innerHTML &&
    squress[2].innerHTML != ""
  ) {
    winner(squress, 0, 1, 2);
  } else if (
    squress[3].innerHTML == squress[4].innerHTML &&
    squress[4].innerHTML == squress[5].innerHTML &&
    squress[5].innerHTML != ""
  ) {
    winner(squress, 3, 4, 5);
  } else if (
    squress[6].innerHTML == squress[7].innerHTML &&
    squress[7].innerHTML == squress[8].innerHTML &&
    squress[8].innerHTML != ""
  ) {
    winner(squress, 6, 7, 8);
  } else if (
    squress[0].innerHTML == squress[3].innerHTML &&
    squress[3].innerHTML == squress[6].innerHTML &&
    squress[6].innerHTML != ""
  ) {
    winner(squress, 0, 3, 6);
  } else if (
    squress[1].innerHTML == squress[4].innerHTML &&
    squress[4].innerHTML == squress[7].innerHTML &&
    squress[7].innerHTML != ""
  ) {
    winner(squress, 1, 4, 7);
  } else if (
    squress[2].innerHTML == squress[5].innerHTML &&
    squress[5].innerHTML == squress[8].innerHTML &&
    squress[8].innerHTML != ""
  ) {
    winner(squress, 2, 5, 8);
  } else if (
    squress[0].innerHTML == squress[4].innerHTML &&
    squress[4].innerHTML == squress[8].innerHTML &&
    squress[0].innerHTML != ""
  ) {
    winner(squress, 0, 4, 8);
  } else if (
    squress[2].innerHTML == squress[4].innerHTML &&
    squress[4].innerHTML == squress[6].innerHTML &&
    squress[6].innerHTML != ""
  ) {
    winner(squress, 2, 4, 6);
  }
}

function winner(squress, num1, num2, num3) {
  if (
    squress[num1].innerHTML == squress[num2].innerHTML &&
    squress[num2].innerHTML == squress[num3].innerHTML &&
    squress[num3].innerHTML != ""
  ) {
    squress[num1].style.backgroundColor = "black";
    squress[num2].style.backgroundColor = "black";
    squress[num3].style.backgroundColor = "black";
    header.innerHTML = squress[num3].innerHTML + " win"
    win.style.display = "flex"
    win.innerHTML = `<span>${squress[num3].innerHTML}</span> is win <span>will be reload in 3s</span>`
    setTimeout(() => {
      location.reload()
    }, 2000);
  }
}