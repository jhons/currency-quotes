# Scrapper simple para obtener las cotizaciones de monedas

### Requisitos
- Node
- [Descargar](https://github.com/jhons/currency-quotes/archive/refs/heads/main.zip) o clonar este repositorio a un directorio de su preferencia


### Configuración del proyecto
Ingresar al directorio del proyecto desde la consola

Ejecutar ```npm install```

Crear una copia del archivo ```.env.example``` con el nombre ```.env```

```cp .env.example .env```

Cargar las siguientes constantes, basado en el análisis de la página que desea extraer los datos de la cotización: 

**```SCRAP_URL```** 
*Es la ```url``` del sitio donde está la cotización que desea extraer. ej. ```https://cotizaciones.com```*

**```SCRAP_CONTAINER```**
*Es el contenedor pricipal donde se encuentra la información, puede ser un ```div```, ```ul```, etc. identificado con una ```class``` o un ```id```, ej. ```#cotizaciones```*

**```SCRAP_DATA```**
*El contenedor de cada una de las cotizaciones, puede ser un ```div```, ```li```, etc. identificado con una ```class``` o un ```id```, ej. ```.info-cotizacion```*

**```SCRAP_CURRENCY```**
*El contenedor donde esta el nombre de la moneda, puede ser un ```div```, ```p```, ```span```, etc. identificado con una ```class``` o un ```id```, ej. ```.moneda```*

**```SCRAP_CURRENCY_BUY```**
*El contenedor donde esta el precio de compra, puede ser un ```div```, ```p```, ```span```, etc. identificado con una ```class``` o un ```id```, ej. ```.compra```*

**```SCRAP_CURRENCY_SELL```**
*El contenedor donde esta el precio de venta, puede ser un ```div```, ```p```, ```span```, etc. identificado con una ```class``` o un ```id```, ej. ```.venta```*

**```JSON_FILE```**
*El nombre del fichero donde desea almacenar la cotización, ej. ```cotizacion.json```*

----
##### Ejemplo del código de la página:
```html
<div id="cotizaciones">
  <ul class="info-cotizacion">
    <li>
      <h3 class="moneda">Dólar</h3>
      <p class="compra">6.000</p>
      <p class="venta">7.000</p>
    </li>
    ...
  </ul>
</div>
```

## Prueba
*Para probar el script ejecute la siguiente linea desde su consola*

```shell
node server.js
```