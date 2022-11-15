
let value = document.querySelector("#value");


const decrease = document.querySelector(".decrease");

decrease.addEventListener('click', function (){
    value.innerHTML--;
})

const reset = document.querySelector(".reset");

reset.addEventListener('click', function(){
    count = 0;
    value.innerHTML = 0;
})

const increase = document.querySelector(".increase");

increase.addEventListener('click', function(){
    value.innerHTML++;
})