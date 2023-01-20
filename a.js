const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const btn = document.getElementById("btnl");
const result = document.getElementById("result");
const form = document.getElementById("form")

btn.addEventListener("click", btnOnclick);

function btnOnclick({event}) {
    const sumainpts = Number(input1.value) + Number(input2.value);
    result.innerText = sumainpts;
}