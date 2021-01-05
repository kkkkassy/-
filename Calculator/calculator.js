window.onload=function(){
var num = document.getElementsByClassName("num");
var view=document.getElementById("view");
var equal=document.getElementById("equal");
var add=document.getElementById("add");
var subtract=document.getElementById("subtract");
var multiply=document.getElementById("multiply");
var divide=document.getElementById("div");
var res=document.getElementById("reset");
var percent=document.getElementById("percent");
var num1;
var num2;
var press = 0; 
var type = 0;

for (i = 0; i < num.length; i++) {
    num[i].onclick = function() {
        if (press == 0) {
            view.innerHTML = view.innerHTML + this.value;
        } else {
            view.innerHTML = this.value;
            press = 0;
        }

    }
}

add.onclick = function() {
    type = 0;
    press = 1;
    num1 = view.innerHTML;
}
subtract.onclick = function() {
    type = 1;
    press = 1;
    num1 = view.innerHTML;
}
multiply.onclick = function() {
    type = 2;
    press = 1;
    num1 = view.innerHTML;
}
divide.onclick = function() {
    type = 3;
    press = 1;
    num1 = view.innerHTML;
}
res.onclick = function() {
    press = 0;
    view.innerHTML = null;
}
percent.onclick = function() {
    num1 = parseFloat(view.innerHTML);
    view.innerHTML = num1 * 100 + '%';
}

equal.onclick = function() {
    num2 = view.innerHTML;
    view.innerHTML = calculate();
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






