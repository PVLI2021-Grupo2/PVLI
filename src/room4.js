import BaseRoom from "./baseRoom.js";
import clickableobjects from "./clickableobjects.js";
import NoteBook from "./notebook.js";

export default class Room4 extends BaseRoom{

    constructor() {
      super({ key: 'room4' },'roomsfinal-4');
    }
    create(){
      let dialogJson = this.cache.json.get('dialog');
      super.create();
 
      this.william =new clickableobjects(this,600,130,'objects', 'object_william',false,dialogJson,"room4",-1);

      this.objectarray = [this.william];
      this.objectarray.forEach(elem => elem.setInteractive()
      .setOrigin(0,0)
      .once('pointerdown', () => {elem.showtext()}))
    }
  }