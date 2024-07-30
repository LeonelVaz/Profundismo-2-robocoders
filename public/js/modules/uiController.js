import { features, currentFeature, updateFeature } from './characterCreation.js';
import { gameState } from '../main.js';
import { getCategoryProgress } from './categoriesAndLevels.js';


export function showSection(sectionId) {
    console.log(`Intentando mostrar sección: ${sectionId}`);
    const section = document.getElementById(sectionId);
    if (section) {
        console.log(`Sección ${sectionId} encontrada`);
        ['main-menu', 'character-creation', 'game-screen'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        section.style.display = 'flex';
        console.log(`Sección ${sectionId} debería estar visible ahora`);
    } else {
        console.error(`Sección ${sectionId} no encontrada. Asegúrese de que el componente esté cargado.`);
        console.log('Contenido del body:', document.body.innerHTML);
    }
}

export function resetGameState() {
    Object.assign(gameState, {
        characterCreated: false,
        inGame: false
    });
    Object.assign(currentFeature, {
        skin: 0,
        pelo: 0,
        remera: 0,
        pantalon: 0,
        zapatos: 0,
        remeraDesign: 0
    });

    // Solo actualiza las características si el componente de creación de personajes está cargado
    if (document.getElementById('character-creation')) {
        Object.keys(features).forEach(updateFeature);
    }
}

export function updateUI(gameState) {
    const globalLevelDisplay = document.getElementById('global-level');
    if (globalLevelDisplay) {
        globalLevelDisplay.textContent = `Lv ${Math.floor(gameState.globalLevel)}`;
    }

    const globalProgressBar = document.getElementById('global-progress');
    if (globalProgressBar) {
        const fractionalPart = gameState.globalLevel % 1;
        globalProgressBar.style.width = `${fractionalPart * 100}%`;
    }

    Object.keys(gameState.categories).forEach(categoryName => {
        const categoryProgress = getCategoryProgress(categoryName);
        const categoryElement = document.getElementById(`category-${categoryName.toLowerCase()}`);
        if (categoryElement) {
            const progressBar = categoryElement.querySelector('.progress');
            if (progressBar) {
                progressBar.style.width = `${categoryProgress.progress * 100}%`;
            }
            categoryElement.title = `${categoryName}: Nivel ${categoryProgress.level} (${Math.floor(categoryProgress.progress * 100)}%)`;
        }
    });
}

// Función para manejar los cambios de pestaña
export function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            showTab(tabId);
        });
    });
}

function showTab(tabId) {
    const tabContents = document.querySelectorAll('.panel-content');
    tabContents.forEach(content => {
        content.classList.add('hidden');
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }

    const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Inicializar la interfaz
export function initializeUI() {
    initializeTabs();
    updateUI(gameState);
}