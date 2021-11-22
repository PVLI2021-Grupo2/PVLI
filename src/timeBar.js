/**
 * Clase para crear el objeto prismáticos que te lleva a la habitación asociada 
 * @extends Phaser.GameObjects.Sprite
 */

export default class TimeBar extends Phaser.GameObjects.Sprite {
  
    /**
     * Constructor de TimeBar
     * @param {Phaser.Scene} scene Escena a la que pertenece la time bar
     * @param {number} x coordenada x
     * @param {number} y coordenada y     
     */
    constructor( scene,x, y) {
      super(scene, x, y,'clock');
      this.scene.add.existing(this);  
    } 
  }