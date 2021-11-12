export default class ObjetoDialogue extends Phaser.GameObjects.Sprite {
  
    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y, dialogoEscena, arrayDialogue,room) {
      super(scene, x, y, room);
      this.dialogue = dialogoEscena;
      this.scene.add.existing(this);
      // Queremos que el jugador no se salga de los límites del mundo      // Esta label es la UI en la que pondremos la puntuación del jugador
      this.scene.dialogoEscena
      this.setInteractive();
      this.on('pointerdown', this.triggerDialogue);
      this.arrayFrases = arrayDialogue;
      this.activated = false;
    }

    triggerDialogue(){
      if(!this.activated) this.dialogue.changeDialogue(this.arrayFrases);
      this.activated = true;
      if(this.activated) this.dialogue.replay();
      
    }

    
  }