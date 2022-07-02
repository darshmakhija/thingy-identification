
img = ""

function preload() {
    img = loadImage('bedroom.jpg');
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 500, 500);
    fill("#FF0000");
    text("Bed", 15, 90);
    noFill();
    stroke("#FF0000");
    rect(15, 90, 450, 350);
}