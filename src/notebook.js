/**
 * Clase que gestiona la escena Notebook, que es aquella en la que se almacena toda la información relevante del juego
 * y que hace progresar al jugador en cuanto a lo que va descubriendo. En ella se almacenan las observaciones, obtenidas de
 * las descripciones de los objetos en que clicka en las habitaciones o de los textos correspondientes a las conversaciones o ruidos
 * escuchados en las habitaciones.
 * En esta escena el jugador puede combinar observaciones relacionadas para dar lugar a deducciones, y hacer lo propio con estas últimas
 * para generar conclusiones, las cuales se usan para contestar las preguntas de cada día
 */
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
        this.textSelectedNumber =0;
        let textpos = 0;
        for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
            if(!this.game.estadoCompartido.observaciones[i].activated){
                this.game.estadoCompartido.observaciones[i].selected = false;
                this.game.estadoCompartido.observaciones[i].screenText = this.add.text(200,((textpos+1)*15)+50
                            ,this.game.estadoCompartido.observaciones[i].textNotebook,)
                .setOrigin(0.5,0.5)
                .setColor('green')
                .setFontSize(11)
                .setBackgroundColor('white')
                .setAlign('center')
                .setInteractive()
                .setWordWrapWidth(350);          
                this.game.estadoCompartido.observaciones[i].screenText.on('pointerdown',()=>{this.selectText(this.game.estadoCompartido.observaciones[i],i)})
                textpos++;
            }
        }
       
        this.showDeduccion();
        this.showConclusion();
    }

    //metodo que de momento habilita la funcion back
    select()
    {
        this.backButton.setVisible(true);
        this.backButton.setInteractive();        
        this.backButton.on('pointerdown',backButton=>{this.scene.switch('general')})       
    }
    //método que hace interactivo y visible el boton back
    backActive(b){
        this.backButton.setVisible(b);
        this.backButton.setInteractive(b);      
    }
    /**
     * Este método permite seleccionar una observación apuntada en la libreta, y en caso de seleccionar otra que tenga
     * el mismo "id" que la primera las combinará, haciendo un push de una deduccion que también se corresponda en "id"
     * con las dos observaciones previas
     * 
     * @param {*} elem //elemento seleccionado
     * @param {*} indiceelem //indice correspondiente al evento seleccionado
     */
    selectText(elem,indiceelem){
        let deduccionesJson=this.cache.json.get('deducciones');
        elem.selected = true;
        elem.screenText.setColor('red')
        this.textSelectedNumber ++;
        for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
           if(this.game.estadoCompartido.observaciones[i].selected && i!==indiceelem){  
            if(this.game.estadoCompartido.observaciones[i].id === elem.id){
                //toma el archivo json y accede a la deduccion con el id en el que coinciden las observaciones
                this.game.estadoCompartido.deducciones.push(deduccionesJson["deduccion"+[elem.id]].text); 
                //id de la deduccion
                this.game.estadoCompartido.deducciones[this.game.estadoCompartido.deducciones.length-1].id = deduccionesJson["deduccion"+[elem.id]].id;
                //Desactiva del los eventos los usados , lo marca como activados y muestra deduccion
                this.game.estadoCompartido.observaciones[i].activated=true;               
                elem.activated = true;
                elem.screenText.off('pointerdown');
                this.game.estadoCompartido.observaciones[i].screenText.off('pointerdown');
                this.showDeduccion(); 
                this.scene.restart();
            }
          }    
        }
    }
/**
     * Este método es análogo del anterior y permite seleccionar una deducción apuntada en la libreta, y en caso de seleccionar otra que tenga
     * el mismo "id" que la primera las combinará, haciendo un push de una conclusión que también se corresponda en "id"
     * con las dos deducciones previas
     * 
     * @param {*} elem //elemento seleccionado
     * @param {*} indiceelem //indice correspondiente a la deducción seleccionada
 */
    selectDeducciones(elem,indiceelem){
        let conclusiones_json=this.cache.json.get('conclusiones');
        elem.selected = true;
        elem.screenText.setColor('orange');
        this.textSelectedNumber ++;
        for(let i=0;i<this.game.estadoCompartido.deducciones.length;i++){
           if(this.game.estadoCompartido.deducciones[i].selected && i!==indiceelem){  
            if(this.game.estadoCompartido.deducciones[i].id === elem.id){
                //toma el archivo json y accede a la conclusion con el id en el que coinciden las deducciones
                this.game.estadoCompartido.conclusiones[this.game.currentDay-1]=(conclusiones_json["conclusion"+[elem.id]].text);
                this.game.estadoCompartido.conclusiones[this.game.estadoCompartido.conclusiones.length-1].id = conclusiones_json["conclusion"+[elem.id]].id;
                //Desactiva del los eventos los usados , lo marca como activados y muestra conclusion
                this.game.estadoCompartido.deducciones[i].activated=true;  
                elem.activated = true;
                elem.screenText.off('pointerdown');
                this.game.estadoCompartido.deducciones[i].screenText.off('pointerdown');
                this.showConclusion();
                this.scene.restart();

            }
          } 
        }
    }

    // método que tiene control de los elementos seleccionados en la escena de libreta para que no puedan combinarse
    // ni más de dos elementos, ni elementos que no sean de la misma categoría.
    update(t,td){
        super.update(t,td);
        if(this.textSelectedNumber===2){
            for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
                if(!this.game.estadoCompartido.observaciones[i].activated){
                    this.game.estadoCompartido.observaciones[i].selected=false;
                    this.game.estadoCompartido.observaciones[i].screenText.setColor('green');
                }
               
             }
             for(let i=0;i<this.game.estadoCompartido.deducciones.length;i++){
                if(!this.game.estadoCompartido.deducciones[i].activated){
                    this.game.estadoCompartido.deducciones[i].selected=false;
                    this.game.estadoCompartido.deducciones[i].screenText.setColor('blue');
                }
              
             }
             this.textSelectedNumber=0
        }   
    }

    /**
     * Método que muestra las deducciones en pantalla de manera ordenada y apilada 
     */
    showDeduccion(){
        let textpos = 0;
        for (let i=0;i<this.game.estadoCompartido.deducciones.length;i++){
                if(!this.game.estadoCompartido.deducciones[i].activated){
            this.game.estadoCompartido.deducciones[i].selected = false; 
            this.game.estadoCompartido.deducciones[i].screenText = this.add.text(540,((textpos+1)*25)+50
            ,this.game.estadoCompartido.deducciones[i])
                .setOrigin(0.5,0.5)
                .setColor('blue')
                .setFontSize(11)
                .setBackgroundColor('white')
                .setAlign('center')
                .setInteractive()
                .setWordWrapWidth(300);
            this.game.estadoCompartido.deducciones[i].screenText.on('pointerdown',()=>{this.selectDeducciones(this.game.estadoCompartido.deducciones[i],i)});
            textpos++;
            }                 
        }
    }
/**
 * Método que muestra las conclusiones de manera ordenada y apilada
 */
    showConclusion(){
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