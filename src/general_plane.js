import Prismaticos from "./prismaticos.js"
import Auriculares from "./auriculares.js";
import TimeBar from "./timeBar.js";
import Coffe from "./coffe.js";
/**
 * Clase que crea la escena principal del juego, un plano general en que están los accesos a las escenas de habitación mediante prismáticos,
 * también a los eventos sonoros de las mismas habitaciones a través del los objetos auriculares.
 * En ella encontramos los accesos a otras escenas como la de notebook o la de pregunta.
 * Por último muestra también un timebar que indica la hora de juego y las disponibles, así como las tazas de café que podemos consumir para aumentar
 * esas horas disponibles
 */

export default class extends Phaser.Scene{
    constructor(){super({key: 'general'})}

    create(){
        this.background = this.add.image(500, 250,'generalbg'); //añadimos el fondo de la textbox

        //dialogo en formato json
        let dialogJson = this.cache.json.get('dialog'+this.game.currentDay);

        //creación de los prismáticos
        this.prismaticos1 = new Prismaticos (this,400,400)
        this.prismaticos2 = new Prismaticos (this,400,400)
        this.prismaticos3 = new Prismaticos (this,400,400)
        this.prismaticos4 = new Prismaticos (this,400,400)
        this.prismaticArray =[this.prismaticos1,this.prismaticos2,this.prismaticos3,this.prismaticos4] 
        this.prismaticArray.forEach(item => item.setScale(0.5))

        //creación de los auriculares
        this.auriculares1 = new Auriculares (this,500,400,dialogJson,"room1")
        this.auriculares2 = new Auriculares (this,500,400,dialogJson,"room2")
        this.auriculares3 = new Auriculares (this,500,400,dialogJson,"room3")
        this.auriculares4 = new Auriculares (this,500,400,dialogJson,"room4")
        this.auricularArray = [this.auriculares1,this.auriculares2,this.auriculares3,this.auriculares4]
        this.auricularArray.forEach(item => item.setScale(0.4))
        
        //sprites de las ventanas de las habitaciones
        this.room1= this.add.sprite(0,0,'room1');              
        this.room2= this.add.sprite(450,0,'room2');       
        this.room3= this.add.sprite(0,180,'room3');       
        this.room4= this.add.sprite(450,180,'room4');
        this.roomarray= [this.room1,this.room2,this.room3,this.room4]

        //sptrite que te lleva a la escena pregunta del dia
        this.iconoPregunta=this.add.sprite(900,100,'pregunta');

        //creacion del timeBar
        this.timeBar= new TimeBar (this,400,480);

        //creacion del coffe
        this.coffe_= new Coffe (this,950,400);
        
        //sprite del boton atras
        this.backButton=this.add.sprite(0,0,'back');

        this.notebook = this.add.sprite(0,400,'notebook_icon');
        //llamada inicial a la configuración 0 del plano general

        this.today = this.add.bitmapText(900,10,'press_start_2p_font', "Day:"+this.game.currentDay , 13)

        this.roomconfig();
    }      
   
/** select habilita la aparicion del prismático correspondiente a la habitacion
 * seleccionada y deshabilita la posibilidad de seleccionar otra habitación para evitar
 * que aparezcan las opciones de otras que no sean la seleccionada
 * 
 *  @param {number} a //indica la habitación que hemos seleccionado en general plane
 * */   
      select(a){    
        //desabilitamos la opción de que pueda pulsar de nuevo en una ventana
        this.roomarray.forEach(item => item.disableInteractive())
        
        let roomName = 'room' + a;
        this.prismaticArray[a-1].setVisible(true)
        .setInteractive()
               
        this.auricularArray[a-1].setVisible(true)
        .setInteractive()
        
        this.backButton.setVisible(true);
        this.backButton.setInteractive();
        
        //oscurece fondo de las ventanas
        this.roomarray.forEach(item => item.setAlpha(0.5))
        this.roomarray[a-1].setAlpha(1);

        //volvemos hacia atras si pulsamos <--
        this.backButton.on('pointerdown',backButton=>{this.disableSelect()});
        this.notebook.setVisible(false);
    }
    /**
     * Configuración general de parámetros cuando hacemos click en una de las habitaciones, desactivando otros
     * sprites clickables que pudieran alterar la escena tras esta selección y variando la transparencia de las otras
     * habitaciones para resaltar aquella que hemos seleccionado
     */
    roomconfig(){
    
        for(let i = 0;i<this.roomarray.length;i++){
            this.roomarray[i].setOrigin(0,0)
            .setInteractive()
            .on('pointerover',()=>this.roomarray[i].setTint(0x999999))
            .on('pointerout',()=>this.roomarray[i].clearTint())
            .on('pointerdown',()=>{this.select(i+1)});
        }
        //backButton es invisible si no hay habitación pulsada
        this.backButton.setOrigin(0,0);
        this.backButton.setVisible(false);
        
        this.notebook.setOrigin(0,0)
        .setVisible(true)
        .setInteractive()
        .on('pointerover',()=>this.notebook.setTint(0x999999))
        .on('pointerout',()=>this.notebook.clearTint())
        .on('pointerdown',()=>{this.scene.sleep('general'); this.scene.launch('notebook')})
        
        //al pulsar encima del prismático cambia la escena y muestra la habitación pulsada
        for(let i = 0;i<  this.prismaticArray.length;i++){
            let roomName = 'room'+(i+1);
            this.prismaticArray[i].setVisible(false)
            .on('pointerover',()=>this.prismaticArray[i].setTint(0x999999))
            .on('pointerout',()=>this.prismaticArray[i].clearTint())
            .on('pointerdown',()=>{this.scene.sleep();this.scene.switch(roomName,this.notebookscene),
                this.timeBar.menosTiempo()})
        }
        //al pulsar encima de un auricular escuchas el microfono de la habitación pulsada
        for(let i = 0;i<  this.auricularArray.length;i++){
            let roomName = 'room'+i;
            this.auricularArray[i].setVisible(false)
            .on('pointerover',()=>this.auricularArray[i].setTint(0x999999))
            .on('pointerout',()=>this.auricularArray[i].clearTint())
            .on('pointerdown',()=>{this.auricularArray[i].showDialog(this.preguntaHora()),this.disableObjects(),this.backActive(false),
                this.timeBar.menosTiempo()})
        }

        this.iconoPregunta
        .setOrigin(0,0)
        .setInteractive()
        .on('pointerover',()=>this.iconoPregunta.setTint(0x999999))
        .on('pointerout',()=>this.iconoPregunta.clearTint())
        .on('pointerdown',()=>{this.scene.switch('pregunta')});

        //uso de coffe
        this.coffe_
        .setInteractive()
        .on('pointerover',()=>this.coffe_.setTint(0x999999))
        .on('pointerout',()=>this.coffe_.clearTint())
        .on('pointerdown',()=>{this.timeBar.masTiempo(1)}); 
 
    }

    /**Metodo usado para volver a poner el plano general unicamente
     * con las ventanas y que no aparezcan auriculares ni prismáticos 
     */
    disableSelect(){
        //hacemos desaparecer el boton de volver atrás en el plano general
        this.backButton.setVisible(false);
        this.backButton.disableInteractive();

        //si volvemos atrás volvemos a activar las ventanas
        //hacemos interactiva cada ventanita
        this.roomarray.forEach(item => item.setInteractive());

        //restauramos la claridad del sprite de las ventanas
        this.roomarray.forEach(item => item.setAlpha(1));

        this.notebook.setVisible(true);
       //hacemos invisibles de nuevo tanto los auriculares como los        
       //prismáticos de cada ventana al volver a la visión general y los cuadros de texto
       this.prismaticArray.forEach(item => item.setVisible(false));
       this.auricularArray.forEach(item => item.setVisible(false));        

        
    }
    //método que hace el boton back visible e interactivo

    backActive(b){
        this.backButton.setVisible(b);
        this.backButton.setInteractive(b);
    }
    //método que devuelve la hora actual de juego
    preguntaHora(){
       return this.timeBar.horasEventos;      
    }

    //método que hace que si hemos agotado todas las horas disponibles se desactiven las funcionalidades
    //de los prismáticos y de los auriculares
    update(t,dt){
        if (this.timeBar.horasDisponibles ===0){
            this.prismaticArray.forEach(item => item.disableInteractive())
            this.auricularArray.forEach(item => item.disableInteractive())    
        }
    }
    disableObjects(){
        this.iconoPregunta.disableInteractive();
        this.coffe_.disableInteractive();
        this.notebook.disableInteractive();
    }
    activeObjects(){ 
       this.iconoPregunta.setInteractive();
       this.coffe_.setInteractive();
       this.notebook.setInteractive();
    }
}