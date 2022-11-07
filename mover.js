class Mover {
  constructor(x, y,m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 7;
  }
  
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }


  edges() {
    if (this.pos.y >= height-this.r) {
      this.pos.y = height-this.r;
      this.vel.y *= -1;
    }else if (this.pos.y <= this.r) {
      this.pos.y = this.r;
      this.vel.x *= -1;
    }

    if (this.pos.x >= width-this.r) {
      this.pos.y = this.pos.y
      this.pos.x = 0
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
    
  }


  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(150);
    strokeWeight(1);
    fill(150, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}