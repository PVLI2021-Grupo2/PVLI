import BaseRoom from "./baseRoom.js";
/**
 * clase que crea la habitación y escena de Room2
 */
export default class Room2 extends BaseRoom{

    constructor() {
      super({ key: 'room2' },'roomsfinal-2');
    }
     create(){
       super.create();
      }
  }