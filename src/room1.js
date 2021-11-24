import BaseRoom from "./baseRoom.js";
import clickableobjects from "./clickableobjects.js";
import NoteBook from "./notebook.js";

export default class Room1 extends BaseRoom{

  constructor() {
    super({ key: 'room1' },'room_smith');
  } 
  create(){
    let dialogJson = this.cache.json.get('dialog');
    super.create();

    this.tetera =new clickableobjects(this,200,100,'tetera',true,dialogJson,"room1",0);
    this.tetera.setInteractive();
    this.tetera.once('pointerdown', () => {this.tetera.showtext()});

    this.pastilla =new clickableobjects(this,400,100,'pastilla',true,dialogJson,"room1",1);
    this.pastilla.setInteractive();
    this.pastilla.once('pointerdown', () => {this.pastilla.showtext()});
       
   }
   
}