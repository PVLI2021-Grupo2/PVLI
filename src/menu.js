export default class menu extends Phaser.Scene{
    constructor() {
        super({ key: 'menu' });
      }  
      //Crea el texto de bienvenida
    create(){
     this.background = this.add.image(0,0,'houses');
     this.background.setOrigin(0,0);
     
     this.add.text(500,200,"Bienvenidos a Through the Window\nHaz click para continuar",)
       .setOrigin(0.5,-2)
       .setColor('red')
       .setBackgroundColor('white')
       .setAlign('center');
       
       
     this.input.mouse.disableContextMenu();

     let pointer = this.input.activePointer;

     this.input.on('pointerdown',  pointer => { this.scene.start('level')})
      
    }
}

