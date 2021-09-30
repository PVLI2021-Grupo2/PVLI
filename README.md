# PVLI La ventana indiscreta

### Documento de diseño de videojuego

Autores:

* Dewei Chen (deweiche@ucm.es) 

* Menggen Hu (menhu@ucm.es) 

* Javier Muñoz García(javimuno@ucm.es)

* Elena Robert Núñez (elenrobe@ucm.es)

<table>
<tr>
    <td colspan = "2"> <b>Resumen:</b> Juego de gestión de recursos con narrativa basado en la famosa película “La ventana indiscreta” de  Hitchcock. El jugador podrá elegir entre estar dentro de su cuarto o mirar por la ventana para observar a sus distintos vecinos mediante el uso de prismáticos o micrófonos ocultos, en busca de desenmascarar a un posible asesino. </td>
        
    
</tr>
<tr>
    <td> <b>Géneros:</b> Narrativo, gestión, point and click </td>
    <td> <b>Modos:</b> Single Player </td>
        
    
</tr>
<tr>
    <td> <b>Público</b> objetivo: 
        Mayores de 16 (PEGI 16), todo género, España.
 </td>
    <td> <b>Plataformas:</b> Ordenador con navegador Chrome, teclado y ratón. </td>
        
    
</tr>
<tr>
    <td> <b>Cantidades:</b>

Escenarios: 7. (La habitación por dentro, el plano general del edificio de vecinos, callejón y cada una de las 4 habitaciones de vecinos.)

Objetos: 5

Personajes: 5


 </td>
    <td> <b>Hitos:</b>

Fecha de propuesta del concepto: 13/09/2021

Fechas de pre-producción:28/09/2021

Fechas de producción

Fecha de lanzamiento
 </td>
        
    
</tr>

</table>


### Descripción
Juego de gestión de recursos con narrativa basado en la película de hitchcock “la ventana indiscreta”, en la que el jugador se encuentra con un asesinato y debe descrubrir el verdadero asesino.

### Logotipo y portada del juego

### Versiones del documento

### Tabla de contenidos

1. [AspectosGenerales](#aspectosgenerales)
    1. [RelatoBreve](#relatobreve)
2. [MenúsModosDeJuego](#menusmodos)
    1. [Configuracion](#configuracion)
    2. [InterfazControl](#interfazControl)
3. [Jugabilidad](#jugabilidad)
    1. [Mecánica](#mecanica)
    2. [Dinámica](#dinamica)
    3. [Estética](#estetica)
4. [Contenido](#contenido)
    1. [Historia](#historia)
    2. [NivelesEventos](#niveleseventos)
    3. [Personajes](#personajes)
    4. [Objetos](#objetos)
5. [Referencias](#referencias)

### 1. Aspectos generales <a name="aspectosgenerales"></a>
#### Logotipo y portada del juego  
<img src="Images/ICONO_PVLI.png" width=300 height=300>

### Vista general  
<img src="Images/habProta.PNG" width=500 height=300>
<img src="Images/libreta.PNG" width=500 height=300>
<img src="Images/mirarVentana.PNG" width=500 height=300>
<img src="Images/planoGeneral.PNG" width=500 height=300>

#### 1.1 Relato breve y parcial de una partida típica <a name="relatobreve"></a>
El jugador comenzará a jugar situado viendo a su habitación, donde en principio habrá unos prismáticos. Tras equiparlos y cambiar de escena, puede dedicarse a ver cada una de las ventanas de sus 4 posibles vecinos. Durante el juego el jugador se va encontrando con eventos y va descubriendo la verdadera causa de muerte de William, elegirá el jugador un asesino entre todas las posibles.

### 2. Menús y modos de juego <a name="menusmodos"></a>
En el  menú estará como fondo una ilustración del juego y tendrá las opciones de (jugar, créditos). No existirán distintos modos de juego.
Existirá una música de fondo, efectos de sonido al clickar los diferentes objetos , imágenes de portada y para cada escena.


#### 2.1 Configuración <a name="configuracion"></a>
En principio no se puede configurar nada.

#### 2.2 Interfaz y control <a name="interfazControl"></a>
El juego principalmente se usará solo el ratón.

### 3. Jugabilidad <a name="jugabilidad"></a>

#### 3.1 Mecánica <a name="mecanica"></a>
**Cambio de escena.** El jugador puede ir de su habitación al plano general de edificios. (En caso de que tenga los prismáticos equipados, puede cambiar la escena para ver cada una de las habitaciones, o el callejón).

**Cuadros de texto.** Diálogos en los que se explica lo que sucede en los eventos, visuales o auditivos.

**Prismáticos.** Al tenerlos equipados y seleccionar una ventana en el plano general del edificio, el jugador puede ver lo que ocurre dentro, consumiendo 30 minutos de tiempo haya o no un evento dentro. Esta habilidad tiene un cooldown al usarse, ya que si estás demasiado tiempo mirando a una misma ventana, te pueden pillar. El tiempo máximo de mirar es 10 segundos. Al salirse de la ventana, se repondrá el cooldown progresivamente. Si al mirar a una ventana salta un evento, no habrá un cooldown y se retomará cuando termine el diálogo del evento. 

**Llamar a gente.** Al clickar en el teléfono de la habitación del protagonista, se abre la opción de llamar a cualquiera de los vecinos. Se da la opción de intentar hacer que el vecino salga de casa durante una hora (para poner micrófonos), o de hablar con ellos para que te den una pieza de información poco importante o sobre la rutina de otros vecinos.En caso de que esté sucediendo un evento en casa del vecino, te dirá que está ocupado y acabará la conversación.

**Paso de tiempo.** El tiempo transcurre en la medida que el jugador realiza acciones como el uso de los prismáticos (30 minutos), colocar micrófonos dentro del piso (30 minutos), llamada de teléfono que sea para obtener información (30 minutos).

**Elección de opciones.** Para decidir si al llamar a alguien es para persuadirlo de irse de casa o hablar y en el final del juego al decidir quién es el asesino.

**Tomar café.** Sirve para sumar media hora a la barra de horas disponibles del día. Hay un máximo de 10 veces que se puede descansar en un día y un máximo de 50 veces que se puede tomar café en todo el juego. Independientemente de cuánto se use esta función, el jugador se despierta a las 9.


**Micrófono.** Objeto que al equiparse y clickar una ventana se instala en las viviendas de los vecinos para obtener la conversación o sonidos que están sucediendo (la instalación está limitada a que el vecino esté fuera de casa). Si hay alguien en casa se baja la barra de anonimato al 0 y se pierde el juego. Habrá 2 micrófonos en el juego, ambos dados en el día 3.

**Libreta de información.** En la cual se va apuntando las pistas o pruebas importantes. Tiene una sección de perfiles básicos de los vecinos. Además, también se apuntan las conversaciones de los vecinos.


**Barra de anonimato.** Comienza con 100 puntos. Te baja cuando llamas a alguien, consigas o no información (en cuyo caso se guardará como evento en la libreta), o cuando te descubren mirando por una ventana. Se recupera al principio de cada día 20 puntos.


**Barra de horas disponibles.** Muestra la cantidad de horas que el jugador puede estar despierto. Tiene un máximo de 14 horas. Cuando se agota esta barra, el jugador está obligado a ir a dormir. El jugador siempre empieza el día a las 9 horas.

#### 3.2 Dinámica <a name="dinamica"></a>
A lo largo del juego la recolección de eventos importantes que permitan al jugador deducir la trama de cada uno de los pisos será fundamental y llegará a desbloquear distintos finales, algunos con un resultado positivo, digamos “habiendo ganado” por haber descubierto alguno de los hilos argumentales al completo, y otros finales en los que el jugador perderá. 

Durante el transcurso de los distintos días el jugador irá recopilando información que lo lleve a un desenlace u otro. Podrá obtener información que lo haga sospechar donde será más probable que ocurra algo, para estar pendiente de observar o escuchar a una u otra hora y así ir completando los hitos que le lleven a confirmar la culpabilidad de uno u otro vecino.

Los finales serán los siguientes:
1. El jugador gana la partida al acusar a la pareja Smith de intentar asesinar al profesor William Stanford y se le cuenta la historia subyacente del porqué de este intento de homicidio.

2. El jugador gana la partida al acusar a la Sra. Edna Cooper del asesinato del profesor William Stanford y se le cuenta la historia completa de como ha llegado a pasar eso.

3. El jugador gana la partida al acusar al detective Charles Doyle de tráfico de drogas y corrupción policial al no declarar las drogas incautadas y venderlas de manera ilegal por la noche.

4. El jugador pierde la partida por revelar su identidad al haber preguntado demasiado por diferentes cosas acusándolo del delito de acoso y difamación y por tanto acabando en la cárcel y no siendo capaz de desvelar ningún evento más (la barra de anonimato llega a 0).

5. El jugador pierde la partida al ser incapaz de recolectar suficientes pruebas, ni presenciar los eventos necesarios como para tener una idea clara de qué crímenes se han llegado a cometer.

A lo largo del juego esperamos que el jugador desarrolle ciertas estrategias, dentro de las cuales cabrá destacar las siguientes:

- Gestión del tiempo disponible para realizar acciones a lo largo del día, tanto de recolección de información como de observación de eventos relacionados.
- Gestión de los recursos y objetos que el jugador tiene disponible así como de su uso de los mismos ya que algunos tendrán un “cooldown” durante el cual el jugador no podrá usarlos.
- Creación de una estrategia con la que ser capaz de enfocarse en eventos que puedan tener relación entre ellos, puesto que si te centras en distintas líneas argumentales, seguramente no descubras una de ellas al completo y por ende pierdas la partida.

#### 3.3 Estética <a name="estetica"></a>
Para la representación de los escenarios y los personajes usaremos el pixel art.

### 4. Contenido <a name="contenido"></a>

#### 4.1 Historia <a name="historia"></a>
**Protagonista:** El protagonista de la historia es un periodista que se encuentra de vacaciones. Durante el inicio de estas, comenzó a dar rienda suelta a su curiosidad mediante el uso de sus prismáticos para observar a sus vecinos, explicando esto al principio del juego. Es cuando comienza el juego que empieza a pensar que ha podido haber un asesinato y solo tendrá los 7 días restantes de sus vacaciones para descubrir quién es el culpable.

**Vecino 1 :**  La familia Smith está compuesta por John y Sarah Smith, una pareja de doctores que en el momento en el que se desarrolla el juego están de luto por su difunto hijo pequeño, Kevin. Un mes antes de la muerte de William y de los acontecimientos del juego, Kevin Smith sufre acoso escolar, circunstancia que su profesor, el fallecido William, no da importancia, resultando en el suicidio del pequeño. A pesar de su pasividad ante la situación, no hubo consecuencias legales de ningún tipo contra William, causando rencor por parte de los padres del pequeño y dando un posible motivo para asesinar a William. John y Sarah consiguen en el principio del juego un veneno que intentan darle a William mediante comida con intención de acabar con él. Sin embargo, él tira la comida tan pronto como sale de su campo de visión, dando lugar a que el perro de la señora Cooper lo ingiriera y muriera, llegando ella a la conclusión de que como William siempre andaba con su perro, lo había matado.

**Vecino 2 :**  La Señora Edna Cooper llevaba una vida tranquila, en compañía de sus numerosos gatos y Candy, su perro, hasta que un día encuentra muerto a este último, tras haber ingerido una suculenta comida que contenía cianuro. Esta comida, que había preparado la pareja Smith para William acaba llegando al perro, ya que el profesor acostumbraba a darle de comer cuando visitaba a la pareja.
Tras este evento la Señora Cooper, consuma su venganza al invitar a tomar té el cual está adulterado con pastillas tranquilizantes, y este, tras consumirlo y quedar adormecido es posteriormente apuñalado numerosas veces, con las agujas de tejer por la anciana.
Al ser difícil para una persona de su edad sacar el cadáver, la anciana lo descuartiza poco a poco y mezclándolo con la comida de sus gatos hace que estos vayan dando cuenta del cuerpo.

**Vecino 3:**  El detective Charles Doyle, cansado de su vida de investigador y la poca remuneración que consigue con ello, decide tomar la vía rápida y vender las drogas que incautó en sus redadas y venderlas por su cuenta, siendo un negocio mucho más lucrativo.
Charles tiene montado su pequeño negocio clandestino en el callejón aledaño al edificio, al cual baja numerosas veces a lo largo de la noche para comerciar con su mercancía. 

**Vecino 4:**  El profesor William Scott ha ejercido como docente durante muchos años a lo largo de su vida, perdiendo la pasión por su trabajo a lo largo de los años. Tanto ha sido así, que sabiendo que uno de sus alumnos, Kevin, el hijo de los Smith, estaba siendo víctima de acoso escolar no hizo nada, ni tan siquiera hablar con sus padres sobre ello, los cuales son vecinos suyos.
Tras el suicidio del niño, William ahoga su culpabilidad en alcohol por las tardes y las noches.


#### 4.2 Niveles o eventos <a name="niveleseventos"></a>
En nuestro juego no existirán niveles, sino que tendrán lugar eventos a lo largo de los 7 días de la semana.

En proceso:

[Eventos y dialogos](EventosYdialogos.md)

#### 4.3 Personajes <a name="personajes"></a>
Protagonista: Tom  
Vecino 1:  Padre:John Smith Madre: Sarah Smith  HIjo:Kevin Smith  
Vecino 2 : Señora Edna Cooper  Perro: Candy  
Vecino 3: Detective Charles Doyle  
Vecino 4:  Profesor William Scott.  

#### 4.4 Objetos <a name="objetos"></a>
**Prismáticos:** Sirven para mirar a través de las ventanas a los distintos vecinos. Tiene un límite de tiempo de 10 segundos , la cual si se pasa el tiempo se baja en la barra de anonimatos.

**Micrófonos:** Se ponen en las casas de los vecinos para escuchar las conversaciones, es esencial que no haya nadie en casa para poder colocarlos. Límite de 2.

**Auriculares:** Dispositivo que se usa para escuchar los micrófonos. No se pueden usar de forma simultánea a los prismáticos.

**Teléfono:** Sirve para hacer llamadas a los vecinos para recolectar información, el vecino puede contestar o no. Una vez que se usa disminuye la barra de anonimato.

**Libreta de información:** Libreta a la que tiene acceso el jugador en cualquier momento, allí se apuntan todos los eventos e informaciones obtenidos hasta el momento.


### 5. Referencias <a name="referencias"></a>

- *“La ventana indiscreta”* - Alfred Hitchcock
- *“Stardew Valley”*
- *“Asesinato en el orient express”* - Agatha Christie
- *“Who is the murderer”*- Programa de TV
- *“Do not feed the monkeys”*
- *“The beholder”*
- *“Five nights at Freddy’s”*




