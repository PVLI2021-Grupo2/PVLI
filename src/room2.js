import BaseRoom from "./baseRoom.js";
import clickableobjects from "./clickableobjects.js";
import NoteBook from "./notebook.js";

export default class Room2 extends BaseRoom{

    constructor() {
      super({ key: 'room2' },'roomsfinal-2');
    }
     create(){
       let dialogJson = this.cache.json.get('dialog');
       super.create();
  
       this.tetera =new clickableobjects(this,350,150,'objects', 'object_cup',true,dialogJson,"room2",0);
       this.tetera.setInteractive();
       this.tetera.once('pointerdown', () => {this.tetera.showtext()});

       this.cat = new clickableobjects(this,300,350,'objects', 'object_cat',true,dialogJson,"room2",0);
       this.cat.setInteractive();
      
       this.dog=new clickableobjects(this,400,350,'objects', 'object_dog',true,dialogJson,"room2",1);
      }
  }