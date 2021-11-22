export default class BaseRoom extends Phaser.Scene{

      constructor(key,image){
        super(key);
        this.image = image
      }
      create(){
        //creamos el background de la escena
          this.background = this.add.image(0,0,this.image);        
          this.background.setOrigin(0,0);
        //creamos un back
          this.backbutton=this.add.sprite(20,20,'back');
          //llamamos a select, metodo que habilita click
          this.select();
          this.input.mouse.disableContextMenu();
          
          
        }
        //metodo que de momento habilita la funcion back
        select()
        {
        this.backbutton.setVisible(true);
        this.backbutton.setInteractive();        
        this.backbutton.on('pointerdown',backbutton=>{this.scene.switch('general')})
        }
        backactive(b){
        this.backbutton.setVisible(b);
        this.backbutton.setInteractive(b);
        }
      


}