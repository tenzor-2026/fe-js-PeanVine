const image = document.querySelector(".image");
const image_elements = document.querySelectorAll(".image img");
const image_number = image_elements.length;

let index = 0;

function next() {
  index = (index + 1) % image_number;
}

function move() {
  next();
  const left = -index * 50;
  image.style.transform = `translateX(${left}%)`;
}

setInterval(move, 5000);
