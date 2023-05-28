const draggableElements = document.querySelectorAll(".draggable");
const circleElement = document.getElementById("circle");

let activeElement = null;
let offsetX, offsetY;

draggableElements.forEach((element) => {
  element.addEventListener("mousedown", dragStart);
  element.addEventListener("mouseup", dragEnd);
});

function dragStart(e) {
  activeElement = this;
  offsetX = e.clientX - activeElement.getBoundingClientRect().left;
  offsetY = e.clientY - activeElement.getBoundingClientRect().top;
}

function dragEnd() {
  activeElement = null;
}

circleElement.addEventListener("dragover", (e) => {
  e.preventDefault();
});

circleElement.addEventListener("drop", (e) => {
  e.preventDefault();

  if (activeElement) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    activeElement.style.left = `${x}px`;
    activeElement.style.top = `${y}px`;
  }
});
