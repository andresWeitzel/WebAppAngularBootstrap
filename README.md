
# Proyecto Web con Angular y Bootstrap

**Diseño y Desarrollo de una aplicación web para denuncias, ayuda e información sobre violencia de género, discriminación, etc. Aplicando Angular y Bootstrap**

</br>

Aplicación Web: https://web-app-denuncias.netlify.app/

</br>

| Tecnologías | Versión |
| ------------- | ------------- |
| Angular |   9.1.12 |
| Bootstrap | 4.5.x  |
| Netlify | - |
| Visual Studio Code | 1.51.1  |
| Git | 2.29.1.windows.1  |
| Angular CLI | 9.1.0 |
| Netlify CLI | 2.69.10 |

</br>

## Repositorios Oficiales(documentación)

#### Bootstrap:   https://getbootstrap.com/
#### Angular:     https://angular.io/tutorial/toh-pt0
#### IDE:         https://code.visualstudio.com/download
#### Git:         https://git-scm.com/docs
#### Angular CLI: https://github.com/angular/angular-cli
#### Netlify CLI: https://www.npmjs.com/package/netlify-cli

</br>

## Más Información

### Servidor de desarrollo

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http: // localhost: 4200 /`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

### Andamio de código

Ejecute `ng generate component component-name` para generar un nuevo componente. También puede usar `ng generate directive | pipe | service | class | guard | interface | enum | module`.

### Construir

Ejecute `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist /`. Usa la marca `--prod` para una construcción de producción.

### Ejecución de pruebas unitarias

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma] (https://karma-runner.github.io).

### Ejecución de pruebas de un extremo a otro

Ejecute `ng e2e` para ejecutar las pruebas de un extremo a otro a través de [Transportador] (http://www.protractortest.org/).

### Ayuda adicional

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte el [LÉAME de Angular CLI] (https://github.com/angular/angular-cli/blob/master/README.md).

<hr>

</br>

## Actualización del proyecto con git desde el bash de vs code

### 1)Visualizamos las modificaciones realizadas en local
* git status

### 2)Agregamos lo modificado al area de trabajo
* git add *

### 3)Confirmamos las modificaciones realizadas
* git commit

### 4)Sincronizamos y traemos todos los cambios del repositorio remoto a la rama en la que estemos trabajando actualmente.
##### (Desconozco porqué tengo que ejecutar este comando, supongo que será porque en el local tengo otros proyectos o porque mi master no es un branch, sino el main por defecto de gitHub(Yo realicé esa modificación para mejor visualización)).
* git pull https://github.com/andresWeitzel/WebAppAngularBootstrap.git

### 5)Enviamos todos los cambios al repo en github
* git push https://github.com/andresWeitzel/WebAppAngularBootstrap.git

</br>

## Deploy de la app desde el bash de vs code

### 1) Instalar el cli global
 * npm i netlify-cli
 * netlify login
 * netlify status
 * netlify --version

### 2) Build 
 * ng build --prod 

### 3) Deploy
* netlify deploy --prod
#### IMPORTANTE: Luego de ingresar este comando, asegurarse de colocar correctamente el `Publish directory` , sino no se va a deployar correctamente, en general es  `dist/'nombre de tu proyecto sin comillas' ` 

