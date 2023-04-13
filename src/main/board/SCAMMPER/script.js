const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.stopPropagation()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

var dragTarget = null;
var startX = 0;
var startY = 0;

document.addEventListener("dragstart", function(event) {
  dragTarget = event.target;
  startX = event.clientX;
  startY = event.clientY;
});

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (dragTarget) {
    var dx = event.clientX - startX;
    var dy = event.clientY - startY;
    var x = parseInt(dragTarget.getAttribute("data-x")) + dx;
    var y = parseInt(dragTarget.getAttribute("data-y")) + dy;
    dragTarget.style.transform = "translate(" + dx + "px, " + dy + "px)";
    dragTarget.setAttribute("data-x", x);
    dragTarget.setAttribute("data-y", y);
    dragTarget = null;
  }
});