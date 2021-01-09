class Dustbin {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
    //    this.leftEdge = createSprite(x-100, y-100,20, 300 );
	//    this.leftEdge.shapeColor = "black";
	
	//     this.rightEdge = createSprite(x+100, y-100,20, 300);
	//     this.rightEdge.shapeColor = "black";

	//     this.bottomEdge = createSprite(x,y + 40, 200, 20);
    //     this.bottomEdge. shapeColor = "black";
        
        this.leftBody = Bodies.rectangle(x-100, y-100,20, 300, options); 
        this.rightBody = Bodies.rectangle(x+100, y-100,20, 300, options); 
        this.bottomBody = Bodies.rectangle(x,y + 40, 200, 20, options); 

        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
        World.add(world, this.bottomBody);

        this.x = x;
        this.y = y;

        this.image = loadImage("dustbingreen.png");

    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y-100, 200, 300);
        pop();
    }
             
}