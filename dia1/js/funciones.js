function mensaje(){
    alert("Hola");
}
//window.onload=mensaje();  Para ejecutar la función nada más cargar la página
/*
function suma(a,b){
    return a+b;
}
*/
////MOSTRAR////
function muestratexto(){
    var elem = document.getElementById("parrafo1");
    alert(elem);
    elem.innerHTML = "Texto cambiado <strong>con negrita";
}
////CONCATENAR////
function concatena_nombre(){
    var nombre = document.getElementById("nombre").innerHTML;
    var apellidos = document.getElementById("apellidos").innerHTML;
    document.getElementById("nombrecompleto").innerHTML = nombre + " " + apellidos;
}
////SUMA////
function suma(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var suma = parseInt(num1) + parseInt(num2);
    //alert(suma);
    //document.getElementById("resul").innerHTML = suma;
    document.getElementById("resul1").value = suma;
}
////RESTA////
function resta(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var resta = parseInt(num1) - parseInt(num2);
    //document.getElementById("resul").innerHTML = resta;
    document.getElementById("resul1").value = resta;
}
/////MULTIPLICACION////
function multiplicacion(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var multi = parseInt(num1) * parseInt(num2);
    //document.getElementById("resul").innerHTML = multi;
    document.getElementById("resul1").value = multi;
}
////DIVISION////
function division(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var div = parseFloat(num1) / parseFloat(num2);
    //var div = math.trunc(div);
    var resto = parseFloat(num1) % parseFloat(num2);
    //document.getElementById("resul").innerHTML = div + " y el resto es " + resto;
    document.getElementById("resul1").value = div + " y el resto es " + resto;
}
////POTENCIA////
function potencia(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var pot = Math.pow(num1, num2);
    document.getElementById("resul1").value = pot;
}
////CONDICIONALES////
function pares(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    if (num1 % 2 == 0){
        if(num2 %2 == 0){
            document.getElementById("resul1").value = "Ambos números son pares";
        }
        else{
            document.getElementById("resul1").value = num1 + " es par, "+ num2 + " no es par";
        }
    }
    else{
        if(num2 %2 == 0){
            document.getElementById("resul1").value = num1 + " no es par, " + num2 + " si es par";
        }
        else{
            document.getElementById("resul1").value = "Ambos números no son pares";
        }
    }
}

////ARRAYS////
function muestracoches(){
    var coches = ["Renault", "Peugeot", "Citroen", "Ford"];
    var texto = "<ul>";
    for (i=0;i<coches.length;i++){
        texto = texto + "<li>" + coches[i] + "</li>";
    }
    texto += "</ul>";
    document.getElementById("listado_coches").innerHTML = texto;
}

//calcular el n de personas cuyo peso es > 80
function calcularpesos(){
    var peso = ["80", "100", "73", "67", "93", "89","81"];
    var num = 0;
    for (i=0;i<peso.length;i++){
        if(peso[i] > 80){
            num = parseInt(num) + 1;
        }
    }
    document.getElementById("numtotal").innerHTML = "Número de personas mayor de 80kg: " + num;
}

//////Con un array[15], sacar cuantos suspensos, aprobado[5,6), bien[6,7), notable [7,8'5), sobresaliente[8'5,10), mh[10]
function notas(){
    var clase = [3,8,7,5,4.5,9,8,7,3.5,6,10,7,7.5];
    var suspensos = 0;
    var aptos = 0;
    var bien = 0;
    var nt = 0;
    var sb = 0;
    var mh = 0;
    for (i=0;i<clase.length;i++){
        var nota = clase[i];
        if(nota < 5){
            suspensos++;
        }
        if(nota >= 5 && nota < 6){
                aptos++;
        }
        if(nota >= 6 && nota < 7){
            bien++;
        }
        if(nota >= 7 && nota < 8.5){
            nt++;
        }
        if(nota >= 8.5 && nota < 10){
            sb++;
        }
        if(nota == 10)
            mh++;
    }
    document.getElementById("calificaciones").innerHTML = "SUSPENSOS: " + suspensos + "<br> APTOS: " + aptos + "<br> BIEN: " + bien +
    "<br> NOTABLES: " + nt + "<br> SOBRESALIENTES: " + sb + "<br> MATRICULA: " + mh;
}

/////PERSONA QUE MENOS COBRA
/////PERSONAS QUE MÁS TRABAJAN
/////SUELDO MEDIO
function empresa(){
    var empleados = [
        {nombre:"Marta", salario:1000, horas:50},
        {nombre:"Javier", salario:3500, horas:100},
        {nombre:"Pepe", salario:800, horas:100},
        {nombre:"Sandra", salario:950, horas:95},
        {nombre:"Teresa", salario:2700, horas:90}
    ];
    
    var max_cobra, salario1, salario_medio = 0;
    //MENOS COBRA//
    var salario = empleados[0].salario, salario_nombre = empleados[0].nombre;
    for(i=0;i<empleados.length;i++){
        salario1 = empleados[i].salario;
        if(salario > salario1){
            salario = salario1;
            salario_nombre = empleados[i].nombre;
        }
    }
    document.getElementById("max_cobra").innerHTML = "La persona que menos cobra es " + salario_nombre;
    
    //MÁS TRABAJAN//
    var trabajan;
    var horas_totales = empleados[0].horas;
    var nombre = [], nombre1 , horas1 = 0, horas = 0;
    var contador = 0;
    
    for(i=0;i < empleados.length;i++){
        //nombre1 = empleados[i].nombre;
        horas1 = empleados[i].horas;
        if(horas < horas1){
            //nombre = nombre1;
            horas = horas1;
        }
        if(horas == horas1){
            contador++;
        }
    }
    if(contador > 0){
        contador = 0;
        for(i=0;i<empleados.length;i++){
            nombre1 = empleados[i].nombre;
            horas1 = empleados[i].horas;
            if(horas == horas1){
                nombre[contador] = nombre1;
                contador++;
            }
        }
    }
    document.getElementById("max_trabajan").innerHTML = "Los que más trabajan son: " + nombre[0] + ", " + nombre[1];
    
    //SUELDO MEDIO//
    for(i=0;i<empleados.length;i++){
        salario_medio += empleados[i].salario;
    }
    salario_medio = salario_medio / empleados.length;
    document.getElementById("salario_medio").innerHTML = salario_medio;
}
//////TABLAS CON DATATABLES/////////
var dataSet = [
    ["Javier", 3500, 100],
    ["Fran", 2000, 200],
    ["Ana", 2750, 100]
];