import Dialogue from "./dialogue.js";
import NoteBook from "./notebook.js";

export default class Pregunta extends Phaser.Scene{

  constructor(){super({key: 'pregunta'})}
 

       create()
       {
        //creamos el background de la escena
         this.background = this.add.image(0,0, 'general_plane');        
         this.background.setOrigin(0,0);

         //fondo de la pregunta
         this.pregunta_background=this.add.sprite(250,100,'dialog')
         .setOrigin(0.2,0.2);
         this.pregunta_background.scaleY/=4;
         this.pregunta_background.scaleX/3;

         //fondo conclusiones
         this.conclusiones_background= this.add.sprite(250,250,'dialog').setOrigin(0.2,0.2);

         //creamos un back
         this.backbutton=this.add.sprite(0,0,'back');
         this.backbutton.setOrigin(0,0)

         //creamos el boton de pasar de dia
         this.icono_avanzar_dia = this.add.sprite(950,250,'clock');

         //llamamos a select, metodo que habilita clicK
         this.select();
         this.pregunta_array=["¿Qué ha pasado en realidad con Kevin el hijo de la familia Smith?","¿Dónde está Candy, el perro de la señora Cooper?",
         "¿Qué relación intrínseca existe entre el matrimonio Smith, el detective Charles Doyle y el profesor William Scott?","¿Cómo es la relación del Profesor William Scott con el resto de vecinos?",
         "¿Sigue William Scott vivo?"]
        
         //llamamos a muestrapregunta
         this.muestrapregunta();
         this.añadeconclusion(); 
      }
      /**
       * Método que activa componentes
       */
        select()
        {
         this.backbutton.setVisible(true);
         this.backbutton.setInteractive();        
         this.backbutton.on('pointerdown',backbutton=>{this.scene.switch('general')});

         this.icono_avanzar_dia.setVisible(true)
         .setOrigin(0.5,0)
         .setInteractive()
         .on('pointerdown',icono_avanzar_dia=>{this.scene.switch('menu'),this.pasardia()})        
        }

      /**
       * metodo que muestra la pregunta y la cabecera de las conclusiones        
       */
        muestrapregunta(){
          //muestra el texto de la pregunta
          this.add.text(250,100,this.pregunta_array[this.game.nowday-1],
            { fontFamily: 'Arial', color: '#00ff00' });
          //muestra titulo de "conclusiones"
          this.add.text(425,215,"-RESPUESTA-",
          { fontFamily: 'Arial', color: '#00ff00' });
        }

        /**añade las conclusiones que haya en la libreta */
        añadeconclusion(){
          let texto_conclusion = this.game.estadoCompartido.conclusiones[this.game.nowday-1];
            this.add.text(100,250,texto_conclusion,
              { fontFamily: 'Arial', color: '#d0ff00' })                          
        }

        /**Pasa al siguiente dia */
        pasardia(){
          if(this.game.nowday<5){
            console.log(this.game.nowday);
            this.game.nowday+=1;
            this.scene.launch('general');
          } 
        }
}