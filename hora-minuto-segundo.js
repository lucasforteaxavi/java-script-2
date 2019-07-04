var hora=parseInt(prompt("Dime el numero de horas:"));
var minuto=parseInt(prompt("Dime el numero de minutos"));
var segundo=parseInt(prompt("Dime el numero de segundos"));

segundo++;

if(segundo==60){
    minuto++;
    segundo=0;

    if(minuto==60){
        hora++;
        minuto=0;
    }
    if(hora==24){
        hora=0;
    }
}



// Estetica
if(segundo==0){
    segundo="0 0";
}
if(minuto==0){
    minuto="0 0";
}
if(hora==0){
    hora="0 0";
}
// var total=hora+minuto+segundo;
alert("La hora exacta és: "+hora+ " : " +minuto+ " : " +segundo);