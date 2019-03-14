var pelota = [];
var cantidad = 100;

function setup() {
  createCanvas(400, 400);
	for(var i = 0;i<cantidad;i++){
	pelota[i] = new ball();
	}
}

function draw() {
  background(0,190,160);
	for(var i = 0;i<cantidad;i++){
	pelota[i].mostrar();
	pelota[i].caer();
	pelota[i].moverderecha();
	if(pelota[i].saliry()){
		pelota[i].regresary();
	}
	if(pelota[i].salirx()){
		pelota[i].regresarx();
	}
	}
}
