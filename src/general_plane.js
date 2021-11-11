import Prismaticos from "./prismaticos.js"

export default class extends Phaser.Scene{
    constructor(){super({key: 'general'})}

    
    create(){
        // this.background = this.add.image(0,0,'general');
        // this.background.setOrigin(0,0);

        this.prismaticos1 = new Prismaticos (this,125,425)
        .setScale(0.5);
        this.prismaticos2 = new Prismaticos (this,325,425)
        .setScale(0.5);
        this.prismaticos3 = new Prismaticos (this,525,425)
        .setScale(0.5);
        this.prismaticos4 = new Prismaticos (this,725,425)
        .setScale(0.5);

        //sprites de las ventanas de las habitaciones
        this.room1= this.add.sprite(100,150,'room1');
              
        this.room2= this.add.sprite(300,150,'room2');
        
        this.room3= this.add.sprite(500,150,'room3');
        
        this.room4= this.add.sprite(700,150,'room4');
        
        this.backbutton=this.add.sprite(0,0,'back');
        

        
        this.earphone_room1 = this.add.sprite(200,450,'earphone')
        .setScale(0.5);
        


       

        this.menubutton=this.add.text(900,10,"Menu")
        this.roomconfig();
    
    }      
/** select habilita la aparicion del prismático correspondiente a la habitacion
 * seleccionada
 *  @param {number} a*/
    
      select(a){

        this.room1.disableInteractive();
        this.room2.disableInteractive();
        this.room3.disableInteractive();
        this.room4.disableInteractive();
        switch(a){
            case 1:
         this.prismaticos1.setVisible(true)
        .setInteractive()
        .on('pointerdown',prismaticos1=>{this.scene.start('room1')});
        break;

        case 2:
            this.prismaticos2.setVisible(true)
            .setInteractive()
            .on('pointerdown',prismaticos2=>{this.scene.start('room2')});
            break;

        case 3:
            this.prismaticos3.setVisible(true)
        .setInteractive()
        .on('pointerdown',prismaticos2=>{this.scene.start('room3')});
        break;
        case 4:
            
                //prismaticos de la habitacion 4
        this.prismaticos4.setVisible(true)
        .setInteractive()
        .on('pointerdown',prismaticos2=>{this.scene.start('room4')});
        break;

        default:
            console.log('Lo lamentamos, por el momento no disponemos de ' + a + '.');
        }


        
        this.backbutton.setVisible(true);
        this.backbutton.setInteractive();
        
       //oscurece fondo de las ventanas
        this.room1.setAlpha(0.2);
        this.room2.setAlpha(0.2);
        this.room3.setAlpha(0.2);
        this.room4.setAlpha(0.2);

        //volvemos hacia atras si pulsamos <--
        this.backbutton.on('pointerdown',backbutton=>{this.disableselect()})
        this.menubutton.setVisible(false);
/*

        

        this.earphone_room1.setVisible(true)
        .setInteractive()
        .setVisible(true);*/
        
        
    }

    roomconfig(){
        // for(let i=0;i<4;i++){
        //     let s = 'room'+i;
        //     this.s.setOrigin(0,0);
        //     this.s.setInteractive();
        //     this.s.on('pointerdown',s=>{this.select()});
        // }

        //posicion de cada ventanita
          this.room1.setOrigin(0,0);
          this.room2.setOrigin(0,0);
          this.room3.setOrigin(0,0);
          this.room4.setOrigin(0,0);
        //hacemos interactiva cada ventanita
          this.room1.setInteractive();
          this.room2.setInteractive();
          this.room3.setInteractive();
          this.room4.setInteractive();
          //si pulsamos encima de ellas nos aparecen los prismáticos y 
            //auriculares correspondientes
          this.room1.on('pointerdown',room1=>{this.select(1)});
          this.room2.on('pointerdown',room2=>{this.select(2)});
          this.room3.on('pointerdown',room3=>{this.select(3)});
          this.room4.on('pointerdown',room4=>{this.select(4)});


          this.backbutton.setOrigin(0,0);
         
          
          this.backbutton.setVisible(false);
          
          
          this.prismaticos1.setVisible(false);
          this.prismaticos2.setVisible(false);
          this.prismaticos3.setVisible(false);
          this.prismaticos4.setVisible(false);
          this.earphone_room1.setVisible(false);
         

          this.menubutton.setColor('blue')
          .setOrigin(0,0)
          .setBackgroundColor('white')
          .setScale(1.2)
          .setInteractive()
          .on('pointerdown',menubutton=>{this.scene.start('menu')});

          
  
    }
    disableselect(){
        this.backbutton.setVisible(false);
        this.backbutton.disableInteractive();
        
        
//si volvemos atrás volvemos a activar las ventanas
//hacemos interactiva cada ventanita
this.room1.setInteractive();
this.room2.setInteractive();
this.room3.setInteractive();
this.room4.setInteractive();
//restauramos la claridad del sprite de las ventanas
        this.room1.setAlpha(1);
        this.room2.setAlpha(1);
        this.room3.setAlpha(1);
        this.room4.setAlpha(1);

        //hacemos visible el boton del menu
        this.menubutton.setVisible(true);
       //hacemos invisibles de nuevo tanto los auriculares como los        
       //prismáticos de cada ventana 
        this.earphone_room1.setVisible(false);
        this.prismaticos1.setVisible(false);
        this.prismaticos2.setVisible(false);
        this.prismaticos3.setVisible(false);
        this.prismaticos4.setVisible(false);
    }

}