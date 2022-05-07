"use strict";
console.log("Hola Mundo!!!!");
/* Lo importante es usar una estructiura de directorios,
en public irían los html, css, y js
en src irian los ts. */
/* En el pachage.json, definimos:
    "tsc": "tsc ./src/index.ts", para no ejecutar en la terminal toda esa sentencia,
    "devX": "tsc ./src/index.ts --watch", // usamos --watch para no compilar el código manualmente cada vez que queremos hacerlo
    "devY": "tsc ./src/index.ts --watch --outDir ./public", //los ts generan js, pero se generan el el mismo directorio donde esten los ts, entonces usamos la bandera outDir para especificar donde salgan
    "dev": "tsc ./src/*.ts --watch --outDir ./public" // usamos *.ts para que se generan tooodos los archivos ts , y no solo los de nombre index.ts
*/
/*Archivo de configuracion de TS
es un archivo que especifica los archivos de entrada y las opciones de compilador
Y ya no tenemos que estar configirando nosotros
usamos lossiguiente comandso:

npx tsc --init //toma la instalacion de ts y de ella va a crear el archivo de configuracion por nosotros
vemos que se crea el archivo tsconfig.json
Algo así:
 -- Modules  --
// "rootDir": "./",                                  Specify the root folder within your source files.
// "moduleResolution": "node",                       Specify how TypeScript looks up a file from a given module specifier.
// "baseUrl": "./",                                  Specify the base directory to resolve non-relative module names.
// "paths": {},                                      Specify a set of entries that re-map imports to additional lookup locations.
// "rootDirs": [],                                   Allow multiple folders to be treated as one when resolving modules.
// "typeRoots": [],


Entonces debemos solo cambiar los valores, por ejemplo:
// "rootDir": "./src",

los cambios dependerán de las propiedades que vayamso a usar,
también podemos incluir propiedades que no vivnen por defecto en ese archivo de configuruacion:

"include": ["src"] //Esta propiedad la incluimos porque a pesar de incluir un rootDir TS todavía a querer buscar archuvos fuera de la carpeta src y los va a querer compilar, entonces así
le estamos diciendo a TS que solo se preocupe por los archivos dentro de src
*/ 
