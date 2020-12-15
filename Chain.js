class Chain {
    constructor(bodyA, pointB) {
        var options = {

            bodyA: bodyA,
            //bodyB: bodyb,
            stiffness: .04,
            length: 2
        }
        this.pointB = pointB
        //this.chain = Constraint.create(options);
        this.sling = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly() {
        this.chain.bodyA = null;
    }
    attach(body){
        this.chain.bodyA= body;
    }
    display() {
        if (this.chain.bodyA) {

            var pointA = this.sling.bodyA.position
            var pointB = this.pointB;
            push()
            strokeWeight(5)
            stroke("black")

            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y)
            pop()
        }
    }
}