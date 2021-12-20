/**
 * Clase que crea la primera escena del juego cuando este arranca, con un mensaje de bienvenida
 * y un único botón que permite cambiar a la escena general del juego
 */
export default class menu extends Phaser.Scene{
    constructor() {
        super({ key: 'menu' });
      }  
      //Crea el texto de bienvenida y botón de play
    create(){
     this.background = this.add.image(0,0,'houses');
     this.background.setOrigin(0,0);
     this.add.bitmapText(10, 490, 'press_start_2p_font', "Bienvenidos a Through The Window!", 30).setOrigin(0,1);
  
     let startButton = this.add.sprite(500,250,'play')
     this.input.mouse.disableContextMenu();
     startButton.setInteractive();
     startButton.on('pointerdown', startButton=>{this.scene.start('general')});
     const config = {
      volume: 1
    };
     this.audio=this.sound.add('bgm',config);
     this.audio.play();
    }
}

