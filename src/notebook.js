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
         this.background = this.add.image(0,0,'dialog');        
         this.background.setOrigin(0,0)
         .setScale(2)
    //creamos un back
        this.backbutton=this.add.sprite(20,20,'back');
        //llamamos a select, metodo que habilita click

        this.select();
        this.input.mouse.disableContextMenu();
        this.lista_observacion = 
        this.game.estadoCompartido.observaciones;

        console.log(this.lista_observacion)
        for(let i=0;i<this.lista_observacion.length;i++){
            this.lista_observacion[i].active = false;
            this.add.text(200,(i+1)*50,this.lista_observacion[i].text,)
            .setOrigin(0.5,0.5)
            .setColor('red')
            .setBackgroundColor('white')
            .setAlign('center')
            .setInteractive()
            .on('pointerdown',()=>{this.select_text(this.lista_observacion[i])})        
           
        }
        // this.lista_observacion.forEach(element => {
        // element.active = false;
        // this.add.text(200,it*50,element.text,)
        // .setOrigin(0.5,0.5)
        // .setColor('red')
        // .setBackgroundColor('white')
        // .setAlign('center')
        // .setInteractive()
        // .on('pointerdown',()=>{this.select_text(element)})              
        // });

       
        let arr = this.game.estadoCompartido.deducciones
        console.log(arr)
        arr.forEach(element => {
            //element.active = false;
            this.add.text(400,50,element)
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
    select_text(elem){
        elem.active = true;
        console.log(elem.active)
        this.lista_observacion.forEach(element => {
            if(element.active){
                console.log("hay activo")
                if(element.id===elem.id){
                    this.game.estadoCompartido.deducciones.push("aaaaaa")
                    console.log("hay iden")
                    console.log( this.game.estadoCompartido.deducciones)
                }
            }
        })
    }

    init(){
      

    }




}