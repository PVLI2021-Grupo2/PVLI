import BaseRoom from "./baseRoom.js";

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

    
//metodo que recibe la habitación, crea una habitación fantasma 
//y te lleva a la de destino
    gogo(a){
      this.room_destiny= new BaseRoom();
      this.room_destiny.cometoroom(a);
      
    }
  
    
  }
  