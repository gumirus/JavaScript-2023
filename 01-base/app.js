const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

plusBtn.onclick = function () {
    action = "+";
}

minusBtn.onclick = function () {
    action = "-";
}

function printColor(color) {
    if (color < 0) {
        resultElement.style.color = "red";
    } else {
        resultElement.style.color = "green";
    }
    resultElement.textContent = color;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    // if (actionSymbol == "+") {
    //     return num1 + num2;
    // } else if (actionSymbol == "-") {
    //     return num1 - num2;
    // }
    return actionSymbol == "+" ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = function () {
    const color = computeNumbersWithAction(input1, input2, action)
    printColor(color)
}


    // if (action == "+") {
    //     const sum = Number(input1.value) + Number(input2.value);
    //     printColor(sum);
    // } else if (action == "-") {
    //     const sum = Number(input1.value) - Number(input2.value);
    //     printColor(sum);
    // }

    // console.log("Hello Click!");
    
    // console.log(typeof sum);