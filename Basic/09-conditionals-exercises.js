/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let entrada1 = 3
if (entrada1 == 3){
    console.log("Victor")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let mensaje = "Contraseña correcta"
let usuario = "MyUser"
let contra = "LaContra"

if (usuario == "MyUser" && contra == "LaContra"){
    console.log(mensaje)
} else{
    console.log("Contraseña incorrecta")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 4

if (numero > 0){
    console.log("Positivo")
} else if (numero == 0){
    console.log("Cero")
} else{
    console.log("Negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 7
if (edad >= 18){
    console.log("Puede votar")
} else{
    console.log(`No puede votar porque le faltan ${18 - edad} años para poder hacerlo`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let mensaje2 = edad >= 18 ? "Puede votar" : `No puede votar porque le faltan ${18 - edad} años
para poder hacerlo`
console.log(mensaje2) 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
mes = 6 // 0 al 11 para los meses
if (mes >= 2 && mes <= 5){
    console.log("Primavera")
}else if (mes >= 6 && mes <=8){
    console.log("Verano")
}else if (mes >= 9 && mes <11){
    console.log("Otoño")
}else if (mes == 11 || mes == 0 || mes == 1){
    console.log("Invierno")
}else{
    console.log("Favor ingresar un numero de mes válido (0-11)")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == 1){
    console.log("29, pero solo por esta vez")
} else if (mes%2==0 && mes <=6){
    console.log("31 días")
} else if (mes%2==1 && mes >6){
    console.log("Siempre 31 días")
} else{
    console.log("30 días")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 3
switch (idioma){
    case 0:
        console.log("Hola")
        break
    case 1:
        console.log("Hello")
        break
    case 2:
        console.log("Hallo")
        break
    case 3:
        console.log("Ciao")
        break
    default:
        console.log("No se qué idioma es ese")
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(mes){
    case 0:
        console.log("Invierno")
        break
    case 1:
        console.log("Invierno")
        break
    case 2:
        console.log("Primavera")
        break
    case 3:
        console.log("Primavera")
        break
    case 4:
        console.log("Primavera")
        break
    case 5:
        console.log("Primavera")
        break
    case 6:
        console.log("Verano")
        break
    case 7:
        console.log("Verano")
        break
    case 8:
        console.log("Verano")
    case 9:
        console.log("Otoño")
        break
    case 10:
        console.log("Otoño")
        break
    case 11:
        console.log("Invierno")
        break
    default:
        console.log("No se que mes es ese")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch(mes){
    case 0:
        console.log("31 días")
        break
    case 1:
        console.log("29 días esta vez")
        break
    case 2:
        console.log("31 días")
        break
    case 3:
        console.log("30 días")
        break
    case 4:
        console.log("31 días")
        break
    case 5:
        console.log("30 días")
        break
    case 6:
        console.log("31 días")
        break
    case 7:
        console.log("31 días")
        break
    case 8:
        console.log("30 días")
    case 9:
        console.log("31 días")
        break
    case 10:
        console.log("30 días")
        break
    case 11:
        console.log("31 días")
        break
    default:
        console.log("No se que mes es ese")
}