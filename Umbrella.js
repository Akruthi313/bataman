class Umbrella{
    constructor(x, y) {
        var options = {
            friction: 0.1,
            isStatic: true,
        }
       
        this.r = 70;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        noFill();
        stroke("green");
        ellipse(pos.x, pos.y, this.r, this.r);
      }
}
