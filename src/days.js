import clickableobjects from "./clickableobjects.js";

export default class Days extends Phaser.Scene{

    constructor(key){
      super(key);
    }


    getdayobject(scene,room){
        switch(scene.game.nowday) { 
            case 1 :   
            return this.day1(scene,room); 
            break;     
            case 2:
                break;
        }
    }

    day1(scene,room){
        let dialogJson = scene.cache.json.get('dialog');
        if(room==="room1"){
           
            let ball= new clickableobjects(scene,210,225,'objects','object_ball',scene.game.room1objects[0],dialogJson,"room1",0);
     
            let cartoy = new clickableobjects(scene,165,300,'objects', 'object_cartoy' ,scene.game.room1objects[1],dialogJson,"room1",1);
        
            let books= new clickableobjects(scene,287,97,'objects','object_books',scene.game.room1objects[2],dialogJson,"room1",2);
        
            let picture= new clickableobjects(scene,50,60,'objects','object_picture',scene.game.room1objects[3],dialogJson,"room1",3);
        
            let drawing= new clickableobjects(scene,840,170,'objects','object_drawing',scene.game.room1objects[4],dialogJson,"room1",4);
        
            let bag= new clickableobjects(scene,660,300,'objects','object_bag',scene.game.room1objects[5],dialogJson,"room1",5);
        
            let sara= new clickableobjects(scene,70,150,'objects','object_sara',scene.game.room1objects[6],dialogJson,"room1",6);
            
            let smith= new clickableobjects(scene,750,70,'objects','object_smith',scene.game.room1objects[7],dialogJson,"room1",7);
        
            let objectarray = [ball,cartoy,books,picture,drawing,bag,sara,smith];
            return objectarray;
        }
        else if(room==="room2"){
            let tetera =new clickableobjects(scene,340,125  ,'objects', 'object_cup',false,dialogJson,"room2",0);

            let cat = new clickableobjects(scene,200,310,'objects', 'object_cat',false,dialogJson,"room2",1);
           
            let dog=new clickableobjects(scene,300,270,'objects', 'object_dog',false,dialogJson,"room2",2);
            
            let aguja=new clickableobjects(scene,60,260,'objects', 'object_agujas',false,dialogJson,"room2",3);
     
            let tejido=new clickableobjects(scene,80,200,'objects', 'object_tejido',false,dialogJson,"room2",4);
     
            let ovillo=new clickableobjects(scene,90,320,'objects', 'object_ovillo',false,dialogJson,"room2",5);
     
            let cooper=new clickableobjects(scene,540,120,'objects', 'object_cooper',false,dialogJson,"room2",6);
     
            let objectarray = [tetera,cat,dog,aguja,tejido,ovillo,cooper];
            return objectarray;
        }
        else if(room==="room3"){
            
            let charles =new clickableobjects(scene,250,200,'objects', 'object_charles',false,dialogJson,"room3",0);
            let objectarray = [charles];
            return objectarray;
        }
        else if(room==="room4"){
            let william =new clickableobjects(scene,600,130,'objects', 'object_william',false,dialogJson,"room4",0);

            let objectarray = [william];
            return objectarray;
        }
    }
    
    day2(scene,room){
        let dialogJson = scene.cache.json.get('dialog');
        if(room==="room1"){
           
            let ball= new clickableobjects(scene,210,225,'objects','object_ball',scene.game.room1objects[0],dialogJson,"room1",0);
 
            let cartoy = new clickableobjects(scene,165,300,'objects', 'object_cartoy' ,scene.game.room1objects[1],dialogJson,"room1",1);

            let books= new clickableobjects(scene,287,97,'objects','object_books',scene.game.room1objects[2],dialogJson,"room1",2);

            let picture= new clickableobjects(scene,50,60,'objects','object_picture',scene.game.room1objects[3],dialogJson,"room1",3);

            let drawing= new clickableobjects(scene,840,170,'objects','object_drawing',scene.game.room1objects[4],dialogJson,"room1",4);

            let bag= new clickableobjects(scene,660,300,'objects','object_bag',scene.game.room1objects[5],dialogJson,"room1",5);

            let sara= new clickableobjects(scene,70,150,'objects','object_sara',scene.game.room1objects[6],dialogJson,"room1",6);

            let smith= new clickableobjects(scene,750,70,'objects','object_smith',scene.game.room1objects[7],dialogJson,"room1",7);

            let objectarray = [ball,cartoy,books,picture,drawing,bag,sara,smith];
            return objectarray;
        }
        else if(room==="room2"){
            let tetera =new clickableobjects(scene,340,125  ,'objects', 'object_cup',false,dialogJson,"room2",0);

            let cat = new clickableobjects(scene,200,310,'objects', 'object_cat',false,dialogJson,"room2",1);
           
            let dog=new clickableobjects(scene,300,270,'objects', 'object_dog',false,dialogJson,"room2",2);
            
            let aguja=new clickableobjects(scene,60,260,'objects', 'object_agujas',false,dialogJson,"room2",3);
     
            let tejido=new clickableobjects(scene,80,200,'objects', 'object_tejido',false,dialogJson,"room2",4);
     
            let ovillo=new clickableobjects(scene,90,320,'objects', 'object_ovillo',false,dialogJson,"room2",5);
     
            let cooper=new clickableobjects(scene,540,120,'objects', 'object_cooper',false,dialogJson,"room2",6);
     
            let objectarray = [tetera,cat,dog,aguja,tejido,ovillo,cooper];
            return objectarray;
        }
        else if(room==="room3"){
            
            let charles =new clickableobjects(scene,250,200,'objects', 'object_charles',false,dialogJson,"room3",0);
            let objectarray = [charles];
            return objectarray;
        }
        else if(room==="room4"){
            let william =new clickableobjects(scene,600,130,'objects', 'object_william',false,dialogJson,"room4",0);

            let objectarray = [william];
            return objectarray;
        }
    }

 

}

