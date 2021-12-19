import clickableobjects from "./clickableobjects.js";

export default class Days extends Phaser.Scene{

    constructor(key){
      super(key);
    }

    getdayobject(scene,room){
        let dialogJson = scene.cache.json.get('dialog' + scene.game.currentDay);
        let objects = scene.cache.json.get('objectsjson');
        let day = "day" + scene.game.currentDay;
        let time =  scene.game.currentTime;
        let objectreturned = [];
        let arrayobjects = objects[day][room];
        for(let i =0;i<arrayobjects.length;i++){
            let obj = arrayobjects[i];
            if(!obj.timedepend){
                objectreturned.push(new clickableobjects(scene,obj.posX,obj.posY,'objects',obj.name,dialogJson,room));
            }
            else
            // if(time > obj.time[0] && time <= obj.time[1]||time<=obj.time[1] && obj.time[0]>obj.time[1]){ //el 9 es por la hora de inicio de cada día, es un fix del sistema de hora
            //     objectreturned.push(new clickableobjects(scene,obj.posX,obj.posY,'objects',obj.name,dialogJson,room));
            // }
            {
                let aparece = false;
                let iterator = 0;
                while(iterator<obj.time.length && !aparece){
                    if(obj.time[iterator]+1===time){
                        aparece = true;
                    }
                    iterator++;
                }
                if(aparece){
                    objectreturned.push(new clickableobjects(scene,obj.posX,obj.posY,'objects',obj.name,dialogJson,room));
                }
            }
                       
        }
        return objectreturned ;
    }
}

