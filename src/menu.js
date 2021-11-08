export default class menu extends Phaser.Scene{
    constructor() {
        super({ key: 'menu' });
      }  
      //Crea el texto de bienvenida
    create(){
     this.background = this.add.image(0,0,'houses');
     this.background.setOrigin(0,0);
     
     this.add.text(500,300,"Bienvenidos a Through the Window la version de Javi",)
       .setOrigin(0.5,0.5)
       .setColor('red')
       .setBackgroundColor('white')
       .setAlign('center')
       .setScale(1.5);
 
     let startbottom = this.add.sprite(500,200,'play')
     let wastebottom = this.add.sprite(500,250,'wastetime')
     this.input.mouse.disableContextMenu();

     let pointer = this.input.activePointer;

     startbottom.setInteractive();
     wastebottom.setInteractive();
     startbottom.on('pointerdown', startbottom=>{this.scene.start('general')});
     wastebottom.on('pointerdown', wastebottom=>{this.scene.start('level')});
      
    }
}

