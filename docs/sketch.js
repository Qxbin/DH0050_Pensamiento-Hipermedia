// Where is the car
let x, y;


class Carro {
  constructor(alto,ancho,color,name){
    this.alto = alto;
    this.ancho = ancho;
    this.color = color;
    this.name = name;
  } 
}    



function setup() {
 
  createCanvas(400, 200);
  // Starts in the middle
  y = height - height/4;
  x = 0;
  let miCarro = new Carro (10,20,(red),"Elcirveralcon");
  
  console.log("miCarro anchoh is: " + miCarro.ancho);
  console.log("miCarro alto is: " + miCarro.alto);
  console.log("Nombre de miCarro es: " + miCarro.name);
}

function draw() {
  background(0);  
  display();
  move();
}

function move(){
  // Jiggling randomly
  y = y + random(-2, 2);
  
  if (x > width) {
    // Reset 
    x = 0;
      y = height - height/4;
  } else {
    // Moving up at a constant speed
    x = x + 3;
  }
}

function display(){
  // Draw a car
  stroke(50);
  fill(223,124,80);
  rect(x, y, 40, 20);
}
