import { initializeCharacterCreation, getCharacterData } from './modules/characterCreation.js';
import { saveCharacter, loadCharacter, saveAsNewFile } from './modules/saveLoad.js';
import { startGame, updateGameCharacter } from './modules/gameLogic.js';
import { resetGameState, updateUI, initializeUI } from './modules/uiController.js';
import { showSection } from './modules/uiController.js';
import { initParticles } from './utils/initParticles.js';
import { categories, calculateGlobalLevel, addExperience, resetCategories } from './modules/categoriesAndLevels.js';
import { runCategoriesAndLevelsTests } from './tests/categoriesAndLevelsTests.js';

console.log('Módulos importados correctamente');

let gameState = {
    characterCreated: false,
    inGame: false,
    categories: categories,
    globalLevel: 0
};

let loadedFileName = null;
let loadedFileHandle = null;

async function loadComponent(name) {
    console.log(`Cargando componente: ${name}`);
    const response = await fetch(`interface/${name}/${name}.html`);
    const html = await response.text();
    const appElement = document.getElementById('app');
    if (appElement) {
        appElement.innerHTML = '';

        if (name === 'main-menu') {
            const particlesContainer = document.createElement('div');
            particlesContainer.id = 'particles-js';
            appElement.appendChild(particlesContainer);
        }

        const contentContainer = document.createElement('div');
        contentContainer.id = 'content-container';
        contentContainer.innerHTML = html;
        appElement.appendChild(contentContainer);

        console.log(`Componente ${name} insertado en el DOM`);

        if (name === 'main-menu') {
            initParticles();
        }
    } else {
        console.error('Elemento "app" no encontrado en el DOM');
    }

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = `interface/${name}/${name}.css`;
    document.head.appendChild(style);

    console.log(`Componente ${name} cargado completamente`);
}

function updateGameState() {
    gameState.globalLevel = calculateGlobalLevel();
    updateUI(gameState);
}

document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOMContentLoaded event fired');
    await loadComponent('main-menu');

    const testSelect = document.getElementById('test-select');
    const runTestButton = document.getElementById('run-test-button');

    if (testSelect && runTestButton) {
        runTestButton.addEventListener('click', () => {
            const selectedTest = testSelect.value;
            if (selectedTest) {
                console.log(`Ejecutando prueba: ${selectedTest}`);
                try {
                    switch (selectedTest) {
                        case 'categoriesAndLevels':
                            runCategoriesAndLevelsTests();
                            break;
                        // Aquí puedes añadir más casos para futuras pruebas
                        default:
                            console.log('Prueba no reconocida');
                    }
                } catch (error) {
                    console.error('Error al ejecutar la prueba:', error);
                }
            } else {
                console.log('Por favor, selecciona una prueba');
            }
        });
        console.log('Event listener añadido al botón de pruebas');
    } else {
        console.error('Elementos de prueba no encontrados en el DOM');
    }

    document.body.addEventListener('click', async (event) => {
        if (event.target.id === 'start-button') {
            const particlesContainer = document.getElementById('particles-js');
            if (particlesContainer) {
                particlesContainer.remove();
            }
            console.log('Botón Comenzar clickeado');
            resetGameState();
            await loadComponent('character-creation');
            initializeCharacterCreation();
            console.log('Debería mostrarse la sección de creación de personajes');
        } else if (event.target.id === 'load-button') {
            await loadCharacter();
        } else if (event.target.id === 'create-character') {
            gameState.characterCreated = true;
            gameState.savedCharacterData = getCharacterData();
            await loadComponent('game-screen');
            updateGameCharacter();
            showSection('game-screen');
            updateGameState();
        } else if (event.target.id === 'customize-character') {
            await loadComponent('character-creation');
            initializeCharacterCreation();
            showSection('character-creation');
        } else if (event.target.id === 'save-game') {
            await saveCharacter(gameState);
        } else if (event.target.id === 'save-as-game') {
            await saveAsNewFile(gameState);
        } else if (event.target.id === 'load-game') {
            const loadedState = await loadCharacter();
            if (loadedState) {
                gameState = loadedState;
                updateGameState();
            }
        } else if (event.target.id === 'add-experience') {
            const category = event.target.dataset.category;
            const amount = parseInt(event.target.dataset.amount);
            addExperience(category, amount);
            updateGameState();
        } else if (event.target.id === 'start-game') {
            await startGame();
            initializeUI();
        }
    });

    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    if (html.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark-mode');
        themeToggle.textContent = html.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    resetGameState();
});

export { gameState, loadedFileName, loadedFileHandle, loadComponent, updateGameState };