/**
 * Clase para crear un timebar que controla el tiempo, tanto el que se corresponde con la hora de juego
 * como aquel que gestiona la cantidad de horas que tenemos disponibles para realizar acciones  * 
 * a lo largo del juego
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
        this.totalTime = this.scene.add.sprite(x+50,y-10,'red');
        this.remainingTime = this.scene.add.sprite(x+50,y-10,'green');
        this.scene.add.existing(this);  
        this.init();
        
    } 

    init()
    {
        //contador de tazas
        this.tazasTotales=0;
        //horas totales por dia
        this.horas_totales=18;
        //horas disponibles o restantes
        this.horasDisponibles=18;
        //horas que se pasan para la gestión de eventos
        this.horasEventos=9;
        this.updateTimes();
    }
/**
 * Metodo que controla la parte de la interfaz que muestra las horas que quedan
 * la barra de tiempo y la hora real
 */
 updateTimes(){
    //creamos los fondos de la barra de horas disponibles
    this.horaActualBackground = this.scene.add.sprite(160,470,'dialog');
    this.horaActualBackground.scaleY = this.horaActualBackground.scaleY/4;
    this.horaActualBackground.scaleX = this.horaActualBackground.scaleX/5;
    this.horaDisponibleBackground = this.scene.add.sprite(750,470,'dialog');
    this.horaDisponibleBackground.scaleY /=4;
    this.horaDisponibleBackground.scaleX /=3.75;
    this.coffeeDisponibleBackground = this.scene.add.sprite(950,470,'dialog');
    this.coffeeDisponibleBackground.scaleY /=4;
    this.coffeeDisponibleBackground.scaleX /=5.75;
    
    
    this.scene.add.text(100,470,"Hora: ");
    this.scene.add.text(650,470,"Horas disponibles:");
    this.scene.add.text(880,440,"Tazas disponibles:",{wordWrap:{width: 100}});


    //texto que muestra la hora actual
    this.textoHoraActual=this.scene.add.text(160,470,this.horasEventos+":00",{ fontFamily: 'Arial', color: '#00ff00', wordWrap: { width: 310 } });

    //texto que muestra las horas disponibles
    this.textoHoraDisponible=this.scene.add.text(830,470,this.horasDisponibles,{ fontFamily: 'Arial', color: '#00ff00', wordWrap: { width: 310 } });
    this.scene.game.currentTime = this.horasEventos;

    //texto que muestra las tazas de café disponibles
    this.textoCoffeDisponible=this.scene.add.text(930,470,(2-this.tazasTotales),{ fontFamily: 'Arial', color: '#00ff00', wordWrap: { width: 200 } });
    this.scene.game.currentTime = this.horasEventos;
}
        
        
//resta horas o lo que es lo mismo disminuye el tamaño de la barra
menosTiempo(a){
    if(this.remainingTime.scaleX>=0.01){
        if(this.horasEventos>=23){
            this.horasEventos=-1;
        }
        //disminuimos las horas disponibles
        this.horasDisponibles--;
        //aumentamos la hora real
        this.horasEventos++;
        this.remainingTime.scaleX-=(1/this.horas_totales);
    }
    //condición para cambiar de escena hacia pregunta para pasar de día por falta de tiempo
    else if(this.horasDisponibles<=0){
      //  this.scene.
    }
    else this.remainingTime.scaleX-=0;   
    this.updateTimes();
    if(this.horasDisponibles===0){
        
        this.scene.scene.switch('pregunta');
        this.scene.scene.sendToBack('pregunta');
    }
}
    //suma horas, aumentando el tamaño de la barra, con la condicion de no haber
    //consumido más de dos tazas
    masTiempo(b){
       //podemos tomar café siempre y cuando hayamos gastado dos horas de nuestro día
        if(this.horasDisponibles<this.horas_totales && this.tazasTotales<2){
            //añadimos uno al contador de tazas consumidas, y al de horas disponibles
            this.tazasTotales++;
            this.horasDisponibles++;
            this.remainingTime.scaleX+=(1/this.horas_totales);
        }       
        //si hemos consumido nuestras dos tazas de café no podremos tomar más
        else if (this.tazasTotales>2  ||this.remainingTime.scaleX >= 1.4  ){
        this.remainingTime.scaleX+=0; 
       }     
       this.updateTimes();
    }
  }