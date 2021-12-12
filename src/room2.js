import BaseRoom from "./baseRoom.js";
import clickableobjects from "./clickableobjects.js";
import NoteBook from "./notebook.js";

export default class Room2 extends BaseRoom{

    constructor() {
      super({ key: 'room2' },'roomsfinal-2');
    }
     create(){
       super.create();
      }
  }