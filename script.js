
// first Practicing how to target elements in the dom with different methods : 
// 1- getElementById
// 2- getElementByClassName
// 3- getElementByTagName
// 4- getElementById 

// it is a good user experience to delete the data after the user entered after submiting  for this i have used : form.reset();


"use strict";


let firstNumber, 
    secondNumber ,
    result = document.getElementById("result"),
    form = document.getElementsByTagName("form")[0],
    buttons = document.querySelectorAll("form button"),
    inputs = document.querySelectorAll("input"),
    firstNumberErrorMsg = document.getElementById("firstNumberErrorMsg"),
    secondNumberErrorMsg = document.getElementById("secondNumberErrorMsg");


const displayingError = (element) => {
    element.classList.add("is-invalid");
    element.scrollIntoView(); // to scroll to the unvalid input ;
    // disabling  buttons :
    if (buttons[0].disabled === false) {
        buttons.forEach((btn) => {
            btn.disabled = true;
        })
    }
}

const getNumbers = () => {
    firstNumber = parseInt(inputs[0].value);
    secondNumber = parseInt(inputs[1].value);
    let isValid = true;

    // validating  Numbers ;
    if (isNaN(firstNumber)) {
        displayingError(inputs[0])
        firstNumberErrorMsg.innerHTML = "first number is invalid"
        isValid = false;
    }
    if (isNaN(secondNumber)) {
        displayingError(inputs[1])
        secondNumberErrorMsg.innerHTML = "second number is invalid"
        isValid = false;
    }
     if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        secondNumberErrorMsg.innerHTML = ""
        inputs.forEach(element => {
            element.classList.remove("is-invalid")
            element.classList.add("is-valid");
        })
    }
    return isValid;
}


const Add = () => {
    if (getNumbers()) {
        result.innerHTML = (firstNumber + secondNumber);
        // form.reset();  to set all the form inputs to their default values ;
    }
}
const Minus = () => {
    if (getNumbers()) {
        result.innerHTML = (firstNumber - secondNumber);
        // form.reset();
    }

}
const Multiply = () => {
    if (getNumbers()) {
        result.innerHTML = (firstNumber * secondNumber);
        // form.reset();
    }

}
const Divid = () => {
    if (getNumbers()) {
        if (secondNumber === 0) {
            secondNumberErrorMsg.innerHTML = "can't perform division because the second number equals 0";
            inputs[1].classList.add("is-invalid");
        }
        else {
            result.innerHTML = (firstNumber / secondNumber).toFixed(2)
        }
        // form.reset();
    }

}


// Ending Error State ;

inputs.forEach((element) => {
    element.addEventListener("keydown", () => {
        element.classList.remove("is-invalid");
        if (buttons[0].disabled === true) { // to avoid unneeded repetation;
            firstNumberErrorMsg.innerHTML = ""
            secondNumberErrorMsg.innerHTML = ""
            buttons.forEach((btn) => {
                btn.disabled = false;
            })
        }
    })
})




// Name : Mohamed Ahmed Ali haroon ;
// grade : 3'd year computer science and artifical intelligance ;