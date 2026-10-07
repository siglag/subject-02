const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let count = 0;

function updateCount() {
  countElement.textContent = count;

  if (count > 0) {
    countElement.style.color = "green";
  } else if (count < 0) {
    countElement.style.color = "red";
  } else {
    countElement.style.color = "black";
  }
}

incrementButton.addEventListener("click", function () {
  count++;
  updateCount();
});

decrementButton.addEventListener("click", function () {
  count--;
  updateCount();
});

resetButton.addEventListener("click", function () {
  count = 0;
  updateCount();
});
