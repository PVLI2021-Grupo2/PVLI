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
        this.backbutton=this.add.sprite(0,0,'back')
        .setOrigin(0,0);

        //llamamos a select, metodo que habilita click

        this.select();
        this.input.mouse.disableContextMenu();


        //numero de elementos seleccionados
        this.numberoftextselected =0;

        //lista de elementos que se almacenan en observaciones
        this.lista_observacion = 
        this.game.estadoCompartido.observaciones;
        //lista de elementos que se almacenan en deducciones
        this.lista_deduccion = 
        this.game.estadoCompartido.deducciones;
        //lista de elementos que se almacenan en conclusiones
        this.lista_conclusion =
        this.game.estadoCompartido.conclusiones;

        console.log('tamaño de deducciones:'+this.lista_deduccion.length);
        console.log('aa');
        console.log('tamaño de observaciones:'+this.lista_observacion.length);
       


        for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
           
            this.game.estadoCompartido.observaciones[i].selected = false;
            this.game.estadoCompartido.observaciones[i].screentext = this.add.text(200,((i+1)*50)+50
                        ,this.game.estadoCompartido.observaciones[i].text_notebook,)
            .setOrigin(0.5,0.5)
            .setColor('green')
            .setBackgroundColor('white')
            .setAlign('center')
            .setInteractive()
            .setWordWrapWidth(300);
            if(!this.game.estadoCompartido.observaciones[i].activated)
                this.game.estadoCompartido.observaciones[i].screentext.on('pointerdown',()=>{this.select_text(this.game.estadoCompartido.observaciones[i],i)})        
           
            
        }
        
        //otro for que haga lo mismo pero de deducciones hacia conclusiones y en un método distinto a select_text que sea parecido para las deducciones (metodo nuevo)

        
        this.showdeduccion()
        this.showconclusion()
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

    select_text(elem,indiceelem){

        let deducciones_json=this.cache.json.get('deducciones');
      

        elem.selected = true;
        console.log(elem.selected)
        elem.screentext.setColor('yellow')
        this.numberoftextselected ++;
        console.log( this.numberoftextselected)
        for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
           if(this.game.estadoCompartido.observaciones[i].selected && i!==indiceelem){  
            console.log("hay activo")
            if(this.game.estadoCompartido.observaciones[i].id === elem.id){
                console.log("son idem: ", elem.id)
                this.game.estadoCompartido.deducciones.push(deducciones_json["deduccion"+[elem.id]].text); //toma el archivo json y accede a la deduccion con el id en el que coinciden las observaciones
                
                this.game.estadoCompartido.observaciones[i].activated=true;

                //erase de los elementos si fuera necesario por espacio
                
                elem.activated = true;
                elem.screentext.off('pointerdown');
                this.game.estadoCompartido.observaciones[i].screentext.off('pointerdown');
                this.showdeduccion();
               
            }
          } 
          
        }
    }

    select_deducciones(elem,indiceelem){
        let conclusiones_json=this.cache.json.get('conclusiones');
        console.log('tamaño conclusiones: '+this.lista_conclusion.length)
        

        elem.selected = true;
        console.log(elem.selected)
        elem.screentext.setColor('orange')
        this.numberoftextselected ++;
        console.log( this.numberoftextselected)
        for(let i=0;i<this.game.estadoCompartido.deducciones.length;i++){
           if(this.game.estadoCompartido.deducciones[i].selected && i!==indiceelem){  
            console.log("hay activo")
            if(this.game.estadoCompartido.deducciones[i].id === elem.id){
                console.log("son idem", elem.id)
                this.game.estadoCompartido.conclusiones.push(conclusiones_json["conclusion"+[elem.id]].text); //toma el archivo json y accede a la deduccion con el id en el que coinciden las observaciones
                this.game.estadoCompartido.deducciones[i].activated=true;

                //erase de los elementos si fuera necesario por espacio
                
                elem.activated = true;
                elem.screentext.off('pointerdown');
                this.game.estadoCompartido.deducciones[i].screentext.off('pointerdown');
                this.showconclusion();
                console.log(this.game.estadoCompartido.conclusiones[i]+ elem.id)
            }
          } 
        }

    }

    update(t,td){
        super.update(t,td);
        if(this.numberoftextselected===2){
            for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
                this.game.estadoCompartido.observaciones[i].selected=false;
                this.game.estadoCompartido.observaciones[i].screentext.setColor('green')
             }
             this.numberoftextselected=0
        }   
    }

    showdeduccion(){
        // let it = 1;
        // let arr = this.game.estadoCompartido.deducciones;
        // arr.forEach(element => {
        //     this.add.text(540,30+(50*it),element)
        //     .setOrigin(0.5,0.5)
        //     .setColor('blue')
        //     .setBackgroundColor('white')
        //     .setAlign('center')    
        //     .setInteractive() 
        //     .setWordWrapWidth(300)
            
        //     it++;
            
        //     });
            for (let i=0;i<this.game.estadoCompartido.deducciones.length;i++){
                console.log('tarari');
                this.game.estadoCompartido.deducciones[i].selected = false; 
                this.game.estadoCompartido.deducciones[i].screentext = this.add.text(540,((i+1)*50)+50
                ,this.game.estadoCompartido.deducciones[i])
                    .setOrigin(0.5,0.5)
                    .setColor('blue')
                    .setBackgroundColor('white')
                    .setAlign('center')
                    .setInteractive()
                    .setWordWrapWidth(300);
                    if(!this.game.estadoCompartido.deducciones[i].activated){
                        this.game.estadoCompartido.deducciones[i].screentext.on('pointerdown',()=>{this.select_deducciones(this.game.estadoCompartido.deducciones[i],i)});
                    }
                       
            }
    }

    showconclusion(){
        let it = 1;
        let arr = this.game.estadoCompartido.conclusiones
        arr.forEach(element => {
            this.add.text(620,50*it,element)
            .setOrigin(0.5,0.5)
            .setColor('red')
            .setBackgroundColor('white')
            .setAlign('center')
            .setWordWrapWidth(300)     
            it++
            });
    }
}