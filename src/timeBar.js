/**
 * Clase para crear un timebar que controla el tiempo
 * 
 */

export default class TimeBar extends Phaser.GameObjects.Sprite {
  
    /**
     * Constructor de TimeBar
     * @param {Phaser.Scene} scene Escena a la que pertenece la time bar
     * @param {number} x coordenada x
     * @param {number} y coordenada y    
     * 
     */
    constructor(scene,x,y) {
        super(scene,x,y)
        this.scene= scene;
        
        this.total_time = this.scene.add.sprite(x,y,'red');
        this.remaining_time = this.scene.add.sprite(x,y,'green');
        this.clock = this.scene.add.sprite(x-175,y,'clock');
        this.clock.scaleY = this.clock.scaleY/2;
        this.scene.add.existing(this);  

            this.init();

            
    } 
  

    init()
    {

        
        //contador de tazas
        this.tazas_totales=0;
        //horas totales por dia
        this.horas_totales=19;
        //horas disponibles o restantes
        this.horas_disponibles=19;
        
    }
        
//resta horas o lo que es lo mismo disminuye el tamaño de la barra
    menostiempo(a){
        if(this.remaining_time.scaleX>=0.01){
            this.horas_disponibles--;
            this.remaining_time.scaleX-=(1/this.horas_totales);
       
        }
       
      
       else this.remaining_time.scaleX-=0;
        console.log(a);
        console.log("quedan "+this.horas_disponibles+"horas");
    }
    //suma horas o lo que es lo mismo aumenta el tamaño de la barra
    
    //suma horas, aumentando el tamaño de la barra, con la condicion de no haber
    //consumido más de dos tazas
    mastiempo(b){

       
       console.log(this.tazas_totales)
        
       //podemos tomar café siempre y cuando hayamos gastado dos horas de nuestro día
        if(this.horas_disponibles<this.horas_totales-2 && this.tazas_totales<2){
            this.tazas_totales++;
            this.remaining_time.scaleX+=(1/this.horas_totales);
        }       
        //si hemos consumido nuestras dos tazas de café no podremos tomar más
       

       else if (this.tazas_totales>2  ||this.remaining_time.scaleX >= 1.4  ){
        console.log("has tomado mucho café");
        this.remaining_time.scaleX+=0;
        
       }
       console.log(b);
    }

    // create(){
    //     //creamos los 3 sprites que usará timebar

    //     this.clock= this.add.sprite(50,100,'clock');
    //     this.total_time = this.add.Sprite(75,100,'red');
    //     this.remaining_time= this.add.Sprite(100,100,'green');
    // }
  }