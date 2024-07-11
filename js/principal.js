/**
 * Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos datos 
 * y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: 
Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo; 
Sela salida requerida presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de hombres: 5
Cantidad de mujeres: 7 
 */

import Cl_Personas from "./Cl_Personas.js";
import Cl_Total from "./Cl_Total.js";


let p1 = new Cl_Personas("Luisa", "F");
let p2 = new Cl_Personas("Ana", "F");
let p3 = new Cl_Personas("Jose", "M");
let p4 = new Cl_Personas("Carmen", "F");
let p5 = new Cl_Personas("Rosa", "F");
let p6 = new Cl_Personas("Jose", "M");
let p7 = new Cl_Personas("Maria", "F");
let p8 = new Cl_Personas("Rafael", "M");
let p9 = new Cl_Personas("Liz", "F");
let p10 = new Cl_Personas("Marcos", "M");
let p11 = new Cl_Personas("Leo", "M");
let p12 = new Cl_Personas("Luz", "F");

let total = new Cl_Total();
total.procesar(p1);
total.procesar(p2);
total.procesar(p3);
total.procesar(p4);
total.procesar(p5); 
total.procesar(p6);
total.procesar(p7);
total.procesar(p8);
total.procesar(p9);
total.procesar(p10);
total.procesar(p11);
total.procesar(p12);

let salida = document.getElementById("salida");

salida.innerHTML = `Total de personas: ${total.totalpersonas}<br>Total de hombres: ${total.totalhombres}<br>Total de mujeres: ${total.totalmujeres}`

