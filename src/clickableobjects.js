import Dialogue from "./dialogue.js";
import NoteBook from "./notebook.js";
export default class clickableobjects extends Phaser.GameObjects.Sprite {
    constructor( scene , x, y, name, event,json,roomName, notebook) {
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
        this.scene.backactive(false);
        if(this.event === true){
            
        }
    }
    setfalse(){
        this.event=false;
    }

}
