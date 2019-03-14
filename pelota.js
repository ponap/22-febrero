class ball{
	constructor(){
		this.x1 = random(0,width);
		this.y1 = random(0,height);
		this.vely = random(5,10);
		this.velx = random(5,10);
	}
	mostrar(){
		//stroke(int(random(0,255)),int(random(0,255)),int(random(0,255)));
		fill(int(random(0,255)),int(random(0,255)),int(random(0,255)));
		//fill(255,0,0);
		ellipse(this.x1,this.y1,50,50);
	}
	caer(){
		this.y1 = this.y1 + this.vely;
	}
	
	moverderecha(){
		this.x1 = this.x1 + this.velx;
	}
	
	saliry(){
		var res;
		if(this.y1 > height || this.y1<0){
			res = true;
		}
		else{
			res = false;
		}
		return res;
	}
	salirx(){
		var res;
		if(this.x1 > width || this.x1<0){
			res = true;
		}
		else{
			res = false;
		}
		return res;
	}
	regresarx(){
		this.velx = -this.velx;
	}
	regresary(){
		this.vely = -this.vely;
	}
}
