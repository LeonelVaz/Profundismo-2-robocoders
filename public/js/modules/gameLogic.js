import { showSection } from './uiController.js';
import { gameState, loadComponent, updateGameState } from '../main.js';
import { features } from './characterCreation.js';
import { addExperience, decreaseExperience } from './categoriesAndLevels.js';

async function startGame() {
    gameState.inGame = true;
    await loadComponent('game-screen');
    updateGameCharacter();
    showSection('game-screen');
    updateGameState();
}

function updateGameCharacter() {
    if (gameState.savedCharacterData) {
        const gameScreen = document.querySelector('#game-screen');
        if (gameScreen) {
            const person = gameScreen.querySelector('.person');
            if (person) {
                Object.keys(gameState.savedCharacterData).forEach(feature => {
                    const value = features[feature][gameState.savedCharacterData[feature]];
                    switch (feature) {
                        case 'skin':
                            person.querySelector('.head').style.backgroundColor = value;
                            person.querySelectorAll('.hand').forEach(hand => hand.style.backgroundColor = value);
                            break;
                        case 'pelo':
                            person.querySelector('.pelo').style.backgroundColor = value;
                            break;
                        case 'remera':
                            person.querySelector('.remera').style.backgroundColor = value;
                            person.querySelectorAll('.arm').forEach(arm => arm.style.backgroundColor = value);
                            break;
                        case 'pantalon':
                            person.querySelectorAll('.leg').forEach(leg => leg.style.backgroundColor = value);
                            break;
                        case 'zapatos':
                            person.querySelectorAll('.shoe').forEach(shoe => shoe.style.backgroundColor = value);
                            break;
                        case 'remeraDesign':
                            person.querySelector('.remera-design').textContent = value;
                            break;
                    }
                });
                console.log('Personaje actualizado correctamente');
            } else {
                console.log('No se encontró el elemento .person en la pantalla de juego');
            }
        } else {
            console.log('No se encontró el elemento #game-screen');
        }
    } else {
        console.log('No hay datos guardados del personaje');
    }
}

// Función para manejar las actividades diarias
function handleDailyActivity(activity) {
    // Ejemplo de cómo manejar una actividad diaria
    switch (activity) {
        case 'exercise':
            addExperience('Cuerpo', 50);
            break;
        case 'study':
            addExperience('Mente', 50);
            break;
        case 'eat-healthy':
            addExperience('Alimentación', 50);
            break;
        // Añadir más casos según sea necesario
    }
    updateGameState();
}

export { startGame, updateGameCharacter, handleDailyActivity };