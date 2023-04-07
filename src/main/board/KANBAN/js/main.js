const draggables = document.querySelectorAll(".draggable");
const tasks = document.querySelectorAll(".task");

draggables.forEach(draggable => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

tasks.forEach(task => {
  task.addEventListener("dragover", e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(task, e.clientX);
    const draggable = document.querySelector(".dragging");
    if (afterElement === undefined) {
      task.appendChild(draggable);
    } else {
      task.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(task, x) {
  const draggableElements = [
    ...task.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY },
  ).element;
}