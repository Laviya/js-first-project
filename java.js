// ***PROMPT***
let userName = prompt("Lütfen isminizi giriniz:")

let inf = document.querySelector("#info")
inf.innerHTML = `${userName ? userName : "Ziyaretçi" } `

// ***CLOCK and DAY***
let clock = document.querySelector("#clock")


let zaman = new Date();
let gun = zaman.getUTCDay();
let gunText ;

switch (gun) {
    
    case 0:    
        gunText = "Pazartesi";
        break;
    case 1:    
        gunText = "Salı";
        break;
    case 2:    
        gunText = "Çarşamba";
        break;
    case 3:    
        gunText = "Perşembe";
        break;
    case 4:    
        gunText = "Cuma";
        break;
    case 5:    
        gunText = "Cumartesi";
        break;
    case 6:    
        gunText = "Pazar";
        break;
    default:
        break;
}

setInterval("say()",1000);
function say(){

    clock.innerHTML = 
    ` ${ new Date().toLocaleTimeString('tr-TR', {hour: '2-digit', minute: '2-digit', second: '2-digit'  })+ " " + gunText } `
    }