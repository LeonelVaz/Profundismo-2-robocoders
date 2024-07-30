Este juego, llamado "Profundismo RPG", es un sistema de desarrollo personal gamificado que permite a los usuarios rastrear y mejorar varios aspectos de su vida diaria. Aquí hay un resumen detallado de sus características principales:

1. Categorías de vida y Sistema de niveles.
Categorías de vida: El juego tiene seis categorías principales: Mente, Cuerpo, Alimentación, Higiene, Economía y Sueño.
Sistema de niveles: Cada categoría tiene un nivel (LvC) que puede aumentar o disminuir según las actividades realizadas. También hay un nivel global (LvG) que es la suma de todos los niveles de categoría.

2. Actividades diarias y Puntuación.
Actividades diarias: Los usuarios registran las actividades que realizan cada día en cada categoría, marcándolas como realizadas, a medias o no realizadas.
Puntuación: Cada actividad tiene una puntuación asociada que afecta al nivel de la categoría correspondiente.

3. Sistema de experiencia.
Incluye un sistema de experiencia (Se define tanto como EXP o XP) que afecta cómo se ganan los niveles en cada categoría.

4. Evaluación diaria e Informes semanales.
Evaluación diaria: El juego calcula si un día fue bueno, malo, "meh" o libre basándose en los cambios en el LvG.
Informes semanales: El sistema genera informes semanales que resumen el progreso del usuario.

5. Historial y Persistencia de datos.
Historial: Registro de todas las puntuaciones diarias del jugador.
Persistencia de datos: El juego guarda los resultados diarios, permitiendo a los usuarios ver su progreso a lo largo del tiempo.

6. Mecánica de "muerte" y "victoria".
Si el usuario tiene más días malos que buenos en una semana, se considera una "muerte" que reinicia el juego con penalizaciones. Alcanzar el nivel máximo se considera una "victoria" que reinicia el juego con bonificaciones.

7. Umbrales adaptativos.
Los niveles mínimos y máximos de cada categoría se ajustan según el rendimiento del jugador a lo largo del tiempo.

8. Moneda del juego "DLA".
Los usuarios pueden ganar DLA basados en su rendimiento semanal.

9. Objetivo del día.
Misiones diarias autoimpuestas por el jugador, 1 sola mision en el dia.

10. Notas y Agenda.
Interfaz de notas con una agenda. (Ampliar)

11. Perfiles y Sistema de creación de perfiles.
Perfiles: Los perfiles son modos de juego que puede seleccionar el jugador, este modo se selecciona cuando se crea un personaje o cuando se reinicia el juego (Ya sea por haber llegado a nivel maximo o haber perdido), cada perfil tiene diferentes actividades y puntuacion en cada una de las 6 categorias de vida (lvC).
Sistema de creación de perfiles: Se pueden crear perfiles personalizados a gusto del jugador.

12. Inventario, equipamiento.
El inventario almacena los items comprados en la tienda o conseguido como premios del juego, aqui se almacenan tanto la moneda dla como diferentes items que pueden ser permanentes o temporales, los items equipados desaparecen del inventario y pasan a estar en el equipamiento, los items temporales no se pueden desequipar, pero los permanentes si, si se desequipa un item permanente vuelve a estar en el inventario.

13. Tienda.
Aqui se pueden comprar items tanto temporales como permanentes, la moneda que se usa es el dla, luego de comprarlo pasa a estar en el inventario del jugador para que este se lo pueda equipar cuando lo desee.

14. Item "Dia libre"
Este item se puede adquirir tanto en la tienda por 2 dla como por premio semanal, si sobreviviste a la semana se te entregará como premio 2 items de "Dia libre", este items se puede consumir para que en dicho dia puedas tomarte el dia.
Este item hace que no se altere la exp ni los niveles en el dia, por lo que podras hacer lo que quieras ese dia y no tendras ninguna repercucion en el juego.
Los items de "Dia libre" entregados como premio semanal desaparecen una vez terminada la semana, el jugador tiene toda la semana para consumir sus 2 items, si no los consume los perderá al finalizar la semana, en el caso que sobreviva se le volveran a dar 2 "Dia libre" de premio y el ciclo se repetirá.
Cuando se realiza el informe semanal los dias que se utilizaron el item "Dia libre" contarán como medio punto de dia bueno, esto se representa como "Libre" en el informe semanal.

15. Motivador AI.
Un ente de inteligencia artificial que habla y motiva al jugador mediante un chat (Una ventana que se superpone en game-screen que se puede minimizar y maximizar, esta ventana se puede mover por toda la pantalla)


Orden de implementación:

1. Categorías de vida y Sistema de niveles
    Plan de accion en: "plan_de_accion_1_categorias_y_niveles.txt"
2. Actividades diarias y Puntuación
    Plan de accion en: "plan_de_accion_2_actividades_y_puntuacion.txt"
3. Sistema de experiencia
    Plan de accion en: "plan_de_accion_3_sistema_experiencia.txt"
4. Evaluación diaria e Informes semanales
    Plan de accion en: "plan_de_accion_4_evaluacion_e_informes.txt"
5. Historial y Persistencia de datos
    Plan de accion en: "plan_de_accion_5_historial_y_persistencia.txt"
6. Mecánica de "muerte" y "victoria"
    Plan de accion en: "plan_de_accion_6_mecanica_muerte_victoria.txt"
7. Umbrales adaptativos
    Plan de accion en: "plan_de_accion_7_umbrales_adaptativos.txt"
8. Moneda del juego "DLA"
    Plan de accion en: "plan_de_accion_8_moneda_dla.txt"
9. Objetivo del día
    Plan de accion en: plan_de_accion_9_objetivo_del_dia.txt
10. Notas y Agenda
    Plan de accion en: plan_de_accion_10_notas_y_agenda.txt
11. Perfiles y Sistema de creación de perfiles
    Plan de accion en: plan_de_accion_11_perfiles_y_creacion_perfiles.txt
12. Inventario y equipamiento
    Plan de accion en: plan_de_accion_12_inventario_y_equipamiento.txt
13. Tienda
    Plan de accion en: plan_de_accion_13_tienda.txt
14. Item "Dia libre"
    Plan de accion en: plan_de_accion_14_item_dia_libre.txt
15. Motivador AI
    Plan de accion en: plan_de_accion_15_motivador_ai.txt

Estructura actual del juego:
¦   CHANGELOG.md (Archivo actualmente vacio)
¦   index.html
¦   README.md (Archivo actualmente vacio)
¦   
+---backup // (Por si hay que guarda codigo de respaldo)
¦           
+---docs
¦   ¦   contribution.md (Archivo actualmente vacio)
¦   ¦   index.md
¦   ¦   usage.md (Archivo actualmente vacio)
¦   ¦   
¦   +---dev
¦   ¦       desarrollo.md (Este mismo archivo)
¦   ¦       example_resumen_semanal.txt
¦   ¦       
¦   +---guides
¦   ¦       getting_started.md
¦   ¦       
¦   +---plan_accion
¦   ¦       plan_de_accion_10_notas_y_agenda.txt
¦   ¦       plan_de_accion_11_perfiles_y_creacion_perfiles.txt
¦   ¦       plan_de_accion_12_inventario_y_equipamiento.txt
¦   ¦       plan_de_accion_13_tienda.txt
¦   ¦       plan_de_accion_14_item_dia_libre.txt
¦   ¦       plan_de_accion_15_motivador_ai.txt
¦   ¦       plan_de_accion_1_categorias_y_niveles.txt
¦   ¦       plan_de_accion_2_actividades_y_puntuacion.txt
¦   ¦       plan_de_accion_3_sistema_experiencia.txt
¦   ¦       plan_de_accion_4_evaluacion_e_informes.txt
¦   ¦       plan_de_accion_5_historial_y_persistencia.txt
¦   ¦       plan_de_accion_6_mecanica_muerte_victoria.txt
¦   ¦       plan_de_accion_7_umbrales_adaptativos.txt
¦   ¦       plan_de_accion_8_moneda_dla.txt
¦   ¦       plan_de_accion_9_objetivo_del_dia.txt
¦   ¦       
¦   +---prompts
¦           
+---interface
¦   +---character-creation
¦   ¦       character-creation.css
¦   ¦       character-creation.html
¦   ¦       
¦   +---common
¦   ¦       common.css
¦   ¦       
¦   +---daily-activities
¦   ¦       daily-activities.css (Archivo actualmente vacio)
¦   ¦       daily-activities.html (Archivo actualmente vacio)
¦   ¦       
¦   +---game-screen
¦   ¦       game-screen.css
¦   ¦       game-screen.html
¦   ¦       
¦   +---history
¦   ¦       history.css (Archivo actualmente vacio)
¦   ¦       history.html (Archivo actualmente vacio)
¦   ¦       
¦   +---main-menu
¦   ¦       main-menu.css
¦   ¦       main-menu.html
¦   ¦       
¦   +---store
¦   ¦       store.css (Archivo actualmente vacio)
¦   ¦       store.html (Archivo actualmente vacio)
¦   ¦       
¦   +---weekly-report
¦           weekly-report.css (Archivo actualmente vacio)
¦           weekly-report.html (Archivo actualmente vacio)
¦           
+---js
    ¦   main.js
    ¦   
    +---assets
    ¦   +---fonts (Carpeta actualmente vacia)
    ¦   +---images (Carpeta actualmente vacia)
    ¦
    +---modules
    ¦       characterCreation.js
    ¦       dailyActivities.js
    ¦       equipement.js (Archivo actualmente vacio)
    ¦       experienceSystem.js (Archivo actualmente vacio)
    ¦       gameLogic.js
    ¦       gameState.js (Archivo actualmente vacio)
    ¦       inventory.js (Archivo actualmente vacio)
    ¦       moneyDla.js (Archivo actualmente vacio)
    ¦       profundismoCore.js (Archivo actualmente vacio)
    ¦       saveLoad.js
    ¦       store.js (Archivo actualmente vacio)
    ¦       uiController.js
    ¦       weeklyReport.js (Archivo actualmente vacio)
    ¦       
    +---utils
            calculations.js (Archivo actualmente vacio)
            constants.js (Archivo actualmente vacio)
            initParticles.js
            particles-config.js
            


A continuacion daré un ejemplo de como es la configuracion de un perfil, hay que crear una carpeta para almacenar los perfiles, cada perfil tiene su propio archivo, en cada categoria hay actividades, por ejemplo para "mente" la primera actividad es "momentum", los numeros que aparecen a continuacion de la actividad representa el "realizado" que corresponde a 10 puntos de exp, seguido de "realizado a medias" que corresponde a -50 puntos de exp y "no realizado" que corresponde a -90 puntos de exp. 

Perfil Polifacético:

Nivel maximo de actividad.
Mente: 25
Cuerpo: 20
Higiene: 10
Alimentacion: 15
Economia: 30
Sueño: 10

Ratio de dificultad por nivel.
Mente: 1.05
Cuerpo: 1.05
Higiene: 1.05
Alimentacion: 1.05
Economia: 1.05
Sueño: 1.08

Experiencia necesaria para conseguir el primer nivel.
Mente: 70
Cuerpo: 120
Higiene: 80
Alimentacion: 70
Economia: 60
Sueño: 100

Se comienza con todos los niveles en "0" sin exp acumulada.

CATEGORIAS = {
    "Mente": {
        "Momentum": (10, -50, -90),
        "Habilidades Nuevas": (20, 2, -10),
        "Filosofía": (15, 3, -5),
        "Tecnología": (10, 1, -5),
        "Pensamiento Crítico": (15, 3, -5),
        "Mindfulness": (20, 5, -5),
        "Lectura": (30, 9, -5),
        "Juegos Mentales": (15, 3, -5),
        "Creatividad": (20, 5, -5),
        "Financiero": (30, 6, -10),
        "Inteligencia Social": (30, 6, -10),
    },
    "Cuerpo": {
        "Ejercicio Aeróbico": (30, 0, -20),
        "Entrenamiento de Fuerza": (30, 0, -20),
        "Flexibilidad y Movilidad": (15, 3, -5),
        "Entrenamiento de Equilibrio": (15, 3, -5),
        "Deportes de Equipo": (50, 17, -5),
        "Deportes Individuales": (30, 9, -5),
        "Actividades al Aire Libre": (25, 7, -5),
        "Entrenamiento Funcional": (20, 5, -5),
        "Descanso y Recuperación": (15, 1, -20),
    },
    # "Alimentacion" Invertido, en este caso es mejor 2 dias comer bien a medias que un dia bien y otro mal.
    "Alimentacion": {
        "Dieta Balanceada": (40, 0, -60),
        "Hidratación": (20, 0, -40),
        "Nutrición Deportiva": (50, 26, -10),
        "Bienestar Digestivo": (20, 8, -10),
        "Suplementación Nutricional": (20, 12, 0),
        "Ayuno Intermitente": (30, 18, 0),
    },
    "Higiene": {
        "Aseo diario": (
            10,
            -10,
            -100,
        ),  # Aseo a medias significa que el dia siguiente de haberse bañado no se baño, osea 1 dia sin bañarse -10 puntos.
        "Afeitar, perfume, peinado": (30, 6, -30),
        "Vestimenta": (50, -10, -50),
        "Limpieza de casa": (50, -10, -50),
        "Cuidado Personal": (20, 5, -5),
    },
    "Sueño": {
        "Dormir Noche": (100, -20, -100), # +8hs 100 puntos, entre 6hs y 8hs -20 puntos, menos de 6hs -100 puntos.
        "Siesta": (50, 20, 0), # +2hs 50 puntos, entre 1hs y 2hs 20 puntos, menos de 1hs 0 puntos.
    },
    "Economia": {
        "Ganancias diarias": (50, -10, -50),
        "Ganancias a largo plazo": (50, -10, -50),
        "Planificación y gestión": (25, 4, -10),
        "Ahorro e Inversión": (20, 5, -5),
        "Gestión de Deudas": (20, 2, -10),
        "Planificación Fiscal": (30, 6, -10),
    },
}


Informe técnico del sistema de experiencia:
La experiencia puede estar representada tanto como "exp" o "xp", son lo mismo.

1. Estructura del sistema:

El sistema de experiencia se compone de cinco actividades principales:
- Higiene
- Alimentación
- Economía
- Mente
- Cuerpo
- Sueño

Cada actividad tiene tres parámetros:
a) Niveles máximos: Define el tope de niveles para cada actividad.
b) XP Base: La cantidad de experiencia necesaria para alcanzar el primer nivel.
c) Ratio de crecimiento: Un multiplicador que determina cuánto aumenta la XP necesaria para cada nivel sucesivo.

2. Cálculo de experiencia:

La experiencia necesaria para cada nivel se calcula mediante la fórmula:
XP = XP_base * (ratio ^ (nivel - 1))

Donde:
- XP_base es la experiencia base de la actividad
- ratio es el ratio de crecimiento de la actividad
- nivel es el nivel actual

Esta fórmula genera una curva de crecimiento exponencial, haciendo que los niveles superiores requieran más XP que los inferiores.

3. Progresión del jugador:

El jugador gana o pierte XP (exp) cada dia segun las actividades que este complete.

4. Sistema de reinicio:

El sistema afecta a la dificultad global. Cada reinicio incrementa el ratio de crecimiento de XP en un 5% para todas las actividades si es un reinicio por victoria, y un 2% si es un reinicio por muerte:


5. Cálculo de progresión:

Para cada actividad, el sistema calcula:
a) La XP necesaria para cada nivel individual.
b) La XP acumulada necesaria para alcanzar cada nivel.

El nivel puede retroceder si se tiene menos de 0 XP acumulada, esto quiere decir que si tengo 10 XP acumulado en una actividad y ese dia obtengo un -20 XP, si fuera nivel 5 pasaria a nivel 4, el nivel minimo es 0, no se puede disminuir el nivel por debajo de 0.

Este sistema de experiencia ofrece una gran flexibilidad para diseñar la curva de progresión del juego. Permite ajustar la dificultad y progresión de cada actividad de forma independiente, así como la dificultad global a través del sistema de reinicios.

**Ejemplo de resumen semanal (Leer "mas informacion" para entender como funciona)**
==================================================

2024 - Nombre de la partida - Numero de resumen semanal (Ejemplo: "Semana 2")
==================================================

Resumen 22-07 al 28-07

LvG: 8.29
LvCs:
	Mente: 0.12
	Cuerpo: 0.25
	Alimentacion: 0.30
	Higiene: 0.44
	Economia: 3.28
	Sueño: 5.35
	
==================================================

21-07 - Domingo: 3.4 (Dia anterior al comienzo de este resumen)

22-07 - Lunes: 3.9		(Meh)
23-07 - Martes: Libre 	(Libre)
24-07 - Miercoles: 5.36	(Bueno)
25-07 - Jueves: 4.85		(Malo)
26-07 - Viernes: 10.95	(Bueno)
27-07 - Sabado: Libre		(Libre)
28-07 - Domingo: 8.29		(Malo)

==================================================

Dias buenos: 2 db
Dias Malos: 2 dm
Dias Meh: 1 dh
Dias Libres: 2 dl

Calculo de dias buenos:
2 dl / 2 = 1 dlb
2 db + 1 dlb = 3 db

Calculo de dias malos:
1 dh / 2 = 0.5 dhm
2 dm + 0.5 dhm = 2.5 dm

Dias buenos - Dias Malos:
3 db - 2.5 dm = 0.5 dla

Dias libres adicionales:
1.35 dla (Anteriormente acumulados) + 0.5 dla (Nuevos dla conseguidos) = 1.85 dla (Actuales)


¡Sobreviviste! - Semana 2

Rango: Polifacetico Lv 8.29
+ 0.5 dla
+ 4.89 LvG
+ 3.29 LvC_E
+ 5.00 LvC_S

Sin modificar:
0.00 LvC_C
0.00 LvC_A
0.00 LvC_H
0.00 LvC_E


Aqui termina el ejemplo del informe semanal




**Mas informacion:**

LvC es el nivel de cada categoria.
LvG es la suma de todos los niveles de categoria.

Si bien no existen niveles como "5.35" que aparece en el ejemplo de sueño en LvCs, este se refiere a que es nivel 5 con un 35% de experiencia acumulada de 100% para llegar al proximo nivel. Este se representa luego del punto 5."35" por convenciencia para la explicación de los calculos.
Ten en cuenta que en el "LvG", en este caso utilizado el numero "8.29" como numero del LvG del dia Domingo, se refiere a que el jugador es LvG 8 y tiene en promedio 29% de experiencia promedio.
Estos 6 números dan como resultado un promedio de 29: 12, 25, 30, 44, 28, 35
Vamos a verificar el cálculo:
La suma de los números es: 12 + 25 + 30 + 35 + 28 + 44 = 174
Dividimos la suma entre la cantidad de números (6): 174 / 6 = 29
Por lo tanto, el promedio es 29.

Dia libre o simplemente "Libre" se refiere a que el jugador ese dia utilizó el item "Dia libre":
Este item hace que no se altere la exp ni los niveles en el dia, por lo que podras hacer lo que quieras ese dia y no tendras ninguna repercucion en el juego.
Cuando se realiza el informe semanal los dias que se utilizaron el item "Dia libre" contarán como medio punto de dia bueno, como se puede ver en el ejemplo a continuacion.

Significado de siglas:
db = Dia Bueno
dm = Dia Malo
dh = Dia Meh
dl = Dia Libre
dlb = Dia Libre Bueno
dhm = Dia Meh Malo
dla = Moneda del juego.

lvG = Nivel Global (Suma de todos los LvC)
LvC = Nivel de categoria.
LvC_M = Nivel de categoria especificando que es de Mente
LvC_C = Nivel de categoria especificando que es de Cuerpo
LvC_A = Nivel de categoria especificando que es de Alimentacion
LvC_H = Nivel de categoria especificando que es de Higiene
LvC_E = Nivel de categoria especificando que es de Economia
LvC_S = Nivel de categoria especificando que es de Sueño


Si tiene entre -0.3 y +1.0 es un dia meh.
Si tiene menos de -0.3 es un dia malo.
Si tiene mas de +1.0 es un dia bueno.
Libre significa que fue un dia Libre.



En "Dias buenos - Dias Malos:" se verifica si hubieron mas dias buenos o mas dias malos. En el caso de que haya mas dias malos, en vez de "Sobreviviste" es "Has sido Eliminado" y el juego se reinicia a nivel 0, se pierden todos los items y dla acumulados, ademas se comienza con una penalizacion (Acumulable, la penalizacion no desaparece exepto que se use un item especial)
Que sea acumulable quiere decir que será guardado como "Muertes acumuladas" Cada muerte acumulada, tiene una respectiva penalización como un 10% menos de experiencia recibida hasta que se utilice el item que quita la maldicion.
Esta maldicion contempla todos los lvC:
LvC_M = Nivel de Mente
LvC_C = Nivel de Cuerpo
LvC_A = Nivel de Alimentacion
LvC_H = Nivel de Higiene
LvC_E = Nivel de Economia
LvC_S = Nivel de Sueño


En cambio, al llegar a nivel maximo (100 lvG) el juego te da la opcion de reiniciar, pero en este caso se obtendrá una bonificacion de 15% a todos los nuevos dla que se ganen, ademas se conservara los dla y todo el inventario, solo se reinicia el nivel, este reinicio tambien hace que sea mas dificil subir de nivel, pero a diferencia de la maldicion por perder, no tienen una penalizacion en la obtencion de experiencia, sinó que el ratio de aumento de exp necesario por cada nivel aumenta, este aumento se define en los perfiles cuando el jugador inicia el juego, por ejemplo, el polifacetico tiene un ratio de 1.05 base en cada lvC, y al reiniciar estará configurado para que tenga un 1.05 osea 5% mas de ratio la exp necesaria en cada nivel. Cada lvc tiene un ratio base en particular el perfil polifacetico tiene un 1.05 de ratio base en cada uno, pero dependiendo el perfil este puede variar, por ejemplo, en otro ejemplo en LvC_S podria tener un ratio base de 1.07 y en LvC_H podria tener un ratio base de 1.03. Luego el ratio de reinicio es una propiedad aparte, que se aplica sobre el ratio base de cada lvC, este ratio de reinicio es un ratio global que se aplica sobre todos los LvC, osea que si tenias el ratio de 1.07 en LvC_H (Por ejemplo lv1: 100 puntos exp, lv2: 107 puntos exp) ahora tendras un ratio de 1.05 de exp extra sobre la experiencia que ya necesitavas, ejemplo: lv 1 necesita 105 puntos en vez de 100, y lv 2 necesita 112,35 puntos en vez de 107, osea que primero se aplica el primer ratio y luego el ratio global por reinicio, puede haber varios reinicios por lo que esto se tendra que tener en cuenta en el desarrollo, cada reinicio es acumulable, la diferencia es que el segundo reinicio si se suma al ratio global, osea que en vez de 0.5 será 0.10 (Esto lo aclaro para que no se mal entienda no es el 0.5 sobre el anterior 0.5, sino que como son ratios globales se suman dando como resultado 0.10, por ejemplo, si hubo 2 reinicios se suman 0.05 de ratio global a cada reinicio, osea 0.10 de ratio global, hagamos la cuenta: lv 1 necesitará 110 puntos de exp (100 con el ratio global 1.10), para nivel 2 se necesitará 117,7 puntos de exp (100 pasa a 107 por el ratio base de 1.07 luego a 107 se le aplica el ratio de 1.10 que da como resultado 117,7)


**Resumen de lo mencionado en el anterior texto: Reinicio de Nivel por ganar y Bonificaciones en el Juego**

Al alcanzar el nivel máximo (100 lvG) en el juego, se ofrece la opción de reiniciar el nivel del personaje. Este reinicio conlleva las siguientes características y beneficios:

1. **Bonificación por Reinicio:**
   - Al reiniciar, el jugador recibe una bonificación del 15% en todas las nuevas monedas (dla) que se ganen.
   - El inventario y las monedas actuales (dla) del jugador se conservan. Solo el nivel se reinicia.

2. **Dificultad Incrementada:**
   - El proceso de subir de nivel se vuelve más difícil después del reinicio.
   - A diferencia de las penalizaciones por perder, este incremento en la dificultad no afecta la obtención de experiencia de manera directa, sino que aumenta el ratio de experiencia necesaria por nivel.

3. **Ratios de Experiencia:**
   - Cada perfil de jugador tiene un ratio base de incremento de experiencia (exp) por nivel, definido al inicio del juego.
   - Ejemplo: El perfil "Polifacético" tiene un ratio base de 1.05, lo que significa que la experiencia necesaria aumenta en un 5% por cada nivel (lvC).

4. **Aplicación de Ratios tras el Reinicio:**
   - Después del reinicio, se añade un ratio global de incremento de experiencia necesario. Este ratio se aplica sobre el ratio base de cada nivel.
   - Ejemplo: Si el ratio base es 1.07 (LvC_H), con el ratio de reinicio adicional de 1.05, la experiencia necesaria se calcula así:
     - Nivel 1: Originalmente requiere 100 puntos de exp.
     - Con ratio base: Nivel 2 requiere 107 puntos de exp.
     - Con ratio de reinicio: Nivel 2 ahora requiere 112.35 puntos de exp (1.07 * 1.05).

5. **Acumulación de Reinicios:**
   - Cada reinicio es acumulable. Si un jugador reinicia por segunda vez, el ratio global se suma.
   - Ejemplo: Después de dos reinicios, el ratio global sería 1.10 (0.05 + 0.05).
     - Nivel 1: Requiere 110 puntos de exp (100 * 1.10).
     - Nivel 2: Requiere 117.7 puntos de exp (107 * 1.10).




Resumen:
Este juego busca motivar a los usuarios a mejorar diversos aspectos de su vida diaria, proporcionando un sistema de seguimiento y recompensas basado en sus acciones y decisiones cotidianas.
