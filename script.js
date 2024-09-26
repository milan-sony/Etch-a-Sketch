const gridContainer = document.getElementById('gridContainer');
const colorPicked = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const eraseBtn = document.getElementById('eraseBtn');
const clearBtn = document.getElementById('clearBtn');

let defaultColor = '#000000';
let defaultMode = 'color';

let rows = 16;
let cols = 16;

let currentColor = defaultColor;
let currentMode = defaultMode

colorBtn.onclick = () => setMenuMode('color');
eraseBtn.onclick = () => setMenuMode('erase');
clearBtn.onclick = () => setMenuMode('clear');

colorPicker.oninput = () => pickColor();

function setMenuMode(mode) {
    currentMode = mode
    console.log("Mode: ", currentMode);
    if (currentMode === 'color') {
        colorBtn.classList.add('active-btn');
        eraseBtn.classList.remove('active-btn');
        currentColor = colorPicked.value
    } else if (currentMode === 'erase') {
        colorBtn.classList.remove('active-btn');
        eraseBtn.classList.add('active-btn');
        currentColor = 'transparent';
    } else if (currentMode === 'clear') {
        clearGrid();
        // gridContainer.style.backgroundColor = 'transparent'
    }
    else {
        colorBtn.classList.add('active-btn');
    }
};

// created a style property named --grid-rows (css)
gridContainer.style.setProperty('--grid-rows', rows);
gridContainer.style.setProperty('--grid-cols', cols);
for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = 'grid-item';
    gridContainer.addEventListener('mouseover', paintColor);
};

function clearGrid(){
    gridContainer.style.backgroundColor = 'green'
}

function paintColor(e) {

    if (e.type == "mouseover") {
        e.target.style.backgroundColor = currentColor;
    }
}

function pickColor() {
    console.log("Color picked:", colorPicked.value);
    currentColor = colorPicker.value;
}

window.onload = () => {
    setMenuMode('color');
    currentColor = defaultColor
}
