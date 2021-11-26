export default class BaseRoom extends Phaser.Scene{

       constructor(key,image){
         super(key);
        this.image = image
       }
        create(){
          //creamos el background de la escena
            this.background = this.add.sprite(0,0, 'rooms', this.image);        
            this.background.setOrigin(0,0);
          //creamos un back
            this.backbutton=this.add.sprite(0,0,'back');
            this.backbutton.setOrigin(0,0)
            //llamamos a select, metodo que habilita click
            this.select();
            console.log(this.image);
            this.input.mouse.disableContextMenu();
       
            let pointer = this.input.activePointer;
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