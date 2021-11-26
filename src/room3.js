import BaseRoom from "./baseRoom.js";
import clickableobjects from "./clickableobjects.js";
import NoteBook from "./notebook.js";

export default class Room3 extends BaseRoom{

    constructor() {
      super({ key: 'room3' },'roomsfinal-3');
    }  
    create(){
      let dialogJson = this.cache.json.get('dialog');
      super.create();
 
      this.charles =new clickableobjects(this,250,200,'objects', 'object_charles',false,dialogJson,"room3",-1);

      this.objectarray = [this.charley];
      this.objectarray.forEach(elem => elem.setInteractive()
      .setOrigin(0,0)
      .once('pointerdown', () => {elem.showtext()}))
    }
  }