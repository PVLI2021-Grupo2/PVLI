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
    this.load.image('platform', 'platform.png');
    this.load.image('base', 'base.png');
    this.load.image('star', 'star.png');
    this.load.image('player', 'player.png');
    this.load.image('general_plane','plano_general.png');
    this.load.image('binoculars','binoculars.png');
    this.load.image('houses','houses.png');
    this.load.image('play','play.png');
    this.load.image('wastetime','waste_time.png');
    this.load.image('general','general.png')
    this.load.image('room1','window.png');
    this.load.image('room2','window2.png');
    this.load.image('room3','window3.png');
    this.load.image('room4','window4.png');
    this.load.image('generalbg','general_background.png');

    this.load.image('earphone','earphone.png')
    this.load.image('back','go_back.png')
    this.load.image('room_smith','room_smith.png')
    this.load.image('room_cooper','room_cooper.png')
    this.load.image('room_charles','room_charles.png')
    this.load.image('room_william','room_william.png')
    this.load.image('dialog','text_box.png')
    this.load.image('sarah','sarah.png')
    //para poner una imagen del atlas, hay que poner primero el nombre del atlas y después , y el de la imagen concreta 
    //por ejemplo " this.taza= this.add.sprite(100,150,'objects', 'object-26');"
    this.load.atlas('objects', 'objects.png', 'objects_atlas.json') 
    this.load.atlas('rooms', 'rooms.png', 'rooms_atlas.json') 
    this.load.image('clock','clock_icon.png')
    this.load.image('green','green_time.png')
    this.load.image('red','red_time.png')
    this.load.image('coffe','coffe.png')

    
    this.load.image('notebook','notebook.png')


    this.load.setPath('assets/dialog/');
    this.load.json('dialog', 'events.json')

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
  init(){
    this.game.estadoCompartido = {
      observaciones:[],
      observaciones_id:[],
      deducciones:[],
      conclusiones:[],
    };
  }
}