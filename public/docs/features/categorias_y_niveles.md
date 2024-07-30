# Sistema de Categorías y Niveles en Profundismo RPG

## Introducción

El sistema de categorías y niveles es una parte fundamental de Profundismo RPG, diseñado para representar el progreso del jugador en diferentes aspectos de su vida. Este sistema gamifica el desarrollo personal, permitiendo a los usuarios visualizar su crecimiento y motivándolos a mejorar en varias áreas.

## Estructura de Datos

### Categorías de Vida

El juego incluye seis categorías principales:

1. Mente
2. Cuerpo
3. Alimentación
4. Higiene
5. Economía
6. Sueño

Cada categoría tiene las siguientes propiedades:

- Nivel actual
- Experiencia actual
- Nivel máximo
- Ratio de dificultad
- Experiencia base para el primer nivel

## Sistema de Niveles

### Nivel Global (LvG)

El Nivel Global se calcula como la suma de todos los niveles de categoría, más un decimal que representa el progreso promedio hacia el siguiente nivel en todas las categorías.

Ejemplo: LvG 8.29 significa nivel 8 con un 29% de progreso promedio hacia el nivel 9.

### Niveles de Categoría (LvC)

Cada categoría tiene su propio nivel, representado como un número entero. El progreso hacia el siguiente nivel se muestra como un porcentaje o una barra de progreso en la interfaz de usuario.

## Sistema de Experiencia

### Cálculo de Experiencia Necesaria

La experiencia necesaria para subir de nivel se calcula usando la fórmula:

```
XP = XP_base * (ratio ^ (nivel - 1))
```

Donde:
- XP_base es la experiencia base de la categoría
- ratio es el ratio de dificultad de la categoría
- nivel es el nivel actual

### Ganancia y Pérdida de Experiencia

Los jugadores ganan experiencia realizando actividades relacionadas con cada categoría. También pueden perder experiencia por inactividad o acciones negativas.

## Límites de Nivel

- El nivel mínimo para cada categoría es 1.
- El nivel máximo está definido individualmente para cada categoría.
- La experiencia no puede ser negativa.

## Interfaz de Usuario

La interfaz de usuario muestra:

- El Nivel Global del jugador
- Los niveles individuales de cada categoría
- Barras de progreso para visualizar la experiencia actual y la necesaria para el siguiente nivel

## Persistencia de Datos

Los niveles y la experiencia se guardan automáticamente y se cargan al iniciar el juego, permitiendo un seguimiento continuo del progreso del jugador.

## Impacto en el Juego

Los niveles de las categorías afectan varios aspectos del juego, como:

- La dificultad de las actividades relacionadas
- Los logros y recompensas disponibles
- El desbloqueo de nuevas funcionalidades o áreas del juego

## Conclusión

El sistema de categorías y niveles proporciona una estructura clara para el progreso del jugador en Profundismo RPG. Permite una gamificación efectiva del desarrollo personal, motivando a los usuarios a mejorar en múltiples aspectos de su vida diaria.