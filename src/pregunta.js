import Dialogue from "./dialogue.js";
import NoteBook from "./notebook.js";

export default class Pregunta extends Phaser.Scene{

  constructor(){super({key: 'pregunta'})}
 


     create(){
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
         //llamamos a select, metodo que habilita clicK
         this.select();
         //llamamos a muestrapregunta
        

         this.notebook_pregunta= new NoteBook();
        
         this.lista_observacion = 
          this.game.estadoCompartido.deducciones;

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
         this.backbutton.on('pointerdown',backbutton=>{this.scene.switch('general')})
        }


      /**
       * metodo que muestra la pregunta y la cabecera de las conclusiones        
       */
        muestrapregunta(){
          //muestra el texto de la pregunta
          this.add.text(250,100,"¿Qué ha pasado en realidad con Kevin el hijo de la familia Smith",
            { fontFamily: 'Arial', color: '#00ff00' });
          //muestra titulo de "conclusiones"
          this.add.text(425,215,"-CONCLUSIONES-",
          { fontFamily: 'Arial', color: '#00ff00' });
        }

        añadeconclusion(){
          let texto_conclusion = this.lista_observacion.deducciones;
          this.add.text(250,100,texto_conclusion,
            { fontFamily: 'Arial', color: '#00ff00' });

            
        }


        backactive(b)
        {
        this.backbutton.setVisible(b);
        this.backbutton.setInteractive(b);
        }

}