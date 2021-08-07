"use strict";

let body = document.getElementById("body");

// we can change the childrens color , or background-colors by targeting them using css only and this will spare us these lines: 

//    buttons.forEach(element=>{
//      element.classList.remove("btn-light")
//      element.classList.add("btn-dark");
//    })

// but when we do this we will override the bootstrap class ;


const goLight = ()=>{
    body.classList.remove("bg-dark");
    // or we can use the style object and then access the backgroudColor property ;
    body.classList.add("bg-light");
    buttons.forEach(element=>{
        element.classList.remove("btn-light")
        element.classList.add("btn-dark");
    })
}
const goDark = ()=>{
    body.classList.remove("bg-light");
    body.classList.add("bg-dark");
    buttons.forEach(element=>{
        element.classList.remove("btn-dark");
        element.classList.add("btn-light")
    }) 
}

// Name : Mohamed Ahmed Ali haroon ;
// grade : 3'd year computer science and artifical intelligance ;