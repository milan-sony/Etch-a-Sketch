const gridContainer = document.getElementById('gridContainer');

const colorPicker = document.getElementById('colorPicker');

let rows = 16;
let cols = 16;



// created a style property named --grid-rows (css)
gridContainer.style.setProperty('--grid-rows', rows);
gridContainer.style.setProperty('--grid-cols', cols);
for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
};


function color(){
    console.log("Color:", colorPicker.value)
}
