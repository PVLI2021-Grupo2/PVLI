/**
 * Clase que crea un cuadro de diálogo por escena en la que nos encontremos, los textos asociados a los objetos clickables
 * apareceran en este cuadro de texto, así como los eventos "sonoros" que se muestren al hacer click en los auriculares apareceran
 * en el del plano general como caso especial
 */
export default class Dialogue{

//se construye el dialogo pasándole la escena en la que esté
  constructor(scene) { 
    this.scene = scene;
    let posX = this.scene.cameras.main.centerX*0.95;
    let posY = this.scene.cameras.main.height*0.8;
    this.background = this.scene.add.sprite(posX, posY,'dialog'); //añadimos el fondo de la textBox
    this.numFraseActual = 0; //numero en el array de la frase que se escribe en pantalla
    this.dialogo = this.scene.add.bitmapText(posX/3 , posY*0.8, 'press_start_2p_font', "", 16);      //el texto del dialogo
    this.arrayWord;
    this.dialogo.text = "";
    this.dialogo.setMaxWidth(700);
    this.dialogoTerminado = false; 
    this.background.setVisible(false);
    this.dialogo.setVisible(false);
  }

  /**
   * Este método muestra el array de frases asociadas a un objeto o evento en el cuadro de texto de la escena en que estemos
   * 
   * @param {*} arrayText  //array que contiene los strings del texto asociado al evento que se le pase, visual o sonoro
   */
  changeDialogue(arrayText){
    this.arrayWord = arrayText; //le pasamos el array de strings
    this.numFraseActual = 1; //iniciamos a la siguiente frase
    this.activateDialogue(); //activamos el textBox
    this.dialogo.text = this.arrayWord[0]; //cambiamos el texto
    //si el usuario hace click dentro de la textBox, va cambiando de frase
    this.background.on('pointerdown',()=>{
      this.cambioFrase(this.arrayWord)
    })  
  }
     
  //metodo para pasar a la siguiente string del array de frases
  cambioFrase(arrayFrases){
    if(!this.dialogoTerminado){
      if(this.numFraseActual < arrayFrases.length){
        this.dialogo.text = arrayFrases[this.numFraseActual];
        this.numFraseActual++;
      }
      else{
        this.deactivateDialogue();     
        this.scene.backActive(true);     
        this.scene.activeObjects();
      }        
    }    
  } 
  //para que se deje de ver el cuadro de dialogo y se reseteen valores
  deactivateDialogue(){
    this.numFraseActual = 1; //se pone a 1 porque la frase 0 ya está puesta al hacer click
    this.dialogoTerminado = true;
    this.background.setVisible(false);
    this.dialogo.setVisible(false);
    this.background.disableInteractive();
    this.dialogo.text = "";
  }
  //para activar la caja de dialogo 
  activateDialogue(){
    this.dialogoTerminado = false;
    this.background.setVisible(true);
    this.dialogo.setVisible(true);
    this.background.setInteractive();
}
}
  