let moverA;
let moverB;

function setup() {
  createCanvas(400, 400);
  moverA = new Mover(100, 200, 2);
  moverB = new Mover(300, 200, 5);
}

function draw() {
  background(240,80);
  
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
    let gravity = createVector(0, 0.1);
    moverA.applyForce(gravity);
    moverB.applyForce(gravity);
  }else{
    let gravity = createVector(0, 0.2);
    moverA.applyForce(gravity);
    moverB.applyForce(gravity);
  }
  
  let gravity = createVector(0, 0.2);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);
  let weightA = p5.Vector.mult(gravity, moverA.mass);
  let weightB = p5.Vector.mult(gravity, moverB.mass);
  moverA.applyForce(weightA);
  moverB.applyForce(weightB);
  
  moverA.update();
  moverA.edges();
  moverA.show();

  moverB.update();
  moverB.edges();
  moverB.show();
}