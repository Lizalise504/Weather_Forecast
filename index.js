// alert function for the cities

function city(element){
    alert("Loading weather report...");
}

// removing the cookie message and adjusting the height
var moved = document.querySelector(".bottom");

function disappear(element){
    moved.remove();
}

// switching between celcius and fahrenheit
var num = document.querySelectorAll(".num1");
var firstDeg = [];
for(var i = 0; i < num.length; i++){
    firstDeg.push(num[i].innerText);
}

var num2 = document.querySelectorAll(".num2");
var secondDeg = [];
for(var i = 0; i < num2.length; i++){
    secondDeg.push(num2[i].innerText);
}

var temperature = document.querySelector("#temperature");



console.log(num);
function change(){
    if(temperature.value == "Fahrenheit"){
        alert("fahrenheit is selected");
        for(var i = 0; i < firstDeg.length; i++){
            num[i].innerText =  Math.floor((parseInt(firstDeg[i]) * 9/5) + 32) + "°";
        }
        for(var i = 0; i < secondDeg.length; i++){
            num2[i].innerText = Math.floor((parseInt(secondDeg[i]) * 9/5) + 32) + "°";
        }
    }else{
        alert("celcius is selected");
        for(var i = 0; i < firstDeg.length; i++){
            num[i].innerText = firstDeg[i];
        }
        for(var i = 0; i < secondDeg.length; i++){
            num2[i].innerText = secondDeg[i];
        }
        
    }
}




