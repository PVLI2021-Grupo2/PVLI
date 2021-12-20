import BaseRoom from "./baseRoom.js";
/**
 * clase que crea la habitación y escena de Room1
 */
export default class Room1 extends BaseRoom{

  constructor() {
    super({ key: 'room1' },'roomsfinal-1');
  } 
  create(){
    super.create();
   }
   
}