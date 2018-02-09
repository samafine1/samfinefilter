let capture;
let slider3 

function setup() {
  createCanvas(620, 440);
  // specify multiple formats for different browsers
  capture = createCapture(VIDEO);
    capture.size(620, 440);
   Slider3 = createSlider(0.5,1.5,1,0.1);
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  capture.loadPixels();
let val3 = Slider3.value();
  let stepSize = round(constrain(1, val3, 32));
  for (let y=0; y<height; y+=stepSize) {
    for (let x=0; x<width; x+=stepSize) {
      let i = y * width + x;
      let darkness = (255 - capture.pixels[i*4]) / 255;
      let radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}
