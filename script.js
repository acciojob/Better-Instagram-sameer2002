//your code here
const images = document.querySelectorAll('.image');
let activeImage = null;
let initialX = 0;
let initialY = 0;
let xOffset = 0;
let yOffset = 0;

images.forEach(image => {
  image.addEventListener('mousedown', dragStart);
  image.addEventListener('mouseup', dragEnd);
  image.addEventListener('mousemove', drag);
});

function dragStart(event) {
  activeImage = this;
  initialX = event.clientX - xOffset;
  initialY = event.clientY - yOffset;
}

function dragEnd(event) {
  activeImage = null;
  initialX = xOffset;
  initialY = yOffset;
}

function drag(event) {
  if (activeImage) {
    event.preventDefault();
    xOffset = event.clientX - initialX;
    yOffset = event.clientY - initialY;
    setTranslate(xOffset, yOffset, activeImage);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}