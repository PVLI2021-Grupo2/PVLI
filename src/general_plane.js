import Prismaticos from "./prismaticos.js"
import Auriculares from "./auriculares.js";
import TimeBar from "./timeBar.js";
import Coffe from "./coffe.js";

export default class extends Phaser.Scene{
    constructor(){super({key: 'general'})}

    create(){
        this.background = this.add.image(500, 250,'generalbg'); //añadimos el fondo de la textbox

        //dialogo en formato json
        let dialogJson = this.cache.json.get('dialog'+this.game.nowday);

        //creación de los prismáticos
        this.prismaticos1 = new Prismaticos (this,400,400)
        this.prismaticos2 = new Prismaticos (this,400,400)
        this.prismaticos3 = new Prismaticos (this,400,400)
        this.prismaticos4 = new Prismaticos (this,400,400)
        this.prismaticarry =[this.prismaticos1,this.prismaticos2,this.prismaticos3,this.prismaticos4] 
        this.prismaticarry.forEach(item => item.setScale(0.5))

        //creación de los auriculares
        this.auriculares1 = new Auriculares (this,500,400,dialogJson,"room1")
        this.auriculares2 = new Auriculares (this,500,400,dialogJson,"room2")
        this.auriculares3 = new Auriculares (this,500,400,dialogJson,"room3")
        this.auriculares4 = new Auriculares (this,500,400,dialogJson,"room4")
        this.auriculararray = [this.auriculares1,this.auriculares2,this.auriculares3,this.auriculares4]
        this.auriculararray.forEach(item => item.setScale(0.4))
        
        //sprites de las ventanas de las habitaciones
        this.room1= this.add.sprite(0,0,'room1');              
        this.room2= this.add.sprite(450,0,'room2');       
        this.room3= this.add.sprite(0,180,'room3');       
        this.room4= this.add.sprite(450,180,'room4');
        this.roomarray= [this.room1,this.room2,this.room3,this.room4]

        //sptrite que te lleva a la escena pregunta del dia
        this.icono_pregunta=this.add.sprite(950,100,'star');

        //creacion del timeBar
        this.time_bar= new TimeBar (this,400,480);

        //creacion del coffe
        this.coffe_= new Coffe (this,950,400);
        
        //sprite del boton atras
        this.backbutton=this.add.sprite(0,0,'back');

        this.notebook = this.add.sprite(0,400,'notebook_icon');
        //llamada inicial a la configuración 0 del plano general

        this.today = this.add.bitmapText(900,10,'press_start_2p_font', "Day:"+this.game.nowday , 13)

        this.roomconfig();
    }      
   
/** select habilita la aparicion del prismático correspondiente a la habitacion
 * seleccionada y deshabilita la posibilidad de seleccionar otra habitación para evitar
 * que aparezcan las opciones de otras que no sean la seleccionada
 *  @param {number} a
 * */   
      select(a){    
        //desabilitamos la opción de que pueda pulsar de nuevo en una ventana
        this.roomarray.forEach(item => item.disableInteractive())
        
        let roomName = 'room' + a;
        this.prismaticarry[a-1].setVisible(true)
        .setInteractive()
               
        this.auriculararray[a-1].setVisible(true)
        .setInteractive()
        
        this.backbutton.setVisible(true);
        this.backbutton.setInteractive();
        
        //oscurece fondo de las ventanas
        this.roomarray.forEach(item => item.setAlpha(0.5))
        this.roomarray[a-1].setAlpha(1);

        //volvemos hacia atras si pulsamos <--
        this.backbutton.on('pointerdown',backbutton=>{this.disableselect()});
        this.notebook.setVisible(false);
    }
    roomconfig(){
    
        for(let i = 0;i<this.roomarray.length;i++){
            this.roomarray[i].setOrigin(0,0)
            .setInteractive()
            .on('pointerover',()=>this.roomarray[i].setTint(0x999999))
            .on('pointerout',()=>this.roomarray[i].clearTint())
            .on('pointerdown',()=>{this.select(i+1)});
        }
        //backbutton es invisible si no hay habitación pulsada
        this.backbutton.setOrigin(0,0);
        this.backbutton.setVisible(false);
        
        this.notebook.setOrigin(0,0)
        .setVisible(true)
        .setInteractive()
        .on('pointerover',()=>this.notebook.setTint(0x999999))
        .on('pointerout',()=>this.notebook.clearTint())
        .on('pointerdown',()=>{this.scene.sleep('general'); this.scene.launch('notebook')})

        //al pulsar encima de un auricular escuchas el microfono de la habitación pulsada
        for(let i = 0;i<  this.prismaticarry.length;i++){
            let roomName = 'room'+(i+1);
            this.prismaticarry[i].setVisible(false)
            .on('pointerover',()=>this.prismaticarry[i].setTint(0x999999))
            .on('pointerout',()=>this.prismaticarry[i].clearTint())
            .on('pointerdown',()=>{this.scene.sleep();this.scene.launch(roomName,this.notebookscene),
                this.time_bar.menostiempo()})
        }
        //al pulsar encima del prismático cambia la escena y muestra la habitación pulsada
        for(let i = 0;i<  this.auriculararray.length;i++){
            let roomName = 'room'+i;
            this.auriculararray[i].setVisible(false)
            .on('pointerover',()=>this.auriculararray[i].setTint(0x999999))
            .on('pointerout',()=>this.auriculararray[i].clearTint())
            .on('pointerdown',()=>{this.auriculararray[i].showdialog(this.preguntaHora()),this.backactive(false),
                this.time_bar.menostiempo()})
        }

        this.icono_pregunta
        .setOrigin(0,0)
        .setInteractive()
        .on('pointerover',()=>this.icono_pregunta.setTint(0x999999))
        .on('pointerout',()=>this.icono_pregunta.clearTint())
        .on('pointerdown',()=>{this.scene.switch('pregunta')});

        //uso de coffe
        this.coffe_
        .setInteractive()
        .on('pointerover',()=>this.coffe_.setTint(0x999999))
        .on('pointerout',()=>this.coffe_.clearTint())
        .on('pointerdown',()=>{this.time_bar.mastiempo(1)}); 
 
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
        this.roomarray.forEach(item => item.setInteractive())

        //restauramos la claridad del sprite de las ventanas
        this.roomarray.forEach(item => item.setAlpha(1))

        this.notebook.setVisible(true);
       //hacemos invisibles de nuevo tanto los auriculares como los        
       //prismáticos de cada ventana al volver a la visión general y los cuadros de texto
       this.prismaticarry.forEach(item => item.setVisible(false))
       this.auriculararray.forEach(item => item.setVisible(false))        
        
    }

    backactive(b){
        this.backbutton.setVisible(b);
        this.backbutton.setInteractive(b);
    }

    preguntaHora(){
       return this.time_bar.horas_eventos;      
    }

    update(t,dt){
        if (this.time_bar.horas_disponibles ===0){
            this.prismaticarry.forEach(item => item.disableInteractive())
            this.auriculararray.forEach(item => item.disableInteractive())    
        }
    }
}