class SlingShot {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:17
        }
    this.sling=Constraint.create(options)
    World.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        //line(x1.x1.x2.x2);
        if(this.sling.bodyA){
            line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);      
        }
 
    }
}