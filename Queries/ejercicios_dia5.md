# Módulo 5 - Clase 5

## Ejercicios HTML y CSS

1. Páginas que se adaptan a su entorno

- Subir a los buzones: Simplemente Responsivo y Bloques Responsivos

Utilizando los @media queries deben implementar una página que se adapte a los diferentes tamaños sugeridos por la W3 (https://www.w3schools.com/css/css_rwd_intro.asp) donde tengamos al menos 4 divs con las mismas clases y que al cambiar de tamaño, cambien de color.

2. Diseñando mis vistas con información

- Subir al buzón: "Acerca de Python"

Utilizar la página creada para Git y realizar los ajustes necesarios para que se adapte a diferentes pantallas y agregar la información de los lenguajes de programación Ruby y Javascript.

¿Quién es el creador?
3 Características importantes.
Logo.
Última versión.
1 proyecto que esté desarrollado en el lenguaje

Utilizar la presentación en "tarjetas" que es muy común en el desarrollo web.

https://dribbble.com/shots/1978243-Latest-News/attachments/1978243-Latest-News?mode=media


## Ejercicios Lógica de programación

1. Funciones con IF, FOR y división modular

- Subir al buzón: Algoritmo III 

Utilizar el diagrama de T para resvolver los siguientes ejercicios.

1.1. La estructura if nos ayuda a preguntar si algo es verdadero o falso (los llamamos bool). Lo podemos utilizar para toda clase de preguntas utilizando los operadores lógicos: < ; > ; <= ; >= ; == . La división modular (%) nos ayuda a obtener el residuo en una división.

function es_par(numero){
    if (numero % 2 == 0){
        return "es par"
    }
    return "es impar"
}

a = 10
console.log(es_par(a))
console.log(es_par(a - 1))
a -= 5
console.log(es_par(a))
console.log(7)

1.2. Las estructuras if y for se pueden mezclar unas con otras para crear combinaciones desarrollar algoritmos más complejos.

function mostrar_10_pares(){
    for (var i = 0; i <= 10; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
}
function mostrar_10_impares(){
    for (var i = 0; i <= 10; i++){
        if (i % 2 != 0){
            console.log(i)
        }
    }
}

mostrar_10_pares()
mostrar_10_impares()

2. Arreglos

- Subir al buzón: Agoritmo IV

Todo este tiempo hemos utilizado solo 1 variable para guardar 1 dato al mismo tiempo. Pero existen ocaciones donde queremos guardar más de 1 dato en la misma variable. Cuando sucede esto necesitamos utilizar un arreglo (también se le conoce como vector) que nos permitirá guardar al igual que las variables lo que queramos dentro de ellos y todos bajo el mismo nombre, solo debemos buscarlos por su posición

Ejemplos de arreglos

arreglo1 = [ 345, 546, 7, -45, 456, 456] // arreglo de números

arreglo2 = [ "casa", "auto", "computadora"] // arreglo de textos o cadenas

arreglo3 = ["colores", 3, "lentes", 5893, "90"] // arreglos mixtos

Si queremos obtener la información de uno de ellos debemos buscar la posición.

console.log(arreglo1[0]) // aquí mostrará el número 345
console.log(arreglo2[2]) // aquí mostrará el texto "computadora"
console.log(arreglo3[1]) // aquí mostrará el número 3

NOTA. Las posiciones de los arreglos comienzan siempre en cero.

1.1. Resolver el siguiente ejercicio utilizando un diagrama de T

numeros = [ 5, 6, 7, 8, 345, -2]

console.log(numeros[0] - numeros[4])
console.log(numeros[2] + numeros[5])
console.log(numeros[3] + numeros[3])
console.log(numeros[1] - numeros[0])