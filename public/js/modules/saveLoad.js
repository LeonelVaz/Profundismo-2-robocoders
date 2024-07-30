import { currentFeature, updateFeature, getCharacterData, initializeCharacterCreation } from './characterCreation.js';
import { gameState, loadComponent } from '../main.js';
import { startGame } from './gameLogic.js';

let loadedFileName = null;
let loadedFileHandle = null;

function getSaveFileOptions() {
    let suggestedName = loadedFileName || 'mi_personaje';
    if (!suggestedName.toLowerCase().endsWith('.prpg')) {
        suggestedName += '.prpg';
    }
    return {
        suggestedName: suggestedName,
        types: [{
            description: 'Archivo de personaje',
            accept: { 'application/json': ['.prpg'] },
        }],
    };
}

async function saveCharacter() {
    console.log("Iniciando proceso de guardado");
    if ('showSaveFilePicker' in window) {
        console.log("Usando API moderna de guardado");
        try {
            let fileHandle;
            if (loadedFileHandle) {
                console.log("Archivo previamente cargado detectado");
                const willOverwrite = await showSaveConfirmDialog();
                if (willOverwrite) {
                    console.log("Sobrescribiendo archivo existente");
                    fileHandle = loadedFileHandle;
                } else {
                    console.log("Operación de guardado cancelada por el usuario");
                    return;
                }
            } else {
                console.log("No hay archivo cargado, usando 'Guardar como'");
                return saveAsNewFile();
            }

            console.log("Guardando datos en el archivo");
            await saveToFile(fileHandle);

            loadedFileHandle = fileHandle;
            loadedFileName = fileHandle.name;

            if (!loadedFileName.toLowerCase().endsWith('.prpg')) {
                loadedFileName += '.prpg';
            }

            console.log(`Partida guardada exitosamente como "${loadedFileName}"`);
            alert(`Partida guardada exitosamente como "${loadedFileName}".`);
        } catch (err) {
            console.error('Error detallado al guardar:', err);
            if (err.name !== 'AbortError') {
                alert('Hubo un error al guardar la partida. Por favor, intenta de nuevo.');
            }
        }
    } else {
        console.log("Usando método de guardado legacy");
        performLegacySave();
    }
}

async function saveAsNewFile() {
    if ('showSaveFilePicker' in window) {
        try {
            const fileHandle = await window.showSaveFilePicker(getSaveFileOptions());
            await saveToFile(fileHandle);

            loadedFileHandle = fileHandle;
            loadedFileName = fileHandle.name;

            if (!loadedFileName.toLowerCase().endsWith('.prpg')) {
                loadedFileName += '.prpg';
            }

            alert(`Partida guardada exitosamente como "${loadedFileName}".`);
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Error al guardar:', err);
                alert('Hubo un error al guardar la partida. Por favor, intenta de nuevo.');
            }
        }
    } else {
        performLegacySave(true);
    }
}

async function saveToFile(fileHandle) {
    console.log("Iniciando saveToFile");
    const writable = await fileHandle.createWritable();
    console.log("Writable creado");
    const saveData = JSON.stringify({
        character: getCharacterData(),
        gameState: {
            characterCreated: gameState.characterCreated,
            inGame: gameState.inGame
        }
    });
    console.log("Datos a guardar:", saveData);
    await writable.write(saveData);
    console.log("Datos escritos");
    await writable.close();
    console.log("Archivo cerrado");
}

function showSaveConfirmDialog() {
    return new Promise((resolve) => {
        const willOverwrite = confirm(`¿Deseas sobrescribir el archivo existente "${loadedFileName}"?`);
        resolve(willOverwrite);
    });
}

function performLegacySave(forceNewFile = false) {
    gameState.characterCreated = true;
    const saveData = JSON.stringify({ character: getCharacterData(), gameState: gameState });
    const blob = new Blob([saveData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;

    if (forceNewFile || !loadedFileName) {
        let newFileName = prompt("Ingresa un nombre para tu nuevo archivo de guardado:", loadedFileName || "mi_personaje");
        if (newFileName) {
            if (!newFileName.toLowerCase().endsWith('.prpg')) {
                newFileName += '.prpg';
            }
            a.download = newFileName;
        } else {
            URL.revokeObjectURL(url);
            return; // El usuario canceló la operación
        }
    } else {
        if (!loadedFileName.toLowerCase().endsWith('.prpg')) {
            a.download = `${loadedFileName}.prpg`;
        } else {
            a.download = loadedFileName;
        }
    }

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    loadedFileName = a.download;
    alert(`Partida guardada como "${loadedFileName}" en tu carpeta de descargas.`);
}

async function loadCharacter() {
    if ('showOpenFilePicker' in window) {
        try {
            const [fileHandle] = await window.showOpenFilePicker({
                types: [{
                    description: 'Archivo de personaje',
                    accept: { 'application/json': ['.prpg'] },
                }],
            });
            loadedFileHandle = fileHandle;
            loadedFileName = fileHandle.name;

            const file = await fileHandle.getFile();
            const contents = await file.text();

            const data = JSON.parse(contents);

            // Cargar la interfaz de creación de personaje
            await loadComponent('character-creation');
            initializeCharacterCreation();

            if (data.character) {
                gameState.savedCharacterData = data.character;
                Object.assign(currentFeature, data.character);
            }
            if (data.gameState) {
                gameState.characterCreated = data.gameState.characterCreated;
                gameState.inGame = data.gameState.inGame;
            }

            // Actualizar la visualización del personaje
            setTimeout(() => {
                Object.keys(currentFeature).forEach(feature => {
                    updateFeature(feature);
                });
                alert(`Personaje cargado exitosamente desde "${loadedFileName}".`);
                startGame();
            }, 100);

        } catch (err) {
            console.error('Error al cargar el archivo:', err);
            if (err.name !== 'AbortError') {
                alert('Error al cargar el archivo. Asegúrate de que sea un archivo .prpg válido.');
            }
        }
    } else {
        performLegacyLoad();
    }
}

function performLegacyLoad() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.prpg';
    input.onchange = async function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = async function (e) {
            try {
                const data = JSON.parse(e.target.result);

                // Cargar la interfaz de creación de personaje
                await loadComponent('character-creation');
                initializeCharacterCreation();

                if (data.character) {
                    Object.assign(currentFeature, data.character);
                }
                if (data.gameState) {
                    Object.assign(gameState, data.gameState);
                }

                setTimeout(() => {
                    Object.keys(currentFeature).forEach(updateFeature);
                    loadedFileName = file.name.replace(/\.prpg$/, '');
                    alert(`Personaje cargado exitosamente desde "${file.name}".`);
                    startGame();
                }, 100);
            } catch (error) {
                alert('Error al cargar el archivo. Asegúrate de que sea un archivo .prpg válido.');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

export { saveCharacter, loadCharacter, saveAsNewFile };