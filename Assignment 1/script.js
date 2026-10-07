
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const operator = document.getElementById("operator").value;

    let result;

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        document.getElementById("result").textContent =
            "Please enter both numbers";
        return;
    }

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
            break;

        default:
            result = "Invalid operator";
    }

    document.getElementById("result").textContent =
        "Result: " + result;
}

function resetCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("result").textContent = "Result:";
}
