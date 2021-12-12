import Days from "./days.js";
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
      this.backbutton=this.add.sprite(0,0,'back');
      this.backbutton.setOrigin(0,0)
      //llamamos a select, metodo que habilita click
      this.select();
      this.input.mouse.disableContextMenu();

      let pointer = this.input.activePointer;
      this.dayscont = new Days;

      //Crea un array de objecto de la habitacion
      this.objectarray = this.dayscont.getdayobject(this,this.key.key);
      this.objectarray.forEach(elem => elem.setInteractive()
      .setOrigin(0,0)
      .on('pointerover',()=>elem.setTint(0x999999))
      .on('pointerout',()=>elem.clearTint())
      .on('pointerdown', () => {elem.showtext()}))
    }
  //metodo que de momento habilita la funcion back
    select()
    {
      this.backbutton.setVisible(true);
      this.backbutton.setInteractive();        
      this.backbutton.on('pointerdown',backbutton=>{this.scene.switch('general')})
    }
    backactive(b){
      this.backbutton.setVisible(b);
      this.backbutton.setInteractive(b);
    }
  
}