const gridContainer = document.getElementById('gridContainer');
const colorPicked = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const eraseBtn = document.getElementById('eraseBtn');
const clearBtn = document.getElementById('clearBtn');
const slider = document.getElementById('slider');
const size = document.getElementById('size');

let defaultColor = '#000000';
let defaultMode = 'color';
let defaultSize = slider.value;

let currentColor = defaultColor;
let currentMode = defaultMode
let currentSize = defaultSize;

colorBtn.onclick = () => setMenuMode('color');
eraseBtn.onclick = () => setMenuMode('erase');
clearBtn.onclick = () => setMenuMode('clear');

colorPicker.oninput = () => pickColor();
slider.oninput = () => sliderMove();

function sliderMove() {
    console.log(slider.value)
    size.innerText = slider.value + " X " + slider.value;
    currentSize = parseInt(slider.value);
    createGrid(currentSize)
}

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
    }
    else {
        colorBtn.classList.add('active-btn');
    }
};

function createGrid(size) {
    gridContainer.innerHTML = "";
    // created a style property named --grid-rows (css)
    gridContainer.style.setProperty('--grid-rows', size);
    gridContainer.style.setProperty('--grid-cols', size);
    for (let c = 0; c < (size * size); c++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = 'grid-item';
        gridContainer.addEventListener('mouseover', paintColor);
    };

}


function clearGrid() {
    createGrid(currentSize)
    setMenuMode('color')
}

function paintColor(e) {

    if (e.type == "mouseover") {
        e.target.style.backgroundColor = currentColor;
    }
}

function pickColor() {
    console.log("Color picked:", colorPicked.value);
    currentColor = colorPicker.value;
    setMenuMode('color')
}

window.onload = () => {
    setMenuMode('color');
    currentColor = defaultColor
    size.innerText = slider.value + " X " + slider.value;
    createGrid(defaultSize)
}
