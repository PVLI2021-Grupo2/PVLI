import TimeBar from "./timeBar.js";
/**
 * Clase para crear un timebar que controla el tiempo
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

   

    
//resta horas o lo que es lo mismo disminuye el tamaño de la barra
    uso(){
      
    }
    // create(){
    //     //creamos los 3 sprites que usará timebar

    //     this.clock= this.add.sprite(50,100,'clock');
    //     this.total_time = this.add.Sprite(75,100,'red');
    //     this.remaining_time= this.add.Sprite(100,100,'green');
    // }
  }