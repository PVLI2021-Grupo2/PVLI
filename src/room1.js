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

    this.ball=new clickableobjects(this,200,220,'objects','object_ball',true,dialogJson,"room1",0);
 
    this.cartoy =new clickableobjects(this,150,250,'objects', 'object_cartoy' ,true,dialogJson,"room1",1);

    this.books=new clickableobjects(this,270,78,'objects','object_books',false,dialogJson,"room1",2);

    this.picture=new clickableobjects(this,50,60,'objects','object_picture',false,dialogJson,"room1",3);

    this.drawing=new clickableobjects(this,800,130,'objects','object_drawing',false,dialogJson,"room1",4);

    this.bag=new clickableobjects(this,700,250,'objects','object_bag',false,dialogJson,"room1",5);

    this.sara=new clickableobjects(this,100,130,'objects','object_sara',false,dialogJson,"room1",6);
    this.smith=new clickableobjects(this,750,100,'objects','object_smith',false,dialogJson,"room1",7);
    this.objectarray = [this.ball,this.cartoy,this.books,this.picture,this.drawing,this.bag,this.sara,this.smith];

    this.objectarray.forEach(elem => elem.setInteractive()
    .setOrigin(0,0)
    .once('pointerdown', () => {elem.showtext()}))

   }
   
}