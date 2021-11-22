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

    this.tetera =new clickableobjects(this,200,100,'binoculars',true,dialogJson,"room1");
    this.tetera.setInteractive();
    this.tetera.once('pointerdown',()=>{this.tetera.showtext()});
    
   }
   
}