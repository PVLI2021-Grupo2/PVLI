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
    this.load.image('room1','room1.png');
    this.load.image('room2','room2.png');
    this.load.image('room3','room3.png');
    this.load.image('room4','room4.png');
    this.load.image('earphone','earphone.png')
    this.load.image('back','go_back.png')
    this.load.image('room_smith','room_smith.png')
    this.load.image('room_cooper','room_cooper.png')
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('menu');
  }
}