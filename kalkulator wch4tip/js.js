function Czyszczenie() {
    document.getElementById("result").value = "";
}
 
 
function wyswietl(value) {
    document.getElementById("result").value += value;
}
 
 
function oblicz() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
 
function dodajRamke(){
document.getElementById("calosc").style.backgroundColor="yellow";
}

function getTime() 
{
    var data = new Date();
    var god = data.getHours();
    var min = data.getMinutes();
    var sek = data.getSeconds();

    return ""+god+
             ((min<10)?":0":":")+min+
             ((sek<10)?":0":":")+sek;
}

document.getElementById('zegar').innerHTML = getTime();

setInterval(function() {

    document.getElementById('zegar').innerHTML = getTime();
    
}, 1000);