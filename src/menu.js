import Dialogue from "./dialogue.js";

export default class menu extends Phaser.Scene{
    constructor() {
        super({ key: 'menu' });
      }  
      //Crea el texto de bienvenida
    create(){
     this.background = this.add.image(0,0,'houses');
     this.background.setOrigin(0,0);
     
     this.add.text(250,300,"Bienvenidos a Through the Window",)
       .setOrigin(0,0)
       .setFont('Georgia')
       .setColor('red')
       .setResolution(10)
       .setScale(0.3)
       .setBackgroundColor('white')
       .setAlign('center');

 
     let startbottom = this.add.sprite(500,200,'play')
     this.input.mouse.disableContextMenu();

     startbottom.setInteractive();
     startbottom.on('pointerdown', startbottom=>{this.scene.start('general')});
      
    }
}

