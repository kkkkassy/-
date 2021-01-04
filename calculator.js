window.onload=function(){
var num = document.getElementsByClassName("num");
var show=document.getElementById("view");
var equal=document.getElementById("equal");
var num1;
var num2;
var press = 0; //标识操作符号是否按下，按下时读取num1，再清屏，准备读num2
var type = 0;

for (i = 0; i < num.length; i++) {
    num[i].onclick = function() {
        if (press == 0) {
            show.innerHTML = show.innerHTML + this.value;
        } else {
            show.innerHTML = this.value;
            press = 0;
        }

    }
}

document.getElementById("add").onclick = function() {
    type = 0;
    press = 1;
    num1 = show.innerHTML;
}
document.getElementById("subtract").onclick = function() {
    type = 1;
    press = 1;
    num1 = show.innerHTML;
}
document.getElementById("multiply").onclick = function() {
    type = 2;
    press = 1;
    num1 = show.innerHTML;
}
document.getElementById("div").onclick = function() {
    type = 3;
    press = 1;
    num1 = show.innerHTML;
}
document.getElementById("reset").onclick = function() {
    press = 0;
    show.innerHTML = null;
}
document.getElementById("percent").onclick = function() {
    num1 = parseFloat(show.innerHTML);
    show.innerHTML = num1 * 100 + '%';
}

equal.onclick = function() {
    num2 = show.innerHTML;
    show.innerHTML = calculate();
}

function calculate() {
    var result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (type) {
        case 0:
            result = num1 + num2;
            break;
        case 1:
            result = num1 - num2;
            break;
        case 2:
            result = num1 * num2;
            break;
        case 3:
            if (num2 == 0) {
                return "error";
            }
            result = num1 / num2;
            break;
    }
    return result;
}
}






