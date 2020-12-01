class Bob{
    constructor(x,y){
      
        var options={
            restitution:0.3,
            friction:0.5,
            density:0.3
    
        }
       
            this.body=Bodies.circle(x,y,20,options);
            this.radius=20
            World.add(world,this.body);
               

      
   
    }
   display(){
       push ();
      // translate(this.body.position.x,this.body.position.y);
      // rotate(this.body.angle);
     ellipseMode(RADIUS);
     ellipse(this.body.position.x,this.body.position.y,20,20);
       pop ();
   }

}