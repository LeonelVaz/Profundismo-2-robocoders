// Definición de las categorías de vida
export const categories = {
    Mente: { level: 0, experience: 0, maxLevel: 100, difficultyRatio: 1.05, baseExperience: 70 },
    Cuerpo: { level: 0, experience: 0, maxLevel: 100, difficultyRatio: 1.05, baseExperience: 120 },
    Alimentacion: { level: 0, experience: 0, maxLevel: 100, difficultyRatio: 1.05, baseExperience: 70 },
    Higiene: { level: 0, experience: 0, maxLevel: 100, difficultyRatio: 1.05, baseExperience: 80 },
    Economia: { level: 0, experience: 0, maxLevel: 100, difficultyRatio: 1.05, baseExperience: 60 },
    Sueno: { level: 0, experience: 0, maxLevel: 100, difficultyRatio: 1.05, baseExperience: 100 }
};

// Función para calcular el nivel global (LvG)
export function calculateGlobalLevel() {
    return Object.values(categories).reduce((sum, category) => sum + category.level, 0);
}

// Función para calcular la experiencia necesaria para el siguiente nivel
function calculateNextLevelExperience(category) {
    return Math.floor(category.baseExperience * Math.pow(category.difficultyRatio, category.level));
}

// Función para añadir experiencia a una categoría
export function addExperience(categoryName, amount) {
    const category = categories[categoryName];
    if (!category) return;

    category.experience += amount;
    while (category.experience >= calculateNextLevelExperience(category) && category.level < category.maxLevel) {
        category.experience -= calculateNextLevelExperience(category);
        category.level++;
    }

    if (category.level === category.maxLevel) {
        category.experience = Math.min(category.experience, calculateNextLevelExperience(category) - 1);
    }
}

// Función para disminuir la experiencia de una categoría
export function decreaseExperience(categoryName, amount) {
    const category = categories[categoryName];
    if (!category) return;

    category.experience -= amount;
    while (category.experience < 0 && category.level > 0) {
        category.level--;
        category.experience += calculateNextLevelExperience(category);
    }

    if (category.level === 0 && category.experience < 0) {
        category.experience = 0;
    }
}

// Función para obtener el progreso de una categoría
export function getCategoryProgress(categoryName) {
    const category = categories[categoryName];
    if (!category) {
        console.warn(`Categoría "${categoryName}" no encontrada.`);
        return null;
    }

    const nextLevelXP = calculateNextLevelExperience(category);
    const progress = category.experience / nextLevelXP;
    return {
        level: category.level,
        progress: progress,
        experience: category.experience,
        nextLevelExperience: nextLevelXP
    };
}

// Función para reiniciar todas las categorías
export function resetCategories() {
    Object.values(categories).forEach(category => {
        category.level = 0;
        category.experience = 0;
    });
}