import { addExperience, decreaseExperience, categories } from './categoriesAndLevels.js';
import { gameState } from '../main.js';

// Estructura de datos para las actividades diarias
const dailyActivities = {
    Mente: [
        { name: "Momentum", points: { completed: 10, partial: -50, notDone: -90 } },
        { name: "Habilidades Nuevas", points: { completed: 20, partial: 2, notDone: -10 } },
        { name: "Filosofía", points: { completed: 15, partial: 3, notDone: -5 } },
        { name: "Tecnología", points: { completed: 10, partial: 1, notDone: -5 } },
        { name: "Pensamiento Crítico", points: { completed: 15, partial: 3, notDone: -5 } },
        { name: "Mindfulness", points: { completed: 20, partial: 5, notDone: -5 } },
        { name: "Lectura", points: { completed: 30, partial: 9, notDone: -5 } },
        { name: "Juegos Mentales", points: { completed: 15, partial: 3, notDone: -5 } },
        { name: "Creatividad", points: { completed: 20, partial: 5, notDone: -5 } },
        { name: "Financiero", points: { completed: 30, partial: 6, notDone: -10 } },
        { name: "Inteligencia Social", points: { completed: 30, partial: 6, notDone: -10 } }
    ],
    Cuerpo: [
        { name: "Ejercicio Aeróbico", points: { completed: 30, partial: 0, notDone: -20 } },
        { name: "Entrenamiento de Fuerza", points: { completed: 30, partial: 0, notDone: -20 } },
        { name: "Flexibilidad y Movilidad", points: { completed: 15, partial: 3, notDone: -5 } },
        { name: "Entrenamiento de Equilibrio", points: { completed: 15, partial: 3, notDone: -5 } },
        { name: "Deportes de Equipo", points: { completed: 50, partial: 17, notDone: -5 } },
        { name: "Deportes Individuales", points: { completed: 30, partial: 9, notDone: -5 } },
        { name: "Actividades al Aire Libre", points: { completed: 25, partial: 7, notDone: -5 } },
        { name: "Entrenamiento Funcional", points: { completed: 20, partial: 5, notDone: -5 } },
        { name: "Descanso y Recuperación", points: { completed: 15, partial: 1, notDone: -20 } }
    ],
    Alimentacion: [
        { name: "Dieta Balanceada", points: { completed: 40, partial: 0, notDone: -60 } },
        { name: "Hidratación", points: { completed: 20, partial: 0, notDone: -40 } },
        { name: "Nutrición Deportiva", points: { completed: 50, partial: 26, notDone: -10 } },
        { name: "Bienestar Digestivo", points: { completed: 20, partial: 8, notDone: -10 } },
        { name: "Suplementación Nutricional", points: { completed: 20, partial: 12, notDone: 0 } },
        { name: "Ayuno Intermitente", points: { completed: 30, partial: 18, notDone: 0 } }
    ],
    Higiene: [
        { name: "Aseo diario", points: { completed: 10, partial: -10, notDone: -100 } },
        { name: "Afeitar, perfume, peinado", points: { completed: 30, partial: 6, notDone: -30 } },
        { name: "Vestimenta", points: { completed: 50, partial: -10, notDone: -50 } },
        { name: "Limpieza de casa", points: { completed: 50, partial: -10, notDone: -50 } },
        { name: "Cuidado Personal", points: { completed: 20, partial: 5, notDone: -5 } }
    ],
    Economia: [
        { name: "Ganancias diarias", points: { completed: 50, partial: -10, notDone: -50 } },
        { name: "Ganancias a largo plazo", points: { completed: 50, partial: -10, notDone: -50 } },
        { name: "Planificación y gestión", points: { completed: 25, partial: 4, notDone: -10 } },
        { name: "Ahorro e Inversión", points: { completed: 20, partial: 5, notDone: -5 } },
        { name: "Gestión de Deudas", points: { completed: 20, partial: 2, notDone: -10 } },
        { name: "Planificación Fiscal", points: { completed: 30, partial: 6, notDone: -10 } }
    ],
    Sueno: [
        { name: "Dormir Noche", points: { completed: 100, partial: -20, notDone: -100 } },
        { name: "Siesta", points: { completed: 50, partial: 20, notDone: 0 } }
    ]
};

// Estado de las actividades diarias
let dailyActivityStatus = {};

// Inicializar el estado de las actividades
function initializeDailyActivities() {
    Object.keys(dailyActivities).forEach(category => {
        dailyActivityStatus[category] = dailyActivities[category].map(activity => ({
            name: activity.name,
            status: 'notDone'
        }));
    });
}

// Actualizar el estado de una actividad
function updateActivityStatus(category, activityName, status) {
    const categoryActivities = dailyActivityStatus[category];
    const activity = categoryActivities.find(act => act.name === activityName);
    if (activity) {
        activity.status = status;
        applyActivityPoints(category, activityName, status);
    }
}

// Aplicar puntos de experiencia basados en el estado de la actividad
function applyActivityPoints(category, activityName, status) {
    const activity = dailyActivities[category].find(act => act.name === activityName);
    if (activity) {
        const points = activity.points[status];
        if (points > 0) {
            addExperience(category, points);
        } else {
            decreaseExperience(category, Math.abs(points));
        }
    }
}

// Reiniciar las actividades diarias
function resetDailyActivities() {
    initializeDailyActivities();
}

// Obtener el estado actual de las actividades diarias
function getDailyActivityStatus() {
    // Si dailyActivityStatus está vacío, inicialízalo
    if (Object.keys(dailyActivityStatus).length === 0) {
        initializeDailyActivities();
    }
    return dailyActivityStatus;
}



// Función para aplicar los cambios de experiencia basados en el estado de las actividades
export function applyDailyActivitiesExperience() {
    Object.keys(dailyActivityStatus).forEach(category => {
        dailyActivityStatus[category].forEach(activity => {
            const points = dailyActivities[category].find(act => act.name === activity.name).points[activity.status];
            if (points > 0) {
                addExperience(category, points);
            } else {
                decreaseExperience(category, Math.abs(points));
            }
        });
    });
}

// Función para guardar el estado de las actividades diarias
export function saveDailyActivitiesState() {
    return {
        dailyActivityStatus: dailyActivityStatus,
        lastResetDate: gameState.lastResetDate
    };
}

// Función para cargar el estado de las actividades diarias
export function loadDailyActivitiesState(state) {
    if (state.dailyActivityStatus) {
        dailyActivityStatus = state.dailyActivityStatus;
    }
    if (state.lastResetDate) {
        gameState.lastResetDate = state.lastResetDate;
    }
}

// Función para verificar si es necesario reiniciar las actividades diarias
export function checkAndResetDailyActivities() {
    const currentDate = new Date().toDateString();
    if (currentDate !== gameState.lastResetDate) {
        resetDailyActivities();
        gameState.lastResetDate = currentDate;
    }
}



export {
    initializeDailyActivities,
    updateActivityStatus,
    resetDailyActivities,
    getDailyActivityStatus
};