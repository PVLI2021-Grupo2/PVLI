/**
 * Clase para crear un objeto de tipo café
 * @extends Phaser.GameObjects.Sprite
 */

 export default class Coffe extends Phaser.GameObjects.Sprite  {
  
    /**
     * Constructor de Coffe   
     * @param {Phaser.Scene} scene Escena a la que pertenece coffe
     * @param {number} x coordenada x
     * @param {number} y coordenada y    
     */
    constructor(scene,x,y) {
        super(scene, x ,y , 'objects','object_cup')
        
        this.scene= scene;
           
        this.scene.add.existing(this);  
    }    
  }