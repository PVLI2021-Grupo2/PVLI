import Dialogue from "./dialogue.js";
export default class clickableobjects extends Phaser.GameObjects.Sprite {
    constructor( scene , x, y, name, obname,json, roomName) {
        super(scene, x, y, name,obname);
        this.name =  obname;
        this.scene = scene;
        this.scene.add.existing(this);  
        this.jsonfile = json;
        this.roomName = roomName;
      }
      /**
       * Muestra el diálogo correspondiente al objeto pulsado
       * así como manda apuntar la información asociada al mismo
       */
    showtext(){
        let file = this.jsonfile["prismatic"][this.roomName][this.name];
        let dialog = file["text"];
        let idi = file["id"];
        let isevent = file["isevent"];
        let notebookinfo = file["notebookinfo"];
        this.textbox = new Dialogue(this.scene);
        this.textbox.changeDialogue(dialog);
        this.scene.backactive(false);
        if(isevent === true){
            let apuntado = false;
            this.scene.game.estadoCompartido.observaciones.forEach(element => 
                {
                if(element.text_notebook===dialog) apuntado=true;
                });
            if(!apuntado){
                this.scene.game.estadoCompartido.observaciones.push({text_notebook: notebookinfo,id:idi,activated:false})
                this.scene.game.room1objects[this.num]=false;
            }
        }      
    }
}
