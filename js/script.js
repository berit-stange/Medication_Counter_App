// DATE
const date = new Date();
// console.log(date.toString());
document.getElementById("date").innerHTML = date;

// BUTTONS
const btn = document.querySelector('.btn-morning');
const changeColor = document.querySelector(".changeColor");
changeColor.addEventListener('click', function () {
    btn.classList.toggle("change");
});

const btn2 = document.querySelector('.btn-noon');
const changeColor2 = document.querySelector(".changeColor2");
changeColor2.addEventListener('click', function () {
    btn2.classList.toggle("change");
});

const btn3 = document.querySelector('.btn-night');
const changeColor3 = document.querySelector(".changeColor3");
changeColor3.addEventListener('click', function () {
    btn3.classList.toggle("change");
});


