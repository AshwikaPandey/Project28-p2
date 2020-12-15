class Tree extends BaseClass{
constructor(x,y,width,height){
    super(x,y,600,200)
    this.Image= loadImage("Plucking mangoes/tree.png")
}
display(){
    imageMode(CENTER)
    image(this.Image,600,550,400,400)
    super.display();
}
}
