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
        this.total_time = this.scene.add.sprite(x+50,y-10,'red');
        this.remaining_time = this.scene.add.sprite(x+50,y-10,'green');
        this.scene.add.existing(this);  
        this.init();
        
    } 

    init()
    {
        //contador de tazas
        this.tazas_totales=0;
        //horas totales por dia
        this.horas_totales=18;
        //horas disponibles o restantes
        this.horas_disponibles=18;
        //horas que se pasan para la gestión de eventos
        this.horas_eventos=9;
        this.updateTimes();
    }
/**
 * Metodo que controla la parte de la interfaz que muestra las horas que quedan
 * la barra de tiempo y la hora real
 */
 updateTimes(){
    //creamos los fondos de la barra de horas disponibles
    this.hora_actual_background = this.scene.add.sprite(160,470,'dialog');
    this.hora_actual_background.scaleY = this.hora_actual_background.scaleY/4;
    this.hora_actual_background.scaleX = this.hora_actual_background.scaleX/5;
    this.hora_disponible_background = this.scene.add.sprite(750,470,'dialog');
    this.hora_disponible_background.scaleY /=4;
    this.hora_disponible_background.scaleX /=3.75;
    this.coffe_disponible_background = this.scene.add.sprite(950,470,'dialog');
    this.coffe_disponible_background.scaleY /=4;
    this.coffe_disponible_background.scaleX /=5.75;
    
    
    this.scene.add.text(100,470,"Hora: ");
    this.scene.add.text(650,470,"Horas disponibles:")
    this.scene.add.text(880,440,"Tazas disponibles:",{wordWrap:{width: 100}})


    //texto que muestra la hora actual
    this.texto_hora_actual=this.scene.add.text(160,470,this.horas_eventos+":00",{ fontFamily: 'Arial', color: '#00ff00', wordWrap: { width: 310 } });

    //texto que muestra las horas disponibles
    this.texto_hora_disponible=this.scene.add.text(830,470,this.horas_disponibles,{ fontFamily: 'Arial', color: '#00ff00', wordWrap: { width: 310 } });
    this.scene.game.nowtime = this.horas_eventos;

    //texto que muestra las tazas de café disponibles
    this.texto_coffe_disponible=this.scene.add.text(930,470,(2-this.tazas_totales),{ fontFamily: 'Arial', color: '#00ff00', wordWrap: { width: 200 } });
    this.scene.game.nowtime = this.horas_eventos;
}
        
        
//resta horas o lo que es lo mismo disminuye el tamaño de la barra
menostiempo(a){
    if(this.remaining_time.scaleX>=0.01){
        if(this.horas_eventos>=23){
            this.horas_eventos=-1;
        }
        //disminuimos las horas disponibles
        this.horas_disponibles--;
        //aumentamos la hora real
        this.horas_eventos++;
        this.remaining_time.scaleX-=(1/this.horas_totales);
    }
    //condición para cambiar de escena hacia pregunta para pasar de día por falta de tiempo
    else if(this.horas_disponibles<=0){
      //  this.scene.
    }
    else this.remaining_time.scaleX-=0;   
    this.updateTimes();
    if(this.horas_disponibles===0){
        this.scene.scene.switch('pregunta')
    }
}
    //suma horas, aumentando el tamaño de la barra, con la condicion de no haber
    //consumido más de dos tazas
    mastiempo(b){
       //podemos tomar café siempre y cuando hayamos gastado dos horas de nuestro día
        if(this.horas_disponibles<this.horas_totales && this.tazas_totales<2){
            //añadimos uno al contador de tazas consumidas, y al de horas disponibles
            this.tazas_totales++;
            this.horas_disponibles++;
            this.remaining_time.scaleX+=(1/this.horas_totales);
        }       
        //si hemos consumido nuestras dos tazas de café no podremos tomar más
        else if (this.tazas_totales>2  ||this.remaining_time.scaleX >= 1.4  ){
        this.remaining_time.scaleX+=0; 
       }     
       this.updateTimes();
    }
  }