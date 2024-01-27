let operator;
let num;
let screen = document.querySelector(".screen");

document.querySelector(".buttons").addEventListener("click", function (event) {
    checkButton(event.target.innerHTML);
});

function checkButton(value) {
    if (!isNaN(parseInt(value))) {
        displayValue(value);
    } else {
        editNumber(value);
        if (value != "=" && value != "←") {
            num = screen.innerHTML;
            screen.innerHTML = "0";   
        }  
    }
}

function displayValue(value) {
    if (screen.innerHTML == 0) {
        screen.innerHTML = value;
    } else {
        screen.innerHTML += value;
    }
}

function editNumber(value) {
    switch (value) {
        case 'C':
            screen.innerHTML = 0;
            operator = null
            break;
        case '←':
            screen.innerHTML = screen.innerHTML.slice(0, -1);
            if (screen.innerHTML == "") {
                screen.innerHTML = 0;
            }
            break;
        case '=':
            doMath();
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            operator = value;
            break;
    }
}

function doMath() {
    switch (operator) {
        case '+':
            screen.innerHTML = parseInt(num) + parseInt(screen.innerHTML);
            break;
        case '−':
            screen.innerHTML = parseInt(num) - parseInt(screen.innerHTML);
            break;
        case '×':
            screen.innerHTML = parseInt(num) * parseInt(screen.innerHTML);
            break;
        case '÷':
            screen.innerHTML = parseInt(num) / parseInt(screen.innerHTML);
            break;
    }
}
