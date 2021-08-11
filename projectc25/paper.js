class Paper {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:.3,
            friction:0,
            density:1.2
            }
         
            this.image = loadImage("paper.png")
            this.body=Bodies.circle(x,y,r, options);
            World.add(world,this.body)
    
        }

    display(){
        
         var pos=this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
    
        
    }
}
