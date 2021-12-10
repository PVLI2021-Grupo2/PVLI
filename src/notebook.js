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

        

        for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
            this.game.estadoCompartido.observaciones[i].selected = false;
            this.game.estadoCompartido.observaciones[i].screentext = this.add.text(200,((i+1)*50)+50
                        ,this.game.estadoCompartido.observaciones[i].text_notebook,)
            .setOrigin(0.5,0.5)
            .setColor('green')
            //.setBackgroundColor('white')
            .setAlign('center')
            .setInteractive()
            .setWordWrapWidth(300)
            if(!this.game.estadoCompartido.observaciones[i].activated)
            this.game.estadoCompartido.observaciones[i].screentext.on('pointerdown',()=>{this.select_text(this.game.estadoCompartido.observaciones[i],i)})        
           
        }      
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
                console.log("son idem", elem.id)
                this.game.estadoCompartido.deducciones.push(deducciones_json["deduccion"+[elem.id]].text); //toma el archivo json y accede a la deduccion con el id en el que coinciden las observaciones
                this.game.estadoCompartido.observaciones[i].activated=true;
                
                
                elem.activated = true;
                elem.screentext.off('pointerdown');
                this.game.estadoCompartido.observaciones[i].screentext.off('pointerdown');
                this.showdeduccion();
            }
          } 
        }

        for(let i=0;i<this.game.estadoCompartido.deducciones.length;i++){

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
        let it = 1;
        let arr = this.game.estadoCompartido.deducciones
        arr.forEach(element => {
            this.add.text(540,30+(50*it),element)
            .setOrigin(0.5,0.5)
            .setColor('blue')
            .setBackgroundColor('white')
            .setAlign('center')    
            .setInteractive() 
            .setWordWrapWidth(300)
            it++
            });
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
            it++
            });
    }
}