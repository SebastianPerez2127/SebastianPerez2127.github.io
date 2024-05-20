window.onload = function() {
    alert('Welcome to my web page!');
   };
   
   function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
   }
 
   function toggleText() {
    var paragraph = document.getElementById('toggleParagraph');
    if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block';
    } else {
    paragraph.style.display = 'none';
    }
   }

   function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("result").innerHTML = "Error: Cannot divide by zero";
    } else {
        let result = num1 / num2;
        document.getElementById("result").innerHTML = "Result: " + result;
    }
}

$(document).ready(function() {
    $("#tabs").tabs();
   });
   