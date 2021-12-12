import BaseRoom from "./baseRoom.js";
import clickableobjects from "./clickableobjects.js";
import Days from "./days.js";
import NoteBook from "./notebook.js";

export default class Room1 extends BaseRoom{

  constructor() {
    super({ key: 'room1' },'roomsfinal-1');
  } 
  create(){
    super.create();
   }
   
}