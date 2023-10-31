function setup() {
    createCanvas(400, 400);
    background("orange");
  }
  
  function draw() {
    stroke("red")
    fill("blue")
    
    if(mouseIsPressed) {
      rect (mouseX, mouseY, 20, 20);
    }
  }