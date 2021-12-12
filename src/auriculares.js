import Dialogue from "./dialogue.js";
import TimeBar from "./timeBar.js";

/**
 * Clase para crear el objeto auriculares que al ser pulsado te muestra
 * un cuadro de texto con información de la habitación asociada
 * @extends Phaser.GameObjects.Sprite
 */
 export default class Auriculares extends Phaser.GameObjects.Sprite {
  
    /**
     * Constructor de auriculares
     * @param {Phaser.Scene} scene Escena a la que pertenecen los auriculares
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     */
    constructor( scene,x, y,dialog,roomName) {
      super(scene, x, y, 'earphone');
      this.scene.add.existing(this);
      this.scene =scene;
      this.json_file = dialog;
      this.roomName = roomName;
    }

    /**
     * Muestra el diálogo correspondiente a la hora en la que estemos al haber pulsado el auricular
     * así como manda apuntar la información asociada a lo escuchado -si es relevante-
     */
    showdialog(hora_consultada){
      if (hora_consultada>23) hora_consultada-=24;
      this.textbox = new Dialogue(this.scene);
      let dialog =this.json_file["earphone"][this.roomName]["event"+hora_consultada]["text"]
      let text_notebook =this.json_file["earphone"][this.roomName]["event"+hora_consultada]["notebookinfo"]
      //let id = this.arrayText["earphone"][this.roomName]["event"+hora_consultada]["id"]
      //entramos a la zona de los auriculares, a la habitación, al numero del dialogo que va por la hora
      this.textbox.changeDialogue(dialog)      
      if(this.json_file["earphone"][this.roomName]["event"+hora_consultada]["isevent"]){
        //Busca si se ha apuntado lo mismo 
        let apuntado = false;
        this.scene.game.estadoCompartido.observaciones.forEach(element => {
          if(element.text_notebook===text_notebook) apuntado=true;
        });
        //Si no se apunta
        if(!apuntado)
         this.scene.game.estadoCompartido.observaciones.push({text_notebook,id:0})
      }
    } 
  }