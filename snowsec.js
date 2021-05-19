class Snowsec{
    constructor(x,y,r){

        var options={
            density:2,
            friction:2
            // restitution:0.2

        }
        this.body=Bodies.circle(x,y,r,options);
        var one= "snow5.webp";
        

        this.image=loadImage(one);
        


        this.body.scale=
        this.r=r;

        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,50);
        
       
    }
}