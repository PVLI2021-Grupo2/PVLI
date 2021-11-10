/**
 * Clase para los objetos estrella que el jugador ha de recoger
 * Una estrella aparece sobre una base. Cuando el jugador la recoge, se crea 
 * una nueva estrella en otra posición, si el juego no ha terminado.
 * @extends Phaser.GameObjects.Sprite
 */
 export default class Prismaticos extends Phaser.GameObjects.Sprite {
  
    /**
     * Constructor de prismátioc
     * @param {Phaser.Scene} scene Escena a la que pertenece la plataforma
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     */
    constructor( scene,x, y) {
      super(scene, x, y, 'binoculars');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this, true);
     
    }
  
    
  }
  