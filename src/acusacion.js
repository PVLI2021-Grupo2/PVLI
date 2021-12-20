
export default class Acusacion extends Phaser.Scene{

    constructor(){super({key: 'acusacion'})}
   
  
         create()
         {
          //creamos el background de la escena
           this.background = this.add.image(0,0, 'preguntabg');        
           this.background.setOrigin(0,0);
  
           //fondo de la pregunta
           this.preguntaBackground=this.add.sprite(250,100,'dialog')
           .setOrigin(0.2,0.2);
           this.preguntaBackground.scaleY/=4;
           this.preguntaBackground.scaleX/3;
           //llamamos a select, metodo que habilita clicK   
           this.pregunta = "Elige una persona para acusar : Quien ha matado a Willian";
           //llamamos a muestrapregunta
           this.smith = this.add.sprite(200,300,'objects','object_sara');
           this.cooper = this.add.sprite(500,300,'objects','object_cooper');
           this.charles = this.add.sprite(800,300,'objects','object_charles');
           this.jsonFile = this.cache.json.get('finales');
           this.configescene();
        }

        /**
         * Configuración de sprites en la escena y funciones de pointerdown
         */
          configescene(){
            this.add.text(150,100,this.pregunta,
                { fontFamily: 'Arial', color: '#00ff00' }).setWordWrapWidth(600);
            this.smith.setInteractive();        
            this.smith.on('pointerdown',()=>{ this.finish('sara');} );
            this.cooper.setInteractive();        
            this.cooper.on('pointerdown',()=>{ this.finish('cooper');});
            this.charles.setInteractive();        
            this.charles.on('pointerdown',()=>{ this.finish('charles');});
          }
          /**
           * Muestra un panel con el resultado de la partida, las conclusiones obtenidas, la posibilidad de ver un resumen
           * de la historia del vecino que hayas acusado
           * @param {*} a //indica cual de los 3 vecinos ha sido el acusado, dado que cada uno tiene un resumen asociado
           */
          finish(a){
            this.add.sprite(500,200,'dialog').setScale(1.5)
            this.add.text(350,180,this.jsonFile[a])
            let conclu=0;
            this.game.estadoCompartido.conclusiones.forEach(elem => {
                if(elem!==undefined)conclu++;
            });
            this.add.text(350,200,"Has conseguido "+conclu+" conclusiones de las 5 totales")
            this.add.text(350,250,"Ver resumen").setBackgroundColor("grey");
            this.add.text(350,270,"SI").setBackgroundColor("grey").setInteractive().on('pointerdown',()=>{this.resumen(a);});
            this.add.text(380,270,"NO").setBackgroundColor("grey").setInteractive().on('pointerdown',()=>{this.restart();});
            this.disableInteractive();
            
          }
          /**
           * Muestra un resumen del acusado elegido y de toda la subtrama que rodea a dicho personaje, asímismo da opción a 
           * reiniciar el juego de 0.
           * @param {*} a //indica cual de los 3 vecinos ha sido el acusado, dado que cada uno tiene un resumen asociado
           */
          resumen(a){
            this.add.sprite(0,0,'dialog').setOrigin(0,0).setScale(3)
            this.add.text(50,100,this.jsonFile[a+"resumen"]).setWordWrapWidth(900)
            this.add.text(400,400,"RESTART").setBackgroundColor("grey").setScale(2).setInteractive().on('pointerdown',()=>{this.restart();});
        }
        /**
         * Reinicio de juego con todos los parámetros iniciales
         */
          restart(){
              this.scene.stop('general');
              this.scene.stop('menu');
              this.scene.stop('room1');
              this.scene.stop('room2');
              this.scene.stop('room3');
              this.scene.stop('room4');
              this.scene.stop('notebook');
              this.scene.stop('pregunta')
              this.scene.stop('boot')
              this.scene.stop('boot')
              this.scene.start('menu')           
              this.game.estadoCompartido = {
                observaciones:[],
                deducciones:[],
                conclusiones:[],
              };
              this.game.currentTime= 9 ;
              this.game.currentDay = 1 ;  
              this.sound.stopAll();
          }
          /**
           * Desactiva los Sprites que no has seleccionado al acusar a uno de ellos
           */
          disableInteractive(){
            this.smith.disableInteractive();
            this.cooper.disableInteractive();
            this.charles.disableInteractive();
          }
         
  }