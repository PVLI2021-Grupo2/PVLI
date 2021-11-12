import Dialogue from "./dialogue.js";
import ObjetoDialogue from "./objetoDialogue.js";

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
    constructor( scene,x, y) {
      super(scene, x, y, 'earphone');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this, true);
     
    }
  
    
  }