let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

let tem = document.querySelector(".tem");

let tem1 = document.getElementsByClassName("tem1")[0];
var c = 1;

function myFunc(temp_C,temp_f,temp_k){
    var celc = temp_C;
    if((temp_C > 30 && temp_C < 45) && (temp_f >86 && temp_f<113) && (temp_k > 303.15 && temp_k<318.5)){
        document.body.style.backgroundColor = "#FF7377";
    }

    if((temp_C > 10 && temp_C < 30) && (temp_f>50 && temp_f <86) && (temp_k>283.15 && temp_k < 303.15)){
      document.body.style.backgroundColor = "#ade6e6";

    }
    if((temp_C>=0 && temp_C <=10) && (temp_f>=32 && temp_f<=50) && (temp_k>=273.15 && temp_k<=283.5)){
      document.body.style.backgroundColor = "";
    }
    if(temp_C>50){
        document.body.style.backgroundColor = "red";
      }
      
        if(temp_C>0 && temp_C<=50){
         let temp = (temp_C * 90)/100;
      for(i=0.02;i<=temp_C-temp;i+=0.01){
           tem1.style.height = -i+4.5+"rem";
        }
    }
    else if(temp_C>50){
        tem1.style.height = "0rem";
        var eagle=document.getElementsByClassName("eagle")[0];
    }
    else{
        tem1.style.height = "4.8rem";
    }
     
}
function roundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Fahrenheit and Kelvin */
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    myFunc(cTemp,fTemp,kTemp);
})


/* Fahrenheit to Celcius and Kelvin */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    myFunc(cTemp,fTemp,kTemp);
})

/* Kelvin to Celcius and Fahrenheit */
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9/5) + 32;

    celsiusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);

    myFunc(cTemp,fTemp,kTemp);

    
})

btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
    document.body.style.backgroundColor ="";
    tem1.style.height = "4.8rem";
})

