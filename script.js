const gridContainer = document.getElementById('gridContainer');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const eraseBtn = document.getElementById('eraseBtn');
const clearBtn = document.getElementById('clearBtn');

let rows = 16;
let cols = 16;
let colorPickerValue = '#000000';

colorPicker.oninput = () => color();

function setMenuMode(color) {
    let menuMode = color;
    console.log(menuMode);
    if (menuMode === 'color') {
        colorBtn.classList.add('active-btn');
        eraseBtn.classList.remove('active-btn');
    } else if (menuMode === 'erase') {
        colorBtn.classList.remove('active-btn');
        eraseBtn.classList.add('active-btn');
    } else {
        colorBtn.classList.add('active-btn');
    }
}

colorBtn.onclick = () => setMenuMode('color');
eraseBtn.onclick = () => setMenuMode('erase');

// created a style property named --grid-rows (css)
gridContainer.style.setProperty('--grid-rows', rows);
gridContainer.style.setProperty('--grid-cols', cols);
for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
    gridContainer.addEventListener('mouseover', changeColor);
};

function changeColor(e) {
    console.log(e)
    if (e.type == "mouseover") {
        e.target.style.backgroundColor = colorPickerValue;
    }
}

function color() {
    console.log("Color:", colorPicker.value);
    colorPickerValue = colorPicker.value;
}

window.onload = () => {
    setMenuMode('color');
}
