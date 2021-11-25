import Dialogue from "./dialogue.js";

export default class menu extends Phaser.Scene{
    constructor() {
        super({ key: 'menu' });
      }  
      //Crea el texto de bienvenida
    create(){
     this.background = this.add.image(0,0,'houses');
     this.background.setOrigin(0,0);
     
     this.add.bitmapText(200, 300, 'press_start_2p_font', "Bienvenidos a Through The Window!", 20).setOrigin(0,1);
      

 
     let startbottom = this.add.sprite(500,200,'play')
     this.input.mouse.disableContextMenu();

     startbottom.setInteractive();
     startbottom.on('pointerdown', startbottom=>{this.scene.start('general')});
      
    }
}

