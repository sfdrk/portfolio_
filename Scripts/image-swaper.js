var image = document.querySelector(".swap-image");
var currentPos = 0;
var images = ["./Images/Image-swaper/1-image.webp", "./Images/Image-swaper/1-image.webp", "./Images/Image-swaper/1-image.webp", "./Images/Image-swaper/1-image.webp"];

function volgendefoto() {
if (++currentPos >= images.length)
    currentPos = 0;

    image.src = images[currentPos];
}

setInterval(volgendefoto, 1250);