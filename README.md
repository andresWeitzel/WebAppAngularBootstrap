
# Proyecto Web con Angular y Bootstrap

**Diseño y Desarrollo de una aplicación web para denuncias, ayuda e información sobre violencia de género, discriminación, etc. Aplicando Angular y Bootstrap**

</br>

Aplicación Web: https://web-app-denuncias.netlify.app/

</br>

</br>

## Vista Inicio del Sitio Web 1/3

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/DenunciasOnlineAngular_app/Captura%20de%20pantalla%20(320).png)

## Vista Inicio del Sitio Web 2/3

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/DenunciasOnlineAngular_app/Captura%20de%20pantalla%20(322).png)


## Vista Inicio del Sitio Web 3/3

![Index app](https://github.com/andresWeitzel/Graphics/blob/main/Proyectos/DenunciasOnlineAngular_app/Captura%20de%20pantalla%20(321).png)

</br>

<hr>
</br>

<hr>

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


</br>

## Subir el proyecto al repositorio con git desde el bash de visual studio Code 

### 1)Inicializamos nuestro repositorio local .git
* git init

### 2)Agregamos lo desarrollado a nuestro repo local
* git add .

### 3)Agregamos lo que tenemos en nuestro repo local al área de Trabajo.
* git commit -m "agrega un comentario entre comillas"

### 4)Le indicamos a git donde se va a almacenar nuestro proyecto(fijate en tu repositorio de github cual es el enlace de tu proyecto(esta en code)).
* git remote add origin gh repo clone andresWeitzel/WebAppAngularBootstrap

### 5)Subimos nuestro proyecto.
* git push -u origin master

</br>

## Actualización del repositorio del proyecto con git desde el bash de visual studio code

### 1)Visualizamos las modificaciones realizadas en local
* git status

### 2)Agregamos lo modificado al area de trabajo
* git add *

### 3)Confirmamos las modificaciones realizadas
* git commit -m "Tu commit entre comillas"

### 4)Sincronizamos y traemos todos los cambios del repositorio remoto a la rama en la que estemos trabajando actualmente.
##### (Desconozco porqué tengo que ejecutar este comando, supongo que será porque en el local tengo otros proyectos o porque mi master no es un branch, sino el main por defecto de gitHub(Yo realicé esa modificación para mejor visualización)).
* git pull https://github.com/andresWeitzel/WebAppAngularBootstrap.git

### 5)Enviamos todos los cambios al repo en github
* git push https://github.com/andresWeitzel/WebAppAngularBootstrap.git

</br>

## Deploy de la app desde el bash de visual studio code

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

