import clickableobjects from "./clickableobjects.js";

export default class Days extends Phaser.Scene{

    constructor(key){
      super(key);
    }

    getdayobject(scene,room){
        let dialogJson = scene.cache.json.get('dialog' + scene.game.nowday);
        let objects = scene.cache.json.get('objectsjson');
        let day = "day" + scene.game.nowday;
        let time =  scene.game.nowtime;
        let objectreturned = [];
        let arrayobjects = objects[day][room];
        for(let i =0;i<arrayobjects.length;i++){
            let obj = arrayobjects[i];
            if(!obj.timedepend){
                objectreturned.push(new clickableobjects(scene,obj.posX,obj.posY,'objects',obj.name,dialogJson,room));
            }
            else
            if(time > obj.time[0] && time <= obj.time[1]){
                objectreturned.push(new clickableobjects(scene,obj.posX,obj.posY,'objects',obj.name,dialogJson,room));
            }
        }
        return objectreturned ;

    }

//     day1(scene,room){       
//         else if(room==="room2"){
//             let tetera =new clickableobjects(scene,340,125,'objects', 'object_cup',dialogJson,"room2",0);

//             let cat = new clickableobjects(scene,200,310,'objects', 'object_cat',dialogJson,"room2",1);
           
//             let dog=new clickableobjects(scene,300,270,'objects', 'object_dog',dialogJson,"room2",2);
            
//             let aguja=new clickableobjects(scene,60,260,'objects', 'object_agujas',dialogJson,"room2",3);
     
//             let tejido=new clickableobjects(scene,80,200,'objects', 'object_tejido',dialogJson,"room2",4);
     
//             let ovillo=new clickableobjects(scene,90,320,'objects', 'object_ovillo',dialogJson,"room2",5);
     
//             let cooper=new clickableobjects(scene,540,120,'objects', 'object_cooper',dialogJson,"room2",6);
     
//             let objectarray = [tetera,cat,dog,aguja,tejido,ovillo,cooper];
//             return objectarray;
//         }
//         else if(room==="room3"){
            
//             let charles =new clickableobjects(scene,250,200,'objects', 'object_charles',dialogJson,"room3",0);
//             let objectarray = [charles];
//             return objectarray;
//         }
//         else if(room==="room4"){
//             let william =new clickableobjects(scene,600,130,'objects', 'object_william',dialogJson,"room4",0);

//             let objectarray = [william];
//             return objectarray;
//         }
//     }
}

