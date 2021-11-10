import Prismaticos from "./prismaticos.js"

export default class extends Phaser.Scene{
    constructor(){super({key: 'general'})}

    
    create(){
        // this.background = this.add.image(0,0,'general');
        // this.background.setOrigin(0,0);

        this.prismaticos1 = new Prismaticos (this,100,400)
        .setScale(0.5)
        this.prismaticos2 = new Prismaticos (this,300,400)
        .setScale(0.5)


        this.room1= this.add.sprite(100,150,'room1')
              
        this.room2= this.add.sprite(300,150,'room2')
        
        this.room3= this.add.sprite(500,150,'room3')
        
        this.room4= this.add.sprite(700,150,'room4')

        this.backbutton=this.add.sprite(0,0,'back')
        

        
        this.earphone_room1 = this.add.sprite(200,450,'earphone')
        .setScale(0.5)
        


       

        this.menubutton=this.add.text(900,10,"Menu")
        this.roomconfig();
    
    }      
    select(){
        this.backbutton.setVisible(true);
        this.backbutton.setInteractive();
        
       
        this.room1.setAlpha(0.2);
        this.room2.setAlpha(0.2);
        this.room3.setAlpha(0.2);
        this.room4.setAlpha(0.2);
        this.backbutton.on('pointerdown',backbutton=>{this.disableselect()})
        this.menubutton.setVisible(false);

        //prismaticos de la habitacion 1
        this.prismaticos1.setVisible(true)
        .setInteractive()
        .on('pointerdown',prismaticos1=>{this.scene.start('room1')})

        //prismaticos de la habitacion 2
        this.prismaticos2.setVisible(true)
        .setInteractive()
        .on('pointerdown',prismaticos2=>{this.scene.start('room2')})

        

        this.earphone_room1.setVisible(true)
        .setInteractive()
        .setVisible(true)
        
        
        
    }

    goroom(){
       
        this.prismaticos1.setVisible(false);
        this.prismaticos2.setVisible(false);
        
    }
    roomconfig(){
        // for(let i=0;i<4;i++){
        //     let s = 'room'+i;
        //     this.s.setOrigin(0,0);
        //     this.s.setInteractive();
        //     this.s.on('pointerdown',s=>{this.select()});
        // }
          this.room1.setOrigin(0,0);
          this.room2.setOrigin(0,0);
          this.room3.setOrigin(0,0);
          this.room4.setOrigin(0,0);
    
          this.room1.setInteractive();
          this.room2.setInteractive();
          this.room3.setInteractive();
          this.room4.setInteractive();
          this.room1.on('pointerdown',room1=>{this.select()})
          this.room2.on('pointerdown',room2=>{this.select()})
          this.room3.on('pointerdown',room3=>{this.select()})
          this.room4.on('pointerdown',room4=>{this.select()})


          this.backbutton.setOrigin(0,0);
         
          
          this.backbutton.setVisible(false);
          
          
          this.prismaticos1.setVisible(false);
          this.prismaticos2.setVisible(false);
          this.earphone_room1.setVisible(false)
         

          this.menubutton.setColor('blue')
          .setOrigin(0,0)
          .setBackgroundColor('white')
          .setScale(1.2)
          .setInteractive()
          .on('pointerdown',menubutton=>{this.scene.start('menu')})

          
  
    }
    disableselect(){
        this.backbutton.setVisible(false);
        this.backbutton.disableInteractive();
        
        
        this.room1.setAlpha(1);
        this.room2.setAlpha(1);
        this.room3.setAlpha(1);
        this.room4.setAlpha(1);
        this.menubutton.setVisible(true);
       
        this.earphone_room1.setVisible(false);
        this.prismaticos1.setVisible(false);
        this.prismaticos2.setVisible(false);
    }

}