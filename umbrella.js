class umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.image = loadImage("images/umbrella2.jpg");
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        rotate(angle);
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
    }
}