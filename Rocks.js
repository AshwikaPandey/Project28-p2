class Rocks extends BaseClass {
    constructor(x, y, height, width) {
        super(x, y, 30, 30,30);
        this.Image = loadImage("Plucking mangoes/stone.png");
        // var options = {
        //     isStatic: false,
        //     restitution: 0,
        //     friction: 1,
        //     density: 1.2
        // }

    }
    display() {

        imageMode(CENTER);
        image(this.Image, 300, 600, this.width, this.height);
        super.display();
    }

};