let supra, gtr;
let supraX, gtrX;
let supraY, gtrY;
let speed = 4;
let jumping = false;
let jumpCounter = 0;

class Carro {
  constructor(alto, ancho, color, name) {
    this.alto = alto;
    this.ancho = ancho;
    this.color = color;
    this.name = name;
  }

  display(x, y) {
    stroke(220, 200, 200);
    fill(this.color);
    rect(x, y, this.ancho, this.alto);
  }
}

function setup() {
  createCanvas(400, 200);
  supraX = 0;
  gtrX = width;
  supraY = height - height / 4;
  gtrY = height - height / 4;

  supra = new Carro(20, 40, "blue", "supra");
  gtr = new Carro(20, 40, "orange", "gtr");

  console.log("supra ancho es " + supra.ancho);
  console.log("supra alto es " + supra.alto);
  console.log("supra color es " + supra.color);
  console.log("supra name es " + supra.name);

  console.log("gtr ancho es " + gtr.ancho);
  console.log("gtr alto es " + gtr.alto);
  console.log("gtr color es " + gtr.color);
  console.log("gtr name es " + gtr.name);
}

function draw() {
  background(0);

  supraX += speed;
  gtrX -= speed;

  if (supraX > width - supra.ancho) {
    supraX = width - supra.ancho;
    speed * -1;
  } else if (supraX < 0) {
    supraX = 0;
    speed * -1;
  }

  if (gtrX < gtr.ancho) {
    gtrX = gtr.ancho;
    speed *= -1;
  } else if (gtrX > width) {
    gtrX = width;
    speed *= -1;
  }

  if (jumping) {
    if (jumpCounter < 10) {
      supraY -= 5;
    } else if (jumpCounter < 20) {
      supraY += 5;
    } else {
      jumping = false;
    }
    jumpCounter++;
  } else {
    supraY = height - height / 4;
  }

  supra.display(supraX, supraY);
  gtr.display(gtrX, gtrY);
}

function salto() {
  if (!jumping) {
    jumping = true;
    jumpCounter = 0;
  }
}

function keyPressed() {
  if (keyCode === 32) {
    salto();
  }
}
