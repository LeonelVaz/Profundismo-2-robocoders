# Sistema de Actividades Diarias y Puntuación

## Descripción General

El sistema de actividades diarias y puntuación es una característica central de Profundismo RPG que permite a los usuarios registrar sus actividades diarias y recibir puntos de experiencia basados en su desempeño. Este sistema está diseñado para motivar a los usuarios a mantener hábitos saludables y productivos en diversas áreas de su vida.

## Estructura de Datos

Las actividades diarias se organizan por categorías (Mente, Cuerpo, Alimentación, Higiene, Economía, Sueño) y cada actividad tiene la siguiente estructura:

```javascript
{
    name: "Nombre de la actividad",
    points: {
        completed: 50,  // Puntos ganados al completar
        partial: 25,    // Puntos ganados al realizar parcialmente
        notDone: -10    // Puntos perdidos al no realizar
    }
}
```

El estado de cada actividad se registra diariamente y puede ser uno de los siguientes:

- `completed`: La actividad se completó totalmente
- `partial`: La actividad se realizó parcialmente
- `notDone`: La actividad no se realizó

## Ejemplos de Actividades y Puntuaciones

### Categoría: Mente
- Actividad: "Lectura"
  - Completado: +30 puntos
  - Parcial: +9 puntos
  - No realizado: -5 puntos

### Categoría: Cuerpo
- Actividad: "Ejercicio Aeróbico"
  - Completado: +30 puntos
  - Parcial: 0 puntos
  - No realizado: -20 puntos

### Categoría: Alimentación
- Actividad: "Dieta Balanceada"
  - Completado: +40 puntos
  - Parcial: 0 puntos
  - No realizado: -60 puntos


## Funcionalidad

- El sistema inicializa las actividades diarias al cargar el juego.
- Los usuarios pueden marcar cada actividad como "Completada", "A medias" o "No realizada".
- Los puntos se aplican automáticamente a la categoría correspondiente según el estado de la actividad.
- Las actividades se reinician diariamente o mediante un botón de reinicio manual.

## Interfaz de Usuario

- Se ha creado una nueva página dedicada a las actividades diarias.
- La página muestra todas las actividades organizadas por categoría.
- Cada actividad tiene un selector para cambiar su estado.
- Un botón de reinicio permite restablecer todas las actividades a "No realizada".
- Se puede volver a la pantalla principal del juego desde la página de actividades diarias.

## Integración con el Sistema de Experiencia

- Los puntos ganados o perdidos por las actividades diarias se aplican directamente al sistema de experiencia existente.
- Esto afecta los niveles de las categorías y el nivel global del jugador.


## Integración con el Sistema de Categorías y Niveles

El sistema de actividades diarias está estrechamente integrado con el sistema de categorías y niveles:

1. Cada vez que se actualiza el estado de una actividad, se calculan los puntos de experiencia correspondientes.
2. Estos puntos se añaden o restan de la categoría correspondiente utilizando las funciones `addExperience` y `decreaseExperience`.
3. El cambio en la experiencia puede resultar en un aumento o disminución del nivel de la categoría.
4. El nivel global del jugador se recalcula basado en los niveles de todas las categorías.


## Persistencia de Datos

El estado de las actividades diarias se guarda junto con los otros datos del juego. Esto incluye:

- El estado actual de todas las actividades
- La fecha del último reinicio de actividades

Al cargar el juego, se verifica si es necesario reiniciar las actividades basado en la fecha actual.

## Archivos Relacionados

- `js/modules/dailyActivities.js`: Lógica principal del sistema de actividades diarias.
- `js/modules/uiController.js`: Manejo de la interfaz de usuario para las actividades diarias.
- `interface/daily-activities/daily-activities.html`: Estructura HTML de la página de actividades diarias.
- `interface/daily-activities/daily-activities.css`: Estilos CSS para la página de actividades diarias.
- `js/main.js`: Integración de las actividades diarias con el flujo principal del juego.


## Consideraciones Futuras

- Implementar un sistema para que los usuarios puedan personalizar sus propias actividades.
- Implementar un sistema de logros o recompensas basado en el cumplimiento constante de las actividades diarias.

