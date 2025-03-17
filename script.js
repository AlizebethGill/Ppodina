let container = document.querySelector(".image-container");
let images = document.querySelectorAll(".image-container img");
let index = 0;

function slideImages() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    let offset = -index * 100;
    container.style.transform = `translateX(${offset}%)`;
}

setInterval(slideImages, 3000);
