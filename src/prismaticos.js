/**
 * Clase para crear el objeto prismáticos que te lleva a la habitación asociada 
 * @extends Phaser.GameObjects.Sprite
 */


 export default class Prismaticos extends Phaser.GameObjects.Sprite {
  
    /**
     * Constructor de prismático
     * @param {Phaser.Scene} scene Escena a la que pertenecen los prismáticos
     * @param {number} x coordenada x
     * @param {number} y coordenada y     
     */
    constructor( scene,x, y) {
      super(scene, x, y,'binoculars');
      this.scene.add.existing(this);  
    } 
  }
  