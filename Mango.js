class Mango{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.body=Bodies.circle(x,y,20,options)
    this.width= 20
    this.height=20
    this.Image= loadImage("Plucking mangoes/mango.png")
    World.add(world,this.body)

    }
    display(){
    var pos= this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.Image,0,0,20,20)
    pop()
    }
}