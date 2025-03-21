//Initialisation
const gridslider = document.querySelector("#gridslider");
const gridnumber = document.querySelector("#gridnumber");
gridnumber.textContent = gridslider.value;

//Functions

//Listeners
gridslider.addEventListener("input", (event) => {
    gridnumber.textContent = gridslider.value;
});


