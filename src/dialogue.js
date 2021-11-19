import general_plane from "./general_plane.js";
/*
Hay un diálogo por escena que vaya a tener diálogos. y el dialogo de cada escena cambia de texto al hacer click en algún objeto
*/ 
export default class Dialogue{

//se construye el dialogo pasándole la escena en la que esté
  constructor(scene) { 
    this.scene = scene;
    let posX = this.scene.cameras.main.centerX;
    let posY = this.scene.cameras.main.height*0.8;
    this.background = this.scene.add.sprite(posX, posY,'dialog'); //añadimos el fondo de la textbox
    this.numFraseActual = 0; //numero en el array de la frase que se escribe en pantalla
    this.dialogo = this.scene.add.text(posX/3 , posY*0.8, "");      //el texto del dialogo
    this.arrayWord;
    this.dialogo.text = "";
    this.dialogoTerminado = false; 
    this.background.setVisible(false);
    this.dialogo.setVisible(false);
  }
    
  changeDialogue(arrayText){
    this.arrayWord = arrayText; //le pasamos el array de strings
    this.numFraseActual = 1; //iniciamos a la siguiente frase
    this.activateDialogue(); //activamos el textbox
    this.dialogo.text = this.arrayWord[0]; //cambiamos el texto
    //si el usuario hace click dentro de la textbox, va cambiando de frase
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
  