import { updateGameCharacter } from './gameLogic.js';
import { gameState } from '../main.js';
import { startGame } from './gameLogic.js';

const features = {
    skin: ['#e0d0b0', '#a67c52', '#4a3728'],
    pelo: ['#4a3a2a', '#deb887', '#8b4513', '#2a1a0a'],
    remera: ['#6a5a4a', '#3a7a5a', '#5a3a6a', '#7a5a3a'],
    pantalon: ['#4a3a2a', '#1e3a5f', '#3d1c02', '#303030'],
    zapatos: ['#1a0a00', '#8b4513', '#deb887', '#303030'],
    remeraDesign: ['⚡', '♥', '★', '☀', '☺']
};

let currentFeature = {
    skin: 0,
    pelo: 0,
    remera: 0,
    pantalon: 0,
    zapatos: 0,
    remeraDesign: 0
};

function changeFeature(feature, direction) {
    const featureArray = features[feature];
    currentFeature[feature] = (currentFeature[feature] + direction + featureArray.length) % featureArray.length;
    updateFeature(feature);
}

function updateFeature(feature) {
    const value = features[feature][currentFeature[feature]];
    const button = document.getElementById(`${feature}Button`);
    if (button) {
        let featureName;
        switch (feature) {
            case 'skin': featureName = 'Piel'; break;
            case 'pelo': featureName = 'Pelo'; break;
            case 'remera': featureName = 'Remera'; break;
            case 'pantalon': featureName = 'Pantalón'; break;
            case 'zapatos': featureName = 'Zapatos'; break;
            case 'remeraDesign': featureName = 'Diseño'; break;
        }
        button.textContent = `${featureName} ${currentFeature[feature] + 1}`;
    }

    switch (feature) {
        case 'skin':
            document.querySelector('.head').style.backgroundColor = value;
            document.querySelectorAll('.hand').forEach(hand => hand.style.backgroundColor = value);
            break;
        case 'pelo':
            document.querySelector('.pelo').style.backgroundColor = value;
            break;
        case 'remera':
            document.querySelector('.remera').style.backgroundColor = value;
            document.querySelectorAll('.arm').forEach(arm => arm.style.backgroundColor = value);
            break;
        case 'pantalon':
            document.querySelectorAll('.leg').forEach(leg => leg.style.backgroundColor = value);
            break;
        case 'zapatos':
            document.querySelectorAll('.shoe').forEach(shoe => shoe.style.backgroundColor = value);
            break;
        case 'remeraDesign':
            document.querySelector('.remera-design').textContent = value;
            break;
    }
}

function initializeCharacterCreation() {
    document.querySelectorAll('.arrow').forEach(arrow => {
        arrow.addEventListener('click', () => {
            const feature = arrow.dataset.feature;
            const direction = parseInt(arrow.dataset.direction);
            changeFeature(feature, direction);
        });
    });

    const createButton = document.getElementById('create-character');
    if (createButton) {
        createButton.textContent = gameState.characterCreated ? 'Guardar Cambios' : 'Crear Personaje';
        createButton.addEventListener('click', () => {
            gameState.characterCreated = true;
            gameState.savedCharacterData = getCharacterData();
            startGame();
        });
    }

    // Aplicar las características guardadas si existen
    if (gameState.savedCharacterData) {
        Object.assign(currentFeature, gameState.savedCharacterData);
    }
    Object.keys(currentFeature).forEach(updateFeature);
}

function saveCurrentCharacter() {
    const characterElement = document.querySelector('.container .person');
    if (characterElement) {
        gameState.savedCharacterHTML = characterElement.innerHTML;
    }
}

function getCharacterData() {
    return {
        skin: currentFeature.skin,
        pelo: currentFeature.pelo,
        remera: currentFeature.remera,
        pantalon: currentFeature.pantalon,
        zapatos: currentFeature.zapatos,
        remeraDesign: currentFeature.remeraDesign
    };
}

export { features, currentFeature, changeFeature, updateFeature, initializeCharacterCreation, saveCurrentCharacter, getCharacterData };
