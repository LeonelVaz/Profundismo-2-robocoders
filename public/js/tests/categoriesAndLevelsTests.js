import {
    categories,
    calculateGlobalLevel,
    addExperience,
    decreaseExperience,
    getCategoryProgress,
    resetCategories
} from '../modules/categoriesAndLevels.js';

export function runCategoriesAndLevelsTests() {
    console.log('Iniciando pruebas del sistema de categorías y niveles...');

    // Prueba 1: Verificar el estado inicial
    console.log('Prueba 1: Estado inicial');
    resetCategories();
    console.assert(calculateGlobalLevel() === 0, 'El nivel global inicial debe ser 0');
    Object.keys(categories).forEach(category => {
        console.assert(categories[category].level === 0, `El nivel inicial de ${category} debe ser 0`);
        console.assert(categories[category].experience === 0, `La experiencia inicial de ${category} debe ser 0`);
    });

    // Prueba 2: Aumento de nivel en todas las categorías
    console.log('Prueba 2: Aumento de nivel en todas las categorías');
    addExperience('Mente', 70);
    addExperience('Cuerpo', 120);
    addExperience('Alimentacion', 70);
    addExperience('Higiene', 80);
    addExperience('Economia', 60);
    addExperience('Sueno', 100);

    Object.keys(categories).forEach(category => {
        let progress = getCategoryProgress(category);
        console.assert(progress.level === 1, `El nivel de ${category} debe ser 1 después de añadir XP`);
        console.assert(progress.experience === 0, `La experiencia de ${category} debe ser 0 después de subir de nivel`);
    });

    // Prueba 3: Cálculo del LvG
    console.log('Prueba 3: Cálculo del LvG');
    let lvg = calculateGlobalLevel();
    console.assert(lvg === 6, `El LvG debe ser 6 (suma de todos los niveles en 1), valor actual: ${lvg}`);

    // Prueba 4: Experiencia parcial
    console.log('Prueba 4: Experiencia parcial');
    addExperience('Mente', 35);
    let menteProgress = getCategoryProgress('Mente');
    console.assert(menteProgress.level === 1, 'El nivel de Mente debe seguir siendo 1');
    console.assert(menteProgress.experience === 35, 'La experiencia de Mente debe ser 35');

    // Prueba 5: Disminución de experiencia
    console.log('Prueba 5: Disminución de experiencia');
    decreaseExperience('Mente', 20);
    menteProgress = getCategoryProgress('Mente');
    console.assert(menteProgress.level === 1, 'El nivel de Mente debe seguir siendo 1');
    console.assert(menteProgress.experience === 15, 'La experiencia de Mente debe ser 15');

    // Prueba 6: Límite inferior de nivel
    console.log('Prueba 6: Límite inferior de nivel');
    decreaseExperience('Mente', 100);
    menteProgress = getCategoryProgress('Mente');
    console.assert(menteProgress.level === 0, 'El nivel de Mente debe volver a 0');
    console.assert(menteProgress.experience === 0, 'La experiencia de Mente no debe ser negativa');

    // Prueba 7: Múltiples niveles de aumento
    console.log('Prueba 7: Múltiples niveles de aumento');
    addExperience('Cuerpo', 500);
    let cuerpoProgress = getCategoryProgress('Cuerpo');
    console.assert(cuerpoProgress.level > 1, 'El nivel de Cuerpo debe ser mayor que 1');
    console.assert(cuerpoProgress.experience > 0, 'Debe haber experiencia restante en Cuerpo');
    console.log(`Nivel actual de Cuerpo: ${cuerpoProgress.level}`);

    // Prueba 8: Verificar el máximo nivel
    console.log('Prueba 8: Verificar el máximo nivel');
    for (let i = 0; i < 1000; i++) {
        addExperience('Economia', 1000);
    }
    let economiaProgress = getCategoryProgress('Economia');
    console.assert(economiaProgress.level === categories['Economia'].maxLevel, `El nivel de Economia no debe superar el máximo de ${categories['Economia'].maxLevel}`);

    // Prueba 9: Verificar el ratio de crecimiento
    console.log('Prueba 9: Verificar el ratio de crecimiento');
    resetCategories();
    addExperience('Sueno', 100); // Nivel 1
    addExperience('Sueno', 105); // Nivel 2
    let suenoProgress = getCategoryProgress('Sueno');
    console.assert(suenoProgress.level === 2, 'El nivel de Sueno debe ser 2');
    console.assert(suenoProgress.experience === 0, 'La experiencia de Sueno debe ser 0 después de subir al nivel 2');

    // Prueba 10: Verificar cálculo de experiencia para siguiente nivel
    console.log('Prueba 10: Verificar cálculo de experiencia para siguiente nivel');
    resetCategories();
    addExperience('Higiene', 80); // Nivel 1
    let higieneProgress = getCategoryProgress('Higiene');
    console.assert(higieneProgress.nextLevelExperience === 84, 'La experiencia necesaria para el siguiente nivel de Higiene debe ser 84');

    // Prueba 11: Verificar LvG con niveles dispares
    console.log('Prueba 11: Verificar LvG con niveles dispares');
    resetCategories();
    addExperience('Mente', 220);  // Esperamos Nivel 3
    addExperience('Cuerpo', 120); // Esperamos Nivel 1
    addExperience('Alimentacion', 143); // Esperamos Nivel 2

    let menteNivel = getCategoryProgress('Mente').level;
    let cuerpoNivel = getCategoryProgress('Cuerpo').level;
    let alimentacionNivel = getCategoryProgress('Alimentacion').level;

    console.assert(menteNivel === 3, `El nivel de Mente debe ser 3, actual: ${menteNivel}`);
    console.assert(cuerpoNivel === 1, `El nivel de Cuerpo debe ser 1, actual: ${cuerpoNivel}`);
    console.assert(alimentacionNivel === 2, `El nivel de Alimentacion debe ser 2, actual: ${alimentacionNivel}`);

    lvg = calculateGlobalLevel();

    // Prueba 12: Verificar que la experiencia no supere el máximo al alcanzar el nivel máximo
    console.log('Prueba 12: Verificar límite de experiencia en nivel máximo');
    resetCategories();
    for (let i = 0; i < categories['Mente'].maxLevel + 10; i++) {
        addExperience('Mente', 1000000);
    }
    menteProgress = getCategoryProgress('Mente');
    console.assert(menteProgress.level === categories['Mente'].maxLevel, `El nivel de Mente debe ser ${categories['Mente'].maxLevel}`);
    console.assert(menteProgress.experience < menteProgress.nextLevelExperience, 'La experiencia no debe superar la necesaria para el siguiente nivel');

    console.log('Pruebas completadas.');
}