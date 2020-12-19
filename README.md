
# Proyecto Web con Angular y Bootstrap

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

## Deploy de la app desde el bash de vs code

### 1) Instalar el cli global
 * npm i netlify-cli
 * netlify status
 * netlify --version

### 2) Build 
 * ng build --prod 

### 3) Deploy
* netlify deploy --prod

