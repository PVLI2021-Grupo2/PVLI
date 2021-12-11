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
      /**
       * Muestra el diálogo correspondiente al objeto pulsado
       * así como manda apuntar la información asociada al mismo
       */
    showtext(){
        let text_notebook = this.jsonfile["prismatic"][0][this.roomName][this.num][this.name]
        let idi = this.jsonfile["prismatic"][0][this.roomName][this.num]["id"]
        this.textbox = new Dialogue(this.scene);
        this.textbox.changeDialogue(text_notebook);
        this.scene.backactive(false);
        if(this.event === true){
            let apuntado = false;
            this.scene.game.estadoCompartido.observaciones.forEach(element => {
                if(element.text_notebook===text_notebook) apuntado=true;
              });
            if(!apuntado){
                this.scene.game.estadoCompartido.observaciones.push({text_notebook,id:idi,activated:false})
                this.scene.game.room1objects[this.num]=false;
            }
           
            //this.scene.game.estadoCompartido.observaciones_id.push( this.jsonfile["prismatic"][0][this.roomName][this.num]["id"])
        }      
    }
    setfalse(){
        this.event=false;
    }

}
