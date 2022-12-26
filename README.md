<h1> 📞 Agenda Telefónica Frontend 📞</h1>

## 📚 Contenido

- Introducción
- Requerimientos
- Instalación
- Ejecución
- Vistas
- Backend
- Maintainer

## 📂 Introducción
Página web de agenda telefónica haciendo uso de HTML, Java Script y Bootstrap consumiendo Api con el framework Symfony.

## 📂 Requerimientos
- HTML 5
- Bootstrap 5.2
- JavaScript librería "jQuery"
- DataTable para listado
- Consump de API mediante AJAX

## 📁 Instalación

1. Clonar el repositoria dentro de una carpeta asiganda para tus proyectos.
2. Abrir una terminal cmd en la carpeta del repositorio clonado, a continuación, ejecutar el siguiente comando:
```bash
npm install
```
Esto con la finalidad de instalar todas las dependencias para el tiempo de ejecución de JavaScript Node.js.

3. Una vez ejecutado el comando anterior podras visualizar las carpetas generadas desde tu gestor de código.


## 📂 Ejecución

1. Usando el editor de código vs code, verificaca si tienes isntalada la siguiente extension y de no ser así instálala:
<p>
  <img width="743" alt="image" src="https://user-images.githubusercontent.com/100662882/209519673-62483f65-f400-4589-943b-a94720095aa0.png">
</p>

2. En la parte inferior da click en "Go alive" o click derecho sobre el documento html y dirigete a la parte de "Open whit Live Server" 
<p>
  <img width="70" alt="image" src="https://user-images.githubusercontent.com/100662882/209519810-08b23de4-ffa5-4f38-997f-981b5cc71623.png">
</p>
<p>
  <img width="275" alt="image" src="https://user-images.githubusercontent.com/100662882/209519988-e83e036d-3e44-4a24-bb0f-c444699d7832.png">
</p>


## 📂 Vistas
### Home
Teniendo en funcionando el servidor del Backend y Frontend se podrá visuañizar la pantalla principal como la soguiente imagen, la cual deberá estar vacía al no contar con ningún registro.

Mediante el uso de DataTable podemos mostrar/listar los registros, en cuanto tengamos registros al cargar la página podremos apreciar los datos insertados en la tabla que podemos apreciar en la aprte inferior.
<p>
  <img width="1381" alt="Captura de pantalla 2022-12-26 a la(s) 1 58 28" src="https://user-images.githubusercontent.com/100662882/209521701-948c72b9-8bb6-4f59-adf0-e9e28ddec91d.png">
  </p>

### Ver más opciones

En este modal se puede visualizar la información completa del contacto que seleccionamos, al igual, podemos apreciar 4 opciones: 
- Cerrar: Se cierra el modal y tendría la función de sólo consultar.
- Editar contacto: Redirigirse a una sección para editar la información.
- Agregar número: Redirigirse a una sección para crear y relacionar el nuevo número con el contacto.
- Eliminar contacto: Eliminará de forma permanente el contacto.
<p>
  <img width="447" alt="Captura de pantalla 2022-12-25 a la(s) 21 31 41" src="https://user-images.githubusercontent.com/100662882/209522115-9f5a5e3c-8dfb-4581-b168-f14cb0fb0756.png">
  </p>
  
### Guardar

Formulario para crear/guardar nuevo contacto:
<p>
  <img width="1440" alt="Captura de pantalla 2022-12-25 a la(s) 21 32 57" src="https://user-images.githubusercontent.com/100662882/209522242-3c1c2bf4-c9d1-4d3d-8617-c387326b4afb.png">
  </p>
Guardado en db y mostrado en tabla:
 <p>
  <img width="1381" alt="image" src="https://user-images.githubusercontent.com/100662882/209522347-64691c9f-6e4a-45f6-8b8f-c5918f10eb73.png">
  </p>
  
### Editar / Actualizar

Formulario para editar o actulizar uno o más datos del contacto seleccionado:
<p>
  <img width="1440" alt="Captura de pantalla 2022-12-25 a la(s) 21 33 59" src="https://user-images.githubusercontent.com/100662882/209522485-0d21dc53-cf97-47a7-93ca-6320a630741d.png">
  </p>
 <p>
  <img width="1440" alt="Captura de pantalla 2022-12-25 a la(s) 21 34 14" src="https://user-images.githubusercontent.com/100662882/209522549-8151a07f-4b35-4376-bcec-c28cfb066cf9.png">
  </p>
  
### Agregar número

Sección para agregar otro npumero telefónico al contacto seleccionado:
  </p>
  </p>
<p>
  <img width="1440" alt="Captura de pantalla 2022-12-25 a la(s) 21 34 30" src="https://user-images.githubusercontent.com/100662882/209522583-c31870d7-c8f9-4e52-a567-5fd3749d0d5b.png">
  </p>
 <p>
   <img width="445" alt="Captura de pantalla 2022-12-25 a la(s) 21 34 51" src="https://user-images.githubusercontent.com/100662882/209522645-1850c1fd-6073-410e-975e-aa752439d8fe.png">
  </p>
  
  
### Limites de números

Al tener 3 números telefónicos registrados ya no tendrá habilitada la opción de agregar más números.
<p>
  <img width="450" alt="Captura de pantalla 2022-12-25 a la(s) 21 31 08" src="https://user-images.githubusercontent.com/100662882/209522063-75b70943-18bf-44cf-82f8-ed1a7a045adb.png">
  </p>
  
### Borrar

Al borrar un contacto su id no será ni visualizado ni consuldato ya que se habrá eliminado de la base de datos.
<p>
  <img width="1036" alt="image" src="https://user-images.githubusercontent.com/100662882/209523844-9988944d-a848-431b-ab61-2e1f74c1681f.png">
  </p>


## 📂 Especificaciones

* 🟣 Teniendo en cuenta el CRUD la página es capaz de: Registrar, Listar, Editar y Borrar los contactos mediante el uso de una API desarrollada con PHP, en donde cada registro será guardado, modificado o eliminado en una base de datos con MySQL. 

## 📂 Backend
Podrás encontrar el repositorio del backend para que puedas ejecutar esta aplicación web.
<br>

[Backend de la aplicación](https://github.com/Lizzyter/agendaBackendEAM)


## Maintainer
En caso de encontrar algún problema o bug en su ejecución, házmelo saber lo más pronto posible para dar una respuesta inmediata

<br>
<p align='center'>
  <img src='https://img.shields.io/badge/Versión-1.0.0-9fc?style=flat-square' />
  <img src='https://img.shields.io/badge/Estatus-Terminado-blueviolet?style=flat-square' />
</p>

💟 Code by [Elizabeth Aguilar](https://github.com/Lizzyter)
