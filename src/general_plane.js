import Prismaticos from "./prismaticos.js"
import Auriculares from "./auriculares.js";
import Dialogue from "./dialogue.js";

export default class extends Phaser.Scene{
    constructor(){super({key: 'general'})}

    create(){
        
        let dialogJson = this.cache.json.get('dialog');
        //creación de los prismáticos
        this.prismaticos1 = new Prismaticos (this,125,425)
        .setScale(0.5);
        this.prismaticos2 = new Prismaticos (this,325,425)
        .setScale(0.5);
        this.prismaticos3 = new Prismaticos (this,525,425)
        .setScale(0.5);
        this.prismaticos4 = new Prismaticos (this,725,425)
        .setScale(0.5);

        //creación de los auriculares
        this.auriculares1 = new Auriculares (this,200,425,dialogJson,"room1")
        .setScale(0.4);
        this.auriculares2 = new Auriculares (this,400,425,dialogJson,"room2")
        .setScale(0.4);
        this.auriculares3 = new Auriculares (this,600,425,dialogJson,"room3")
        .setScale(0.4);
        this.auriculares4 = new Auriculares (this,800,425,dialogJson,"room4")
        .setScale(0.4);

        //sprites de las ventanas de las habitaciones
        this.room1= this.add.sprite(100,150,'room1');
              
        this.room2= this.add.sprite(300,150,'room2');
        
        this.room3= this.add.sprite(500,150,'room3');
        
        this.room4= this.add.sprite(700,150,'room4');

        //sprite de la habitacion minimizada para los cuadros de dialogo
        
        this.mini_room = this.add.sprite(100,150,'room_cooper')
        .setScale(0.1)
        .setVisible(false);
        
        //sprite del boton atras
        this.backbutton=this.add.sprite(0,0,'back');
        //sprite del boton menu
        this.menubutton=this.add.text(900,10,"Menu")
        //llamada inicial a la configuración 0 del plano general
        this.roomconfig();

       
    
    }      
/** select habilita la aparicion del prismático correspondiente a la habitacion
 * seleccionada y deshabilita la posibilidad de seleccionar otra habitación para evitar
 * que aparezcan las opciones de otras que no sean la seleccionada
 *  @param {number} a*/
    
      select(a){
        //desabilitamos la opción de que pueda pulsar de nuevo en una ventana
        this.room1.disableInteractive();
        this.room2.disableInteractive();
        this.room3.disableInteractive();
        this.room4.disableInteractive();
        switch(a){
            case 1:

         this.prismaticos1.setVisible(true)
        .setInteractive()
        .on('pointerdown',prismaticos1=>{this.scene.start('room1')});

        this.auriculares1.setVisible(true)
        .setInteractive()
        .on('pointerdown',auriculares1=>{this.auriculares1.showdialog()});
       
        break;

        case 2:
            this.prismaticos2.setVisible(true)
            .setInteractive()
            .on('pointerdown',prismaticos2=>{this.scene.start('room2')});

            this.auriculares2.setVisible(true)
        .setInteractive()
        .on('pointerdown',auriculares2=>{this.auriculares2.showdialog()});
            break;



        case 3:
            this.prismaticos3.setVisible(true)
        .setInteractive()
        .on('pointerdown',prismaticos2=>{this.scene.start('room3')});

        this.auriculares3.setVisible(true)
        .setInteractive()
        .on('pointerdown',auriculares3=>{this.auriculares3.showdialog()});
            break;
        case 4:
            
                //prismaticos de la habitacion 4
        this.prismaticos4.setVisible(true)
        .setInteractive()
        .on('pointerdown',prismaticos2=>{this.scene.start('room4')});

        this.auriculares4.setVisible(true)
        .setInteractive()
        .on('pointerdown',auriculares4=>{this.auriculares4.showdialog()});
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

    apareceDialogo(frases,room){

            
            //elegimos la miniatura de la habitación que mostrar al jugador
        switch (room){
            case 1:
                this.mini_room = 'room1';
                break;

            case 2:

                this.mini_room = 'room2';
                break;

            case 3:

                this.mini_room = 'room3';
                break;
            case 4:

                this.mini_room = 'room4';
                break;

            default:
                this.mini_room = 'no hay habitacion'
                
                    break;
                
            
        }
        //hacemos aparecer el dialogo correspondiente a la habitacion
        this.dialogoPrueba = new Dialogue(this);
        this.dialogoPrueba.changeDialogue(frases);
        //this.object = new ObjetoDialogue(this, 150,150, this.dialogoPrueba,frases,this.mini_room);
        //oscurecemos las habitaciones
        this.room1.setAlpha(0.2);
        this.room2.setAlpha(0.2);
        this.room3.setAlpha(0.2);
        this.room4.setAlpha(0.2);
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

         //backbutton es invisible si no hay habitación pulsada
          this.backbutton.setOrigin(0,0);
          this.backbutton.setVisible(false);
          
          //todos los sprites de prismáticos desaparecen si no hay habitacion pulsada
          this.prismaticos1.setVisible(false);
          this.prismaticos2.setVisible(false);
          this.prismaticos3.setVisible(false);
          this.prismaticos4.setVisible(false);
          //igual que los auriculares
          this.auriculares1.setVisible(false);
          this.auriculares2.setVisible(false);
          this.auriculares3.setVisible(false);
          this.auriculares4.setVisible(false);
          
         
            //damos propiedades al boton menu
          this.menubutton.setColor('blue')
          .setOrigin(0,0)
          .setBackgroundColor('white')
          .setScale(1.2)
          .setInteractive()
          .on('pointerdown',menubutton=>{this.scene.start('menu')});

          
  
    }

    /**Metodo usado para volver a poner el plano general unicamente
     * con las ventanas y que no aparezcan auriculares ni prismáticos 
     */
    disableselect(){
        //hacemos desaparecer el boton de volver atrás en el plano general
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
       //prismáticos de cada ventana al volver a la visión general y los cuadros de texto
        this.auriculares1.setVisible(false);
        this.auriculares2.setVisible(false);
        this.auriculares3.setVisible(false);
        this.auriculares4.setVisible(false);
        this.prismaticos1.setVisible(false);
        this.prismaticos2.setVisible(false);
        this.prismaticos3.setVisible(false);
        this.prismaticos4.setVisible(false);      
        //desactivamos la miniatura de la habitacion y el cuadro de texto  
        // this.object.disableInteractive();
        // this.object.setVisible(false);
    }
}