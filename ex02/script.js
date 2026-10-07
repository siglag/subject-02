const title = document.getElementById("title");
const box = document.getElementById("box");
const message = document.querySelector(".message");

title.textContent = "did u notice? it has changed";
message.textContent = "i bet u didn't notice";

box.textContent = "A Stick!!!!";
box.style.border = "2px solid black";
box.classList.add("active");
