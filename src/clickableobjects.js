import Dialogue from "./dialogue.js";

export default class clickableobjects extends Phaser.GameObjects.Sprite {
    constructor( scene,x, y, name, event,json,roomName) {
        super(scene, x, y, name);
        this.scene = scene;
        this.scene.add.existing(this);  
        this.event = event;
        this.jsonfile = json
        this.roomName = roomName
      }
    create(){
       
    }
    showtext(){
        this.textbox = new Dialogue(this.scene)
        this.textbox.changeDialogue(this.jsonfile["prismatic"][0][this.roomName][0]['tetera'])
    }

}
