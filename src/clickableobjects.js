import Dialogue from "./dialogue.js";
import NoteBook from "./notebook.js";
export default class clickableobjects extends Phaser.GameObjects.Sprite {
    constructor( scene , x, y, name, obname, event,json, roomName, num) {
        super(scene, x, y, name,obname);
        this.name =  obname;
        this.scene = scene;
        this.scene.add.existing(this);  
        this.event = event;
        this.jsonfile = json;
        this.roomName = roomName;
        this.num = num;
      }
    showtext(){
        let text = this.jsonfile["prismatic"][0][this.roomName][this.num][this.name]
        let idi = this.jsonfile["prismatic"][0][this.roomName][this.num]["id"]
        this.textbox = new Dialogue(this.scene);
        this.textbox.changeDialogue(text);
        this.scene.backactive(false);
        if(this.event === true){
            this.scene.game.estadoCompartido.observaciones.push({text,id:idi,activated:false})
            this.scene.game.room1objects[this.num]=false;
            //this.scene.game.estadoCompartido.observaciones_id.push( this.jsonfile["prismatic"][0][this.roomName][this.num]["id"])
        }      
    }
    setfalse(){
        this.event=false;
    }

}
