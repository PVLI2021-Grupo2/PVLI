export default class NoteBook extends Phaser.Scene{

    constructor(){
      super({ key: 'notebook' });
    }
    update(t,dt){
        super.update(t,dt);
    }
    create(){
    //creamos el background de la escena
         this.background = this.add.image(0,0,'dialog');        
         this.background.setOrigin(0,0)
         .setScale(2)
    //creamos un back
        this.backbutton=this.add.sprite(20,20,'back');
        //llamamos a select, metodo que habilita click
        this.select();
        this.input.mouse.disableContextMenu();
        this.arraytext = 
        this.game.estadoCompartido.observaciones;
        let it = 1;
        this.arraytext.forEach(element => {
        this.add.text(200,it*50,element,)
        .setOrigin(0.5,0.5)
        .setColor('red')
        .setBackgroundColor('white')
        .setAlign('center')
        .setInteractive()
        .once('pointerdown',()=>{console.log("abc")})
        it++;
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




}