function setup()  {
    createCanvas(400, 4000);
    background(" #FFC108")
    
  }
  function draw() {
    stroke("yellow");
    fill("green");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }