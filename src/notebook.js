export default class NoteBook extends Phaser.Scene{

    constructor(){
      super({ key: 'notebook' });
    }
    update(t,dt){
        super.update(t,dt);
    }
    create(){
        console.log("create")
    //creamos el background de la escena
         this.background = this.add.image(0,0,'notebook');        
         this.background.setOrigin(-0.1,0)
         .setScale(1.1)
    //creamos un back
        this.backbutton=this.add.sprite(0,0,'back')
        .setOrigin(0,0);

        //llamamos a select, metodo que habilita click

        this.select();
        this.input.mouse.disableContextMenu();

        this.numberoftextselected =0;
        this.lista_observacion = 
        this.game.estadoCompartido.observaciones;

        console.log(this.lista_observacion)
        for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
            this.game.estadoCompartido.observaciones[i].selected = false;
            this.game.estadoCompartido.observaciones[i].screentext = this.add.text(300,(i+1)*50,this.game.estadoCompartido.observaciones[i].text,)
            .setOrigin(0.5,0.5)
            .setColor('green')
            //.setBackgroundColor('white')
            .setAlign('center')
            .setInteractive()
            if(!this.game.estadoCompartido.observaciones[i].activated)
            this.game.estadoCompartido.observaciones[i].screentext.on('pointerdown',()=>{this.select_text(this.game.estadoCompartido.observaciones[i],i)})        
           
        }
          
        let arr = this.game.estadoCompartido.deducciones
        console.log(arr)
        arr.forEach(element => {
            //element.active = false;
            this.add.text(600,50,element)
            .setOrigin(0.5,0.5)
            .setColor('blue')
            .setBackgroundColor('white')
            .setAlign('center')     
            });

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
        elem.selected = true;
        console.log(elem.selected)
        elem.screentext.setColor('red')
        this.numberoftextselected ++;
        console.log( this.numberoftextselected)
        for(let i=0;i<this.game.estadoCompartido.observaciones.length;i++){
           if(this.game.estadoCompartido.observaciones[i].selected && i!==indiceelem){  
            console.log("hay activo")
            if(this.game.estadoCompartido.observaciones[i].id === elem.id){
                console.log("son idem")
                this.game.estadoCompartido.deducciones.push("soy una deduccion")                 
                this.game.estadoCompartido.observaciones[i].activated=true;
                elem.activated = true;
                this.adddeduccion()
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
    adddeduccion(){
        let arr = this.game.estadoCompartido.deducciones
        console.log(arr)
        arr.forEach(element => {
            //element.active = false;
            this.add.text(600,50,element)
            .setOrigin(0.5,0.5)
            .setColor('blue')
            .setBackgroundColor('white')
            .setAlign('center')     
            });
    }
}