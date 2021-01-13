class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200) {
    var position=[this.body.position.x,this.body.position.y]    //150,200
    this.trajectory.push(position);     //trajectory=[[150,200],[160,210]]    [0][0]: 150     [0]: [150,200]  [0][0]:150   [0][1]:200
    }
    for(var i=0; i< this.trajectory.length;  i++)
{
    image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1])
                                       // [1][0],               [1][1]
                                       // [2][0]                [2][1]
                                        
  }
}
}