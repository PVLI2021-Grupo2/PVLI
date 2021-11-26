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
      //this.scene.physics.add.existing(this, true);
      this.arrayText = dialog;
      this.roomName = roomName;
      this.event = "event";
      //this.number = 0;
      
    }
    showdialog(hora_consultada){
      
      this.textbox = new Dialogue(this.scene);
      let text =this.arrayText["earphone"][0][this.roomName][hora_consultada][this.event+hora_consultada]
      //entramos a la zona de los auriculares, a la habitación, al numero del dialogo que va por la hora
      this.textbox.changeDialogue(text)
      if(this.arrayText["earphone"][0][this.roomName][hora_consultada]["isevent"]){
         this.scene.game.estadoCompartido.observaciones.push({text,id:1})
      }
      console.log(hora_consultada)

      
      //console.log(this.arrayText["earphone"][0]["room1"][2]["event2"])
      //this.textbox.changeDialogue(this.arrayText["text"][this.roomNum-1][room][this.number-1][this.event+this.number])
      // this.number +=1;
      // if(this.number>23)this.number=0;
      
      //this.textbox.changeDialogue(this.arrayText["earphone"][0][this.roomName][hora_consultada][this.event+hora_consultada]);
      //this.textbox.changeDialogue(this.arrayText["text"][this.roomNum-1][room][this.number-1][this.event+this.number])
      //this.number +=1;
      //if(this.number>2)this.number=1;

      
      
    }
  
    
  }