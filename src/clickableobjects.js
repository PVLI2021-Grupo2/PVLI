import Dialogue from "./dialogue.js";
/**
 * Clase que crea los objetos clickables de cada una de las escenas de habitación,
 * adjudicándoles escena, posición, nombre, eventos asociados y nombre de la habitación a que pertenecen
 */
export default class clickableobjects extends Phaser.GameObjects.Sprite {
    constructor( scene , x, y, name, obName,json, roomName) {
        super(scene, x, y, name,obName);
        this.name =  obName;
        this.scene = scene;
        this.scene.add.existing(this);  
        this.jsonFile = json;
        this.roomName = roomName;
      }
      
      /**
       * Muestra el diálogo correspondiente al objeto pulsado
       * así como manda apuntar la información asociada al mismo
       */
    showtext(){
        let file = this.jsonFile["prismatic"][this.roomName][this.name];
        let dialog = file["text"];
        let idi = file["id"];
        let isevent = file["isevent"];
        let notebookinfo = file["notebookinfo"];
        this.textBox = new Dialogue(this.scene);
        this.textBox.changeDialogue(dialog);
        this.scene.backActive(false);
        if(isevent === true){
            
            let apuntado = false;
            this.scene.game.estadoCompartido.observaciones.forEach(element => 
                {
                if(element.textNotebook === notebookinfo) apuntado=true;
                });
            if(!apuntado){
                this.scene.game.estadoCompartido.observaciones.push({textNotebook: notebookinfo,id:idi,activated:false})               
            }
        }      
    }
}
