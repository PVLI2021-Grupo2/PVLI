import Dialogue from "./dialogue.js";

export default class Pregunta extends Phaser.Scene{

  constructor(){super({key: 'pregunta'})
}


     create(){
       //creamos el background de la escena
         this.background = this.add.image(0,0, 'general_plane');        
         this.background.setOrigin(0,0);

         //fondo de la pregunta
         this.pregunta_background=this.add.sprite(250,150,'dialog').setOrigin(0.2,0.2);

       //creamos un back
         this.backbutton=this.add.sprite(0,0,'back');
         this.backbutton.setOrigin(0,0)
         //llamamos a select, metodo que habilita clicK
         this.select();
        
        
        
      }
      
        select()
        {
         this.backbutton.setVisible(true);
         this.backbutton.setInteractive();        
         this.backbutton.on('pointerdown',backbutton=>{this.scene.switch('general')})
        }

        muestrapregunta(){
          
          
          
        }


 backactive(b){
 this.backbutton.setVisible(b);
 this.backbutton.setInteractive(b);
 }

}