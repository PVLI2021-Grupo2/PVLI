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
        //contador de las horas de timebar (incompleto)
        this.horas_totales=19;
        
    }
        
//resta horas o lo que es lo mismo disminuye el tamaño de la barra
    menostiempo(a){
        if(this.remaining_time.scaleX>=0.01)
       
       this.remaining_time.scaleX-=0.1;
       
       else this.remaining_time.scaleX-=0;
        console.log(a);
    }
    //suma horas o lo que es lo mismo aumenta el tamaño de la barra
    
    mastiempo(b,tazas){

       this.tazas_totales++;
       console.log(this.tazas_totales)
        
        if(this.remaining_time.scaleX<1.4 && this.tazas_totales<=2)
       this.remaining_time.scaleX+=0.1;

       else if(this.tazas_totales > 2) console.log("has tomado mucho café");

       else if (this.tazas_totales>2  ||this.remaining_time.scaleX >= 1.4  )
        this.remaining_time.scaleX+=0;
        console.log(b);
    }

   

    // create(){
    //     //creamos los 3 sprites que usará timebar

    //     this.clock= this.add.sprite(50,100,'clock');
    //     this.total_time = this.add.Sprite(75,100,'red');
    //     this.remaining_time= this.add.Sprite(100,100,'green');
    // }
  }