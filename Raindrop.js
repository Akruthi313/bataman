class Raindrop{
    constructor(x, y) {
        var options = {
            friction: 0.1,
        }
       
        this.r = 3.5;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x, pos.y, this.r, this.r);
      }

      update(){
        if(this.body.position.y>400){
            Matter.Body.setPosition(this.body,{x :random(0,400),y :random(-400,0)})
            

        }
      }
}