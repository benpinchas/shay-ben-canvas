console.log('heloo service');


var gPrefs = {
    color: 'black',
    shape: 'rect'
}


function getPrefs() {
    return gPrefs;
}


function changeColor(color) {
    gPrefs.color = color;
    savePrefs()
}

function setShape(shape) {
    console.log('set shape');
    gPrefs.shape = shape;
    savePrefs()
}


function savePrefs() {

}






