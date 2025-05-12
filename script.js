//Initialisation
const gridslider = document.querySelector("#gridslider");
const gridnumber = document.querySelector("#gridnumber");
const container = document.querySelector(".container");
const normal = document.querySelector("#normal");
const clear = document.querySelector("button");
gridnumber.textContent = gridslider.value;

let gridNumber = gridslider.value;

//Functions
function creategrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let x = 0; x < size; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", (event) => {
                if (normal.checked) {
                    event.target.style.backgroundColor = "black";
                }
                else { //rgb
                    let rgb1 = Math.floor(Math.random() * 255).toString(16).padStart(2,'0');
                    let rgb2 = Math.floor(Math.random() * 255).toString(16).padStart(2,'0');
                    let rgb3 = Math.floor(Math.random() * 255).toString(16).padStart(2,'0');
                    event.target.style.backgroundColor = `#${rgb1}${rgb2}${rgb3}`;
                    
                }
            });
            row.appendChild(cell);
        }           
    }
}

//Listeners
gridslider.addEventListener("input", (event) => {
    gridnumber.textContent = gridslider.value;
    gridNumber = gridslider.value;
    creategrid(gridNumber);
});

document.addEventListener("DOMContentLoaded", () => {
    creategrid(gridNumber);
});

clear.addEventListener("click", () => {
    creategrid(gridNumber);
});