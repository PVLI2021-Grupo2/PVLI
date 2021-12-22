/**
 * Clase que gestiona la pregunta que se le plantea al jugador cada día, estas están almacenadas en un archivo .json
 * en caso de que el jugador obtenga una conclusión en la libreta, esta pasará automáticamente a contestar la pregunta.
 * Asimismo esta clase es la que controla el paso de un día a otro ya que es la última accion que se realiza cada día,
 * ver si se ha contestado a la pregunta.
 */
export default class Pregunta extends Phaser.Scene{

  constructor(){super({key: 'pregunta'})}
 

       create()
       {
        //creamos el background de la escena
         this.background = this.add.image(0,0, 'preguntabg');        
         this.background.setOrigin(0,0);

         //fondo de la pregunta
         this.pregunta_background=this.add.sprite(250,100,'dialog')
         .setOrigin(0.2,0.2);
         this.pregunta_background.scaleY/=4;
         this.pregunta_background.scaleX/3;

         //fondo conclusiones
         this.conclusiones_background= this.add.sprite(250,250,'dialog').setOrigin(0.2,0.2);

         //creamos un back
         this.backButton=this.add.sprite(0,0,'back');
         this.backButton.setOrigin(0,0)

         //creamos el boton de pasar de dia
         this.iconoAvanzarDia = this.add.sprite(945,250,'nextday').setOrigin(0,0);


         //llamamos a select, metodo que habilita clicK
         this.select();
         this.preguntaArray=this.scene.scene.cache.json.get('preguntas')['preguntas']
        
         //llamamos a muestraPregunta
         this.muestraPregunta();
         this.addConclusion(); 
      }
      /**
       * Método que activa componentes
       */
        select()
        {
         this.backButton.setVisible(true);
         this.backButton.setInteractive();        
         this.backButton.on('pointerdown',backButton=>{this.scene.switch('general')});

         this.iconoAvanzarDia.setVisible(true)
         .setOrigin(0.5,0)
         .setInteractive()
         .on('pointerdown',iconoAvanzarDia=>{this.scene.switch('general'),this.pasardia()})        
        }

      /**
       * metodo que muestra la pregunta y la cabecera de las conclusiones        
       */
        muestraPregunta(){
          //muestra el texto de la pregunta
          this.add.text(150,100,this.preguntaArray[this.game.currentDay-1],
            { fontFamily: 'Arial', color: '#00ff00' }).setWordWrapWidth(600);
          //muestra titulo de "conclusiones"
          this.add.text(425,215,"-RESPUESTA-",
          { fontFamily: 'Arial', color: '#00ff00' });
        }

        /**añade las conclusiones que haya en la libreta */
        addConclusion(){
          let texto_conclusion = this.game.estadoCompartido.conclusiones[this.game.currentDay-1];
            this.add.text(100,250,texto_conclusion,
              { fontFamily: 'Arial', color: '#d0ff00' })                          
        }

        /**Pasa al siguiente dia */
        pasardia(){
          if(this.game.currentDay<5){
            this.game.currentDay+=1;
            this.scene.start('general');
          } 
          else
            this.scene.start('acusacion')
        }
}