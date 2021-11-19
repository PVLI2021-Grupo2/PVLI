import BaseRoom from "./baseRoom.js";
import clickableobjects from "./clickableobjects.js";

export default class Room1 extends BaseRoom{

  constructor(json) {
    super({ key: 'room1' },'room_smith');
  } 
  create(){
     let dialogJson = this.cache.json.get('dialog');
    //creamos el background de la escena
      this.background = this.add.image(0,0,'room_smith');        
      this.background.setOrigin(0,0);
    //creamos un back
      this.backbutton=this.add.sprite(20,20,'back');
      //llamamos a select, metodo que habilita click
      this.select();
      console.log(this.image);
      this.input.mouse.disableContextMenu();

      
      this.tetera =new clickableobjects(this,200,100,'binoculars',false,dialogJson,"room1");
      this.tetera.setInteractive();
      this.tetera.on('pointerdown',()=>{this.tetera.showtext()});
   }
}