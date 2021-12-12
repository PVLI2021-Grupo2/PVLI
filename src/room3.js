import BaseRoom from "./baseRoom.js";
import clickableobjects from "./clickableobjects.js";
import NoteBook from "./notebook.js";

export default class Room3 extends BaseRoom{

    constructor() {
      super({ key: 'room3' },'roomsfinal-3');
    }  
    create(){
      super.create();
    }
  }