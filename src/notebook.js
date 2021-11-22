export default class NoteBook extends Phaser.Scene{

    constructor(){
      super({ key: 'notebook' });
    }
    update(t,dt){
        super.update(t,dt);
    }
    create(){
    //creamos el background de la escena
        this.background = this.add.image(0,0,'sarah');        
        this.background.setOrigin(0,0);
    //creamos un back
        this.backbutton=this.add.sprite(20,20,'back');
        //llamamos a select, metodo que habilita click
        this.select();
        this.input.mouse.disableContextMenu();
        this.arraytext = ["1"] ;
    }
    //metodo que de momento habilita la funcion back
    select()
    {
        this.backbutton.setVisible(true);
        this.backbutton.setInteractive();        
        this.backbutton.on('pointerdown',backbutton=>{this.scene.start('general')})
        
    }
    backactive(b){
        this.backbutton.setVisible(b);
        this.backbutton.setInteractive(b);
        
     }
    addtext(a){
        this.arraytext.push()
    }




}