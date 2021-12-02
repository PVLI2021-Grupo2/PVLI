import BaseRoom from "./baseRoom.js";
import clickableobjects from "./clickableobjects.js";
import NoteBook from "./notebook.js";

export default class Room2 extends BaseRoom{

    constructor() {
      super({ key: 'room2' },'roomsfinal-2');
    }
     create(){
       let dialogJson = this.cache.json.get('dialog');
       super.create();
  
      //  this.tetera =new clickableobjects(this,280,60,'objects', 'object_cup',false,dialogJson,"room2",0);

      //  this.cat = new clickableobjects(this,200,270,'objects', 'object_cat',false,dialogJson,"room2",1);
      
      //  this.dog=new clickableobjects(this,300,230,'objects', 'object_dog',false,dialogJson,"room2",2);
       
      //  this.aguja=new clickableobjects(this,60,250,'objects', 'object_agujas',false,dialogJson,"room2",3);

      //  this.tejido=new clickableobjects(this,60,140,'objects', 'object_tejido',false,dialogJson,"room2",4);

      //  this.ovillo=new clickableobjects(this,140,200,'objects', 'object_ovillo',false,dialogJson,"room2",5);

      //  this.cooper=new clickableobjects(this,520,120,'objects', 'object_cooper',false,dialogJson,"room2",6);

      //  this.objectarray = [this.tetera,this.cat,this.dog,this.aguja,this.tejido,this.ovillo,this.cooper];
      this.objectarray = this.dayscont.getdayobject(this,"room2");
       this.objectarray.forEach(elem => elem.setInteractive()
       .setOrigin(0,0)
       .on('pointerdown', () => {elem.showtext()}))
      }
  }