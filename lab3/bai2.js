var result = document.getElementById("result");

function getResult(num) {
    result.value += num;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    result.value = eval(result.value);
}