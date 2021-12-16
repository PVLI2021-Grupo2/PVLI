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
            if(time > obj.time[0] && time <= obj.time[1]||time>obj.time[0] &&time<=23||time<=obj.time[1]){ //el 9 es por la hora de inicio de cada día, es un fix del sistema de hora
                objectreturned.push(new clickableobjects(scene,obj.posX,obj.posY,'objects',obj.name,dialogJson,room));
            }
           
        }
        return objectreturned ;
    }
}

