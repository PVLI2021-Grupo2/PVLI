import Days from "./days.js";
/**
 * Clase que crea una habitación base con los parámetros comunes de todas las escenas 
 * Room que tendremos.
 */
export default class BaseRoom extends Phaser.Scene{

    constructor(key,image){
      super(key);
      this.image = image
      this.key = key
    }
    create(){
    //creamos el background de la escena
      this.background = this.add.sprite(0,0, 'rooms', this.image);        
      this.background.setOrigin(0,0);
    //creamos un back
      this.backButton=this.add.sprite(0,0,'back');
      this.backButton.setOrigin(0,0)
      //llamamos a select, metodo que habilita click
      this.select();
      this.input.mouse.disableContextMenu();

      this.daysCont = new Days;

      //Crea un array de objecto de la habitacion
      this.objectArray = this.daysCont.getdayobject(this,this.key.key);
      this.objectArray.forEach(elem => elem.setInteractive()
      .setOrigin(0,0)
      .on('pointerover',()=>elem.setTint(0x999999))
      .on('pointerout',()=>elem.clearTint())
      .on('pointerdown', () => {elem.showtext()}))
    }
  //metodo que de momento habilita la funcion back
    select()
    {
      this.backButton.setVisible(true);
      this.backButton.setInteractive();        
      this.backButton.on('pointerdown',backButton=>{this.scene.switch('general')})
    }
    //metodo que hace visible e interactivo el boton back
    backActive(b){
      this.backButton.setVisible(b);
      this.backButton.setInteractive(b);
    }
    activeObjects(){
      this.objectArray.forEach(elem => elem.setInteractive()
      .on('pointerover',()=>elem.setTint(0x999999))
      .on('pointerout',()=>elem.clearTint())
      .on('pointerdown', () => {elem.showtext()}))    
    } 
    desactiveObjects(){
      this.objectArray.forEach(elem => elem.disableInteractive()
      .off('pointerover')
      .off('pointerout')
      .off('pointerdown'))      
    }
  
}