# Módulo 5 - Clase 3

## Ejercicios CSS


Utilizar una página de referencia para diagramar su página web de inicio.

Después responder estas preguntas en sus propias palabras y como lo entiendan.

1. ¿Qué es el modelo de caja?
2. ¿Para qué sirve la propiedad display?
3. ¿Cuál es la diferencia entre inline ; block ; inline-block ?

Las preguntas y respuestas deberán estar como comentarios al final de su archivo index.html


Links de referencia:

- Etiquetas Contenedoras. https://www.neoguias.com/etiquetas-contenedoras-html/
- Propiedad Display CSS. https://www.youtube.com/watch?v=rJp3IWsk_os
- Propiedad Position CSS. https://www.youtube.com/watch?v=BVIdzytAtkg

## Ejercicios Lógica de programación

Utilizando el diagrama de T, lápiz y papel realizar los siguientes ejercicios

1. Funciones anidadas

var numero1 = 1
var numero2 = 4

function al_cuadrado(x){
    return x * x;
}
function al_cubo(y){
    return al_cuadrado(y) * y;
}

var suma = numero1 + numero2
var cuadrado = al_cuadrado(suma)
var elevado_a_la_3 = al_cubo(suma)

console.log("la suma es", suma)
console.log("ese número al cuadrado es ", elevado_a_la_3)

2. Funciones sueltas

function imprimir(n){
    console.log("---", n, "---")
    console.log("imprimimos...", n)
}

var a = 3
b = 4
var c = 5
imprimir(a)
imprimir(b)
imprimir(c)
imprimir(a + b + c)
imprimir("saludo")

function imprimir(msg){

    console.log(msg)
    console.log("---")
}

imprimir(a)
imprimir(b)
imprimir(c)
imprimir(a + b + c)
imprimir("saludo")

## Ejercicios Git

- Subir al buzón de (Javascript básico)

Git es una tecnología que nos permite el seguimiento y control de nuestro código. Además de poder ayudarnos en la gestión de versiones para no perder nuestro progreso.

Utilizar una página de referencia para diagramar la página donde subirán screenshots de la instalación de Git, así que tomen screenshot de todo el procedimiento.

Debemos instalar y configurar Git

1. Descargar e instalar Git utilizando el siguiente link. https://git-scm.com/

2. Abrir la Terminal en su proyecto de Visual Studio Code (Terminal > New Terminal)

3. Configurar tu identidad en Git con los comandos

```sh

    $ git config --global user.name "rené rodriguez"
    $ git config --global user.email reneclavijo@live.com

```

2. Utilizar el comando cd para navegar hasta la carpeta del proyecto.
    Ejemplo:
        $ cd /d/_Edutecno/Mi pagina web

3. Inicializar un repositorio utilizando el siguiente comando

```sh

    $ git init

```
4. Agregar archivos para crear su primer commit

```sh

    $ git status
    $ git add .

```

5. Confirmar todos los archivos agregados

```sh

    $ git commit -m "mi primer commit"
   
```

6. Revisar el commit que se acaba de crear

```sh

    $ git log
  
```