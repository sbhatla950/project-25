class Paper {
    constructor (x, y, radius) {
        var options = {
            'isStatic' : false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        
       this.radius = radius;
       this.body =  Matter.Bodies.circle(x, y, radius, options )
       World.add(world, this.body);
       this.image = loadImage("paper.png");
       
    }
    

    display(){
        var pos =this.body.position;
        push();
        fill("white");
        //ellipse(pos.x,pos.y, this.radius*2);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius*3, this.radius*3);
        pop();
      }

}