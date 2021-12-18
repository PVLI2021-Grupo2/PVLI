export default class NoteBook extends Phaser.Scene{
    constructor(){
      super({ key: 'notebook' });
    }
    update(t,dt){
        super.update(t,dt);
    }
    
    create(){
    //creamos el background de la escena
        this.background = this.add.image(0,0,'notebook');        
        this.background.setOrigin(0,0);
    //creamos un back
        this.backButton=this.add.sprite(0,0,'back')
        .setOrigin(0,0);

        //llamamos a select, metodo que habilita click
        this.select();
        this.input.mouse.disableContextMenu();

        //numero de elementos seleccionados
        this.numberoftextselected =0;
        let textpos = 0;
        for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
            if(!this.game.estadoCompartido.observaciones[i].activated){
                this.game.estadoCompartido.observaciones[i].selected = false;
                this.game.estadoCompartido.observaciones[i].screentext = this.add.text(200,((textpos+1)*15)+50
                            ,this.game.estadoCompartido.observaciones[i].textNotebook,)
                .setOrigin(0.5,0.5)
                .setColor('green')
                .setFontSize(11)
                .setBackgroundColor('white')
                .setAlign('center')
                .setInteractive()
                .setWordWrapWidth(350);          
                this.game.estadoCompartido.observaciones[i].screentext.on('pointerdown',()=>{this.select_text(this.game.estadoCompartido.observaciones[i],i)})
                textpos++;
            }
        }
       
        this.showdeduccion()
        this.showconclusion()
    }

    //metodo que de momento habilita la funcion back
    select()
    {
        this.backButton.setVisible(true);
        this.backButton.setInteractive();        
        this.backButton.on('pointerdown',backButton=>{this.scene.switch('general')})       
    }

    backActive(b){
        this.backButton.setVisible(b);
        this.backButton.setInteractive(b);      
    }

    select_text(elem,indiceelem){
        let deducciones_json=this.cache.json.get('deducciones');
        elem.selected = true;
        elem.screentext.setColor('yellow')
        this.numberoftextselected ++;
        for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
           if(this.game.estadoCompartido.observaciones[i].selected && i!==indiceelem){  
            if(this.game.estadoCompartido.observaciones[i].id === elem.id){
                //toma el archivo json y accede a la deduccion con el id en el que coinciden las observaciones
                this.game.estadoCompartido.deducciones.push(deducciones_json["deduccion"+[elem.id]].text); 
                //id de la deduccion
                this.game.estadoCompartido.deducciones[this.game.estadoCompartido.deducciones.length-1].id = deducciones_json["deduccion"+[elem.id]].id;
                //Desactiva del los eventos los usados , lo marca como activados y muestra deduccion
                this.game.estadoCompartido.observaciones[i].activated=true;               
                elem.activated = true;
                elem.screentext.off('pointerdown');
                this.game.estadoCompartido.observaciones[i].screentext.off('pointerdown');
                this.showdeduccion(); 
                this.scene.restart();
            }
          }    
        }
    }

    select_deducciones(elem,indiceelem){
        let conclusiones_json=this.cache.json.get('conclusiones');
        elem.selected = true;
        elem.screentext.setColor('orange')
        this.numberoftextselected ++;
        for(let i=0;i<this.game.estadoCompartido.deducciones.length;i++){
           if(this.game.estadoCompartido.deducciones[i].selected && i!==indiceelem){  
            if(this.game.estadoCompartido.deducciones[i].id === elem.id){
                //toma el archivo json y accede a la conclusion con el id en el que coinciden las deducciones
                this.game.estadoCompartido.conclusiones[this.game.currentDay-1]=(conclusiones_json["conclusion"+[elem.id]].text);
                this.game.estadoCompartido.conclusiones[this.game.estadoCompartido.conclusiones.length-1].id = conclusiones_json["conclusion"+[elem.id]].id;
                //Desactiva del los eventos los usados , lo marca como activados y muestra conclusion
                this.game.estadoCompartido.deducciones[i].activated=true;  
                elem.activated = true;
                elem.screentext.off('pointerdown');
                this.game.estadoCompartido.deducciones[i].screentext.off('pointerdown');
                this.showconclusion();
                this.scene.restart();

            }
          } 
        }
    }

    update(t,td){
        super.update(t,td);
        if(this.numberoftextselected===2){
            for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
                if(!this.game.estadoCompartido.observaciones[i].activated){
                    this.game.estadoCompartido.observaciones[i].selected=false;
                    this.game.estadoCompartido.observaciones[i].screentext.setColor('green')
                }
               
             }
             for(let i=0;i<this.game.estadoCompartido.deducciones.length;i++){
                if(!this.game.estadoCompartido.deducciones[i].activated){
                    this.game.estadoCompartido.deducciones[i].selected=false;
                    this.game.estadoCompartido.deducciones[i].screentext.setColor('blue')
                }
              
             }
             this.numberoftextselected=0
        }   
    }

    showdeduccion(){
        let textpos = 0;
        for (let i=0;i<this.game.estadoCompartido.deducciones.length;i++){
                if(!this.game.estadoCompartido.deducciones[i].activated){
            this.game.estadoCompartido.deducciones[i].selected = false; 
            this.game.estadoCompartido.deducciones[i].screentext = this.add.text(540,((textpos+1)*25)+50
            ,this.game.estadoCompartido.deducciones[i])
                .setOrigin(0.5,0.5)
                .setColor('blue')
                .setFontSize(11)
                .setBackgroundColor('white')
                .setAlign('center')
                .setInteractive()
                .setWordWrapWidth(300);
            this.game.estadoCompartido.deducciones[i].screentext.on('pointerdown',()=>{this.select_deducciones(this.game.estadoCompartido.deducciones[i],i)});
            textpos++;
            }                 
        }
    }

    showconclusion(){
        let it = 1;
        let arr = this.game.estadoCompartido.conclusiones
        arr.forEach(element => {
            this.add.text(870,50*it+25,element)
            .setOrigin(0.5,0.5)
            .setColor('red')
            .setFontSize(12)
            .setBackgroundColor('white')
            .setAlign('center')
            .setWordWrapWidth(200)     
            it++
            });
    }
}