import Boot from './boot.js';
import End from './end.js';
import Menu from './menu.js';
import General from'./general_plane.js';
//cuando una clase hereda de otra exportas el padre pero no exportas los hijos
//sino acaba dando error por importación circular
import Room1 from './room1.js';
import Room2 from './room2.js';
import Room3 from './room3.js';
import Room4 from './room4.js';
import NoteBook from './notebook.js';
import Pregunta from './pregunta.js';

/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
    type: Phaser.WEBGL,
    canvas: document.getElementById('juego'),
    width:  1000,
    height: 500,
    scale: {
        // mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot,Menu,General,End,Room1,Room2,Room3,Room4,NoteBook,Pregunta],
    physics: { 
        default: 'arcade', 
        arcade: { 
            gravity: { y: 400 }, 
            debug: false 
        } 
    }
};

new Phaser.Game(config);