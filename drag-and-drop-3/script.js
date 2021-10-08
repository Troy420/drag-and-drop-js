// VARIABLES
const draggableElements = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.droppable');

// EVENT LISTENERS
draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
    // elem.addEventListener("drag", drag);
    // elem.addEventListener("dragend", dragEnd);
})
droppableElements.forEach(elem => {
    // elem.addEventListener("dragenter", dragenter);
    elem.addEventListener("dragover", dragOver);
    // elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
})

// FUNCTIONS
function dragStart(event) {
    event.dataTransfer.setData("color", event.target.style.color);
}
function dragOver(event) {
    event.preventDefault();
}
function drop(event) {
    event.preventDefault();
    const draggableElementData = event.dataTransfer.getData("color");
    event.target.style.backgroundColor = draggableElementData;
}
