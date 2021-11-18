//import ObjetoDialogue from "./objetoDialogue.js";
import Dialogue from "./dialogue.js";

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
     this.input.mouse.disableContextMenu();

     this.arrayFrases = ["Esta es la primera frase", "Esta es la segunda", "la 3", "la 4"];

     this.dialogoPrueba = new Dialogue(this);
     //this.object = new ObjetoDialogue(this, 200,200, this.dialogoPrueba, this.arrayFrases);

     let pointer = this.input.activePointer;

     startbottom.setInteractive();
     startbottom.on('pointerdown', startbottom=>{this.scene.start('general')});
      
    }
}

