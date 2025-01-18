
const colors = document.querySelectorAll(".color");
const outputBox = document.getElementById("outputBox");

colors.forEach( (color) => {
    color.addEventListener('click',() => {
        const selectColor = color.getAttribute('data-color');
        outputBox.style.backgroundColor = selectColor;
        outputBox.textContent = `Selected: ${selectColor}`;
    } )
})