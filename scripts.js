
function hola() 
{
var mensaje;
var opcion = prompt("Introduzca su nombre:");
 
if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
        } else {
            mensaje = "Hola " + opcion;
            }
           document.getElementById("nombre").innerHTML = mensaje;
}


//**************************************************************************************** */

function sumar() 
{
var mensaje;
var numero1 = parseInt(prompt("Introduzca un numero:"));
var numero2 = parseInt(prompt("Introduzca otro numero:"));
 
if (numero1 == null || numero2 == null ||  numero1 == "" || numero2 == "") {
        mensaje = "Has cancelado o introducido un numero vacío";
        } else {
            mensaje = numero1 + numero2;
            }
           document.getElementById("resultadoSuma").innerHTML = mensaje;
}

//**************************************************************************************** */

function mayor() 
{
var mensaje;
var numero1 = parseInt(prompt("Introduzca un numero:"));
var numero2 = parseInt(prompt("Introduzca otro numero:"));
 
if (numero1 == null || numero2 == null ||  numero1 == "" || numero2 == "") {
        mensaje = "Has cancelado o introducido un numero vacío";
        } 
        else {
            if(numero1 > numero2)
               {
                  mensaje = "El numero : " + numero1 + " es mayor";
                }
                else{
                    mensaje = "El numero : " + numero2 + " es mayor"; 
                }
            }
           document.getElementById("esMayor").innerHTML = mensaje;
}

//**************************************************************************************** */

function mayorDeTres() 
{
var mensaje;
var numero1 = parseInt(prompt("Introduzca un numero1:"));
var numero2 = parseInt(prompt("Introduzca numero2:"));
var numero3 = parseInt(prompt("Introduzca numero3:"));
 
if (numero1 == null || numero2 == null ||  numero1 == "" || numero2 == "" || numero3 == null ||  numero3 == "" ) {
        mensaje = "Has cancelado o introducido un numero vacío";
        } 
        else {

            if(numero1 > numero2)
               {
                   if(numero1 > numero3)
                       {
                       mensaje = "El numero 1 : " + numero1 + " es mayor";
                       }
                       else
                       {
                        mensaje = "El numero 3 : " + numero3 + " es mayor";
                       }
                }
                else{
                    if(numero2 > numero3)
                       {
                         mensaje = "El numero 2 : " + numero2 + " es mayor"; 
                        }
                        else
                        {
                            mensaje = "El numero 3 : " + numero3 + " es mayor"; 
                        }
            }
           document.getElementById("mayorTres").innerHTML = mensaje;
        }
}


//**************************************************************************************** */

function esDivisiblex2() 
{
var mensaje;
var numero1 = parseInt(prompt("Introduzca un numero:"));
 
if (numero1 == null ||  numero1 == "" ) {
        mensaje = "Has cancelado o introducido un numero vacío";
        } else {
            if(numero1 %2== 0){
                   mensaje = "El numero "+ numero1 +" es divisible por 2";
                   }
                   else
                   {
                    mensaje = "El numero "+ numero1 + "no es divisible por 2";
                   }
           document.getElementById("dividirx2").innerHTML = mensaje;
}
}

//*******************************************************************************************/
function mayor18() 
{
var mensaje;
var numero1 = parseInt(prompt("Introduzca la edad :"));
 
if (numero1 == null ||  numero1 == "" ) {
        mensaje = "Has cancelado o introducido un numero vacío";
        } else {
            if(numero1 >= 18){
                   mensaje = "Ya puedes conducir";
                   }
                   else
                   {
                    mensaje = "Todavia no puedes conducir";
                   }
           document.getElementById("dividirx2").innerHTML = mensaje;
}
}

//*******************************************************************************************/
function calificar() 
{
var mensaje;
var numero1 = parseInt(prompt("Introduzca una nota :"));
 
if (numero1 == null ||  numero1 == "" ) {
        mensaje = "Has cancelado o introducido un numero vacío";
        } 
        else {
               if(numero1 <=0 && numero1 < 3){
                    mensaje ="Muy deficiente";
                  }
                else if(numero1 == 3 && numero1 <5)  {
                    mensaje="Insuficiente";
                }
                else if(numero1 ==5 && numero1 <6)
                {
                    mensaje="Suficiente";
                }
                else if(numero1 == 6 && numero1 < 7){
                    mensaje="Bien";
                }
                else if(numero1 == 7 && numero1 < 9){
                    mensaje="Notable";
                }
                else if(numero1 == 9 ||  numero1 == 10){
                    mensaje ="Sobresaliente";
                }

           document.getElementById("resultadoCalificar").innerHTML = mensaje;
         }
      
}

//*******************************************************************************************/
function concatena() 
{
var mensaje ="";
var cadena = prompt("Introduzca una palabra(para salir cancelar) :");
 

while (cadena != null && cadena !=" ") {
        mensaje += cadena+"-";
        var cadena  = prompt("Introduzca una palabra (para salir cancelar):");
         }
           document.getElementById("mostrar").innerHTML = mensaje;
 }
    
 
//*******************************************************************************************/
function rangoNumerico() 
{
    var mensaje ="";
    var variable;
    var num1 = parseInt(prompt("Ingrese un numero: "));
    var num2 = parseInt(prompt("Ingrese otro numero: "));
    

    if (num1 < num2 && (num2-num1)<=20){
        for(let i = num1; i<=num2; i++){    
            variable=i.toString();
            mensaje += variable+" " ;
        }
    }
    if (num1 > num2 && (num1-num2)<=20){
        for(let i = num1; i>=num2; i--){    
            variable=i.toString();
            mensaje += variable+" " ;
        }
    }
    document.getElementById("rango").innerHTML = mensaje;
}

//****************************************************************************/
function arrayNombres() 
{
var mensaje ="";
var personas = new Array("Maria", "Sergio", "Malena","Ignacio"); 
 
      for( i= 0;i<=3;i++)
      {
          mensaje+= personas[i] +" ";
      }
           document.getElementById("nombres").innerHTML = mensaje;
}


//****************************************************************************/
function ingresaNombres() 
{
var mensaje ="";
var i=0;
var personas= [];
var nombre = prompt("Ingrese un nombre(para salir cancelar): ");

 
while (nombre != null && nombre !=" " && i<=2) {
        personas[i]=nombre;
      
        mensaje+= personas[i] +" ";
        i++;
    var nombre  = prompt("Introduzca un nombre (para salir cancelar):");
     }
       document.getElementById("mostrarNombres").innerHTML = mensaje;
}

//*******************************************************************************************/
function precio() 
{
    var mensaje ="";
    var variable;
    var precio = parseInt(prompt("Ingrese precio: "));
    var IVA = parseInt(prompt("Ingrese IVA: "));
    

    if (precio == null ||  precio == "" || IVA == null ||  IVA == "" ) {
        mensaje = "Has cancelado o introducido un valor vacío";  
    }
    else{

           precio += precio*IVA/100;
            variable=precio.toString();
            mensaje ="El precio con IVA es:"+ variable+" " ;
        
    }
    document.getElementById("mostrarPrecio").innerHTML = mensaje;
}
