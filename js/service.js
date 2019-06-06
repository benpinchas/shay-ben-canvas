console.log('heloo service');

const PREFS_KEY = 'canvas-prefs'

var gPrefs;

function createPrefs() {
    gPrefs = loadPrefs();
    if (!gPrefs) {
        console.log('first time');
        gPrefs = {
            color: 'black',
            shape: 'rect'
        }
        savePrefs()
    }
}


function getPrefs() {
    return gPrefs;
}


function setColor(color) {
    gPrefs.color = color;
    savePrefs()
}

function setShape(shape) {
    console.log('set shape');
    gPrefs.shape = shape;
    savePrefs()
}


function savePrefs() {
    saveToStorage(PREFS_KEY, gPrefs)
}

function loadPrefs() {
    return loadFromStorage(PREFS_KEY)
}


function saveToStorage(key, value) {
    console.log('saveToStorage');
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}
function loadFromStorage(key) {
    console.log('loadFromStorage');
    return JSON.parse(localStorage.getItem(key))
}


