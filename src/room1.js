import BaseRoom from "./baseRoom.js";
import clickableobjects from "./clickableobjects.js";
import NoteBook from "./notebook.js";

export default class Room1 extends BaseRoom{

  constructor() {
    super({ key: 'room1' },'roomsfinal-1');
  } 
  create(){
    let dialogJson = this.cache.json.get('dialog');
    super.create();


    this.ball=new clickableobjects(this,245,250,'objects','object_ball',this.game.room1objects[0],dialogJson,"room1",0);
 
    this.cartoy =new clickableobjects(this,300,330,'objects', 'object_cartoy' ,this.game.room1objects[1],dialogJson,"room1",1);

    this.books=new clickableobjects(this,315,110,'objects','object_books',this.game.room1objects[2],dialogJson,"room1",2);

    this.picture=new clickableobjects(this,140,85,'objects','object_picture',this.game.room1objects[3],dialogJson,"room1",3);

    this.drawing=new clickableobjects(this,900,200,'objects','object_drawing',this.game.room1objects[4],dialogJson,"room1",4);

    this.bag=new clickableobjects(this,780,350,'objects','object_bag',this.game.room1objects[5],dialogJson,"room1",5);

    this.objectarray = [this.ball,this.cartoy,this.books,this.picture,this.drawing,this.bag];

    this.objectarray.forEach(elem => elem.setInteractive()
    .setOrigin(0,0)
    .once('pointerdown', () => {elem.showtext()}))

   }
   
}