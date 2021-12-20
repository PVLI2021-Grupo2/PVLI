/**
 * Escena para la precarga de los assets que se usarán en el juego.
 * Esta escena se puede mejorar añadiendo una imagen del juego y una 
 * barra de progreso de carga de los assets
 * @see {@link https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/} como ejemplo
 * sobre cómo hacer una barra de progreso.
 */
export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'boot' });
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    // Con setPath podemos establecer el prefijo que se añadirá a todos los load que aparecen a continuación
    this.load.setPath('assets/sprites/');

    this.load.image('binoculars','binoculars_icon.png');
    this.load.image('notebook_icon','notebook_icon.png');

    this.load.image('houses','houses.png');
    this.load.image('play','play_button.png');
    this.load.image('back','back_button.png');

    this.load.image('room1','window.png');
    this.load.image('room2','window2.png');
    this.load.image('room3','window3.png');
    this.load.image('room4','window4.png');
    this.load.image('generalbg','general_background.png');

    this.load.image('earphone','earphone.png')
    this.load.image('dialog','text_box.png')
    //para poner una imagen del atlas, hay que poner primero el nombre del atlas y después , y el de la imagen concreta 
    //por ejemplo " this.taza= this.add.sprite(100,150,'objects', 'object-26');"
    this.load.atlas('objects', 'objects.png', 'objects_atlas.json') 
    this.load.atlas('rooms', 'rooms.png', 'rooms_atlas.json') 
    this.load.image('clock','clock_icon.png')
    this.load.image('green','green_time.png')
    this.load.image('red','red_time.png')
    this.load.image('pregunta','pregunta_button.png')
    this.load.image('nextday','nextday_button.png')
    this.load.image('preguntabg','pregunta_background.jpg')
    this.load.image('notebook','notebook.png')
    
    this.load.setPath('assets/dialog/');
    this.load.json('dialog1', 'events.json');
    this.load.json('dialog2','events2.json');
    this.load.json('dialog3','events3.json');
    this.load.json('dialog4','events4.json');
    this.load.json('dialog5','events5.json');
    this.load.json('conclusiones','conclusiones.json');
    this.load.json('deducciones','deducciones.json');
    this.load.json('preguntas','preguntas.json');
    this.load.json('objectsjson','objects.json');
    this.load.json('finales','finales.json')
    
    this.load.setPath('assets/sounds/');
    this.load.audio('bgm','bgm.mp3');
    
    this.load.setPath('assets/fonts/');
    
    this.load.bitmapFont(
      'press_start_2p_font', 'press_start_2p_white.png',
      'press_start_2p.xml');
      this.load.bitmapFont(
        'dogica_font', 'dogica_0.png',
        'dogica.xml');   
      } 
      /**
       * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
       * nivel del juego
       */
  create() {
    this.scene.start('menu');
  }
  /**
   * Variables fundamentales de control del juego
   */
  init(){
    this.game.estadoCompartido = {
      observaciones:[],
      deducciones:[],
      conclusiones:[],
    };
    this.game.currentTime= 9 ;
    this.game.currentDay = 1 ;
  }
}