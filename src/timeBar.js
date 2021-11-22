/**
 * Clase para crear un timebar que controla el tiempo
 * 
 */

export default class TimeBar{
  
    /**
     * Constructor de TimeBar
     * @param {Phaser.Scene} scene Escena a la que pertenece la time bar
     * @param {number} x coordenada x
     * @param {number} y coordenada y     
     */
    constructor(scene) {
        this.scene= scene;
        let posX = this.scene.cameras.main.centerX*0.5;
        let posY = this.scene.cameras.main.height*0.9;
        this.total_time = this.scene.add.sprite(posX,posY,'red');
        this.remaining_time = this.scene.add.sprite(posX+400,posY,'green');
        this.clock = this.scene.add.sprite(posX-175,posY,'clock');
        this.remaining_time.setScaleY=.1;

      
      this.scene.add.existing(this);  
    } 
//resta horas o lo que es lo mismo disminuye el tamaño de la barra
    menostiempo(a){
       
        console.log(a);
    }
    //suma horas o lo que es lo mismo aumenta el tamaño de la barra
    mastiempo(b){
        console.log(b);
    }

   

    // create(){
    //     //creamos los 3 sprites que usará timebar

    //     this.clock= this.add.sprite(50,100,'clock');
    //     this.total_time = this.add.Sprite(75,100,'red');
    //     this.remaining_time= this.add.Sprite(100,100,'green');
    // }
  }