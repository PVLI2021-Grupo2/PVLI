export default class BaseRoom extends Phaser.Scene{

    
    
        create(){
          //creamos el background de la escena
            this.background = this.add.image(0,0,'room_smith');        
            this.background.setOrigin(0,0);
          //creamos un back
            this.backbutton=this.add.sprite(20,20,'back');
            //llamamos a select, metodo que habilita click
            this.select();
                 
            this.input.mouse.disableContextMenu();
       
            let pointer = this.input.activePointer;
         }
         //metodo que de momento habilita la funcion back
           select()
           {
            this.backbutton.setVisible(true);
            this.backbutton.setInteractive();        
            this.backbutton.on('pointerdown',backbutton=>{this.scene.start('general')})
           }

}