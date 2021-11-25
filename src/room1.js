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

    this.tetera =new clickableobjects(this,700,350,'objects', 'object_cup',true,dialogJson,"room1",0);
    this.tetera.setInteractive();
    //this.tetera.once('pointerdown', () => {this.tetera.showtext()});

    // this.pastilla =new clickableobjects(this,400,100,'pastilla',true,dialogJson,"room1",1);
    // this.pastilla.setInteractive();
    // this.pastilla.once('pointerdown', () => {this.pastilla.showtext()});
    
    this.cartoy =new clickableobjects(this,300,330,'objects', 'object_cartoy' ,true,dialogJson,"room1",1);
    this.cartoy.setInteractive();

    this.books=new clickableobjects(this,315,110,'objects','object_books',true,dialogJson,"room1",2);
    this.books.setInteractive();

    this.picture=new clickableobjects(this,140,85,'objects','object_picture',true,dialogJson,"room1",3);
    this.picture.setInteractive();

    this.drawing=new clickableobjects(this,900,200,'objects','object_drawing',true,dialogJson,"room1",4);
    this.drawing.setInteractive();

    this.bag=new clickableobjects(this,780,350,'objects','object_bag',true,dialogJson,"room1",5);
    this.bag.setInteractive();

    this.ball=new clickableobjects(this,245,250,'objects','object_ball',true,dialogJson,"room1",6);
    this.ball.setInteractive();
   }
   
}