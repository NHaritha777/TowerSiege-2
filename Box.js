class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic': true
    }
    this.visibility= 255;

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){

    var pos =this.body.position;
    var angle = this.body.angle;

    if(this.body.speed<3){
    this.body.display;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("pink");
    strokeWeight(2.5);
    rect(0, 0, this.width, this.height);
    pop();
      }
      
      else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      //rect(this.body.position.x,this.body.position.y,this.width, this.height);
      pop();    }
  }
};