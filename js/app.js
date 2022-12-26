 //Cargar datos al abrir la pagina
 window.onload = function() {
    listarContactos();
  }
  
  // Columnas de la tabla, dibujar tabla
  let tabla = `<span class="fs-4 mb-5">Contactos</span>
                <table id="table_id" class="table table-striped" style="width: 100%;">
                  <thead>
                    <tr>
                      <th class="text-center">ID</th>
                      <th class="text-center">Nombre</th>
                      <th class="text-center">Número de Telefónico</th>
                      <th class="text-center">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>`;
  
  let contactos = [];
  
  // Listar datos de contactos
  const listarContactos = () => {
    $.ajax({
      type: "GET",
      url: "http://localhost:8000/api/contactos",
      contentType: "application/json",
      crossDomain: true,
      async: true,
      beforeSend: function() {
        console.log('Cargando...');
        $('#spinner').show();
      },
      success: function (data) {
        console.log("Contactos Recibidos: ", data)
        contactos = data;
      },
      complete: function() {
        console.log('Carga completa!');
        $('#spinner').hide();
  
        // Recolectar los datos de la db y llenar la tabla
        contactos.forEach(contacto => {
          tabla += `<tr>
                      <td class="text-center">${contacto.id}</td>
                      <td class="text-center">${contacto.name}</td>
                      <td class="text-center">${contacto.numero}</td>
                      <td class="text-center"><button class="btn btn-primary" onclick="verContacto(${contacto.id})" data-toggle="modal" data-target="#exampleModalCenter">Ver más...</button></td>
                    </tr>`;
        });
  
        tabla += '</tbody></table>';
        document.getElementById('tabla').innerHTML = tabla;
        $('#table_id').DataTable();
      },
      error: function (error) {
        console.log(error)
      }
    })
  }
  
  // POST/Guardar nuevo contacto

  let botonGuardar = document.getElementById('botonGuardar');
  botonGuardar.addEventListener('click', function() {
  // Obtener los valores de los inputs con getElementById
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let telefono = document.getElementById('telefono').value;
  let direccion = document.getElementById('direccion').value;
  let email = document.getElementById('email').value;

  // Crear el objeto contacto con los nuevos valores
  let contacto = {
    name: nombre,
    apellido: apellido,
    numero: telefono,
    direccion: direccion,
    email: email
  }

  // Enviar el objeto contacto al servidor
  $.ajax({
    type: "POST",
    url: "http://localhost:8000/api/contactos",
    contentType: "application/json",
    crossDomain: true,
    async: true,
    data: JSON.stringify(contacto),
    beforeSend: function() {
      console.log('Cargando...');
    },
    success: function (data) {
      console.log('Éxito!', data);
      listarContactos();
    },
    complete: function() {
      console.log('Carga completa!');
    },
    error: function (error) {
      console.log(error);
    }
  });
  });
  
  // Ver detalles de un contacto
  const verContacto = (id) => {
    let contacto = contactos.find(contacto => contacto.id == id);
    console.log("Ver Contacto: ", contacto);
  
    // Llenar el modal con los datos del contacto
    let modal = `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-bg="primary" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title text-center" id="exampleModalCenterTitle">${contacto.name} ${contacto.apellido}</h5>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
                        Cerrar
                        </button>
                      </div>
                      <div class="modal-body m-auto">
                        <div class="card px-5">
                          <div class="text-center pt-3">
                          <img src="/src/img/usuario.png" alt="Logo" width="80" height="80" class="d-inline-block">
                          </div>
                          <div class="card-body">
                            
                            <p class="card-text text-right">
                              <i class="fas fa-map-marker-alt fa-1x"></i> ${contacto.direccion}
                            </p>
  
                            <p class="card-text text-right">
                              <i class="fa-solid fa-envelope"></i> ${contacto.email}
                            </p>

                            <p class="card-text text-right">
                              <i class="fa-solid fa-phone"></i> ${contacto.numero}
                            </p>

                            <p class="card-text text-right fs-6">
                              <i class="bi bi-chevron-down"></i> Otros Números
                              `
                                // Si el contacto tiene otros números, los listamos
                                if (contacto.otrosNumeros.length > 0) {
                                  for (let i = 0; i < contacto.otrosNumeros.length; i++) {
                                    let numero = contacto.otrosNumeros[i];
                                    console.log(numero);
                                    modal += `<li class="text-right">${numero.telefono}</li>`;
                                  }
                                  // Si no tiene otros números, mostramos un mensaje
                                } else {
                                  modal += `<li class="text-center">No hay otros números</li>`;
                                }
                              modal += `
  
                            </p>
  
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer justify-content-center">
                        
                        `
                        // Unicamente se pueden un contacro puede tener hasta 3 numeros
                        if (contacto.otrosNumeros.length < 3) {
                          modal += `<button class="btn btn-success" onclick="nuevoNumero(${contacto.id})" data-dismiss="modal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
                          Agregar número
                          </button>`
                        }
                        modal += `
                        
                        <button class="btn btn-warning" onclick="editarContacto(${contacto.id})" data-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg>
                        Editar datos
                        </button>
                        <button class="btn btn-danger" onclick="eliminarContacto(${contacto.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
                        Eliminar contacto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>`
    
    document.getElementById('modal').innerHTML = modal;
  
  }
  
  // Funcion para editar un contacto
  const editarContacto = (id) => {
    let contacto = contactos.find(contacto => contacto.id == id);
    console.log("Contacto a Editar: ", contacto);
  
    $('#agregarSection').hide();
    $('#tabla').hide(); 
    $('#editarSection').show();

    // Llenar los inputs con los datos del contacto con jQuery
  $('#nombreEditar').val(contacto.name);
  $('#apellidoEditar').val(contacto.apellido);
  $('#telefonoEditar').val(contacto.numero);
  $('#direccionEditar').val(contacto.direccion);
  $('#emailEditar').val(contacto.email);

  let botonEditar = document.getElementById('botonEditar');
  botonEditar.addEventListener('click', () => {

    // Llenar los inputs con los nuevos datos del contacto con jQuery
    let nuevoNombre = $('#nombreEditar').val();
    let nuevoApellido = $('#apellidoEditar').val();
    let nuevoTelefono = $('#telefonoEditar').val();
    let nuevaDireccion = $('#direccionEditar').val();
    let nuevoEmail = $('#emailEditar').val();

    let nuevoContacto = {
      name: nuevoNombre,
      apellido: nuevoApellido,
      numero: nuevoTelefono,
      direccion: nuevaDireccion,
      email: nuevoEmail
    }

    // Hacer la peticion Post con el id del contacto a editar
    $.ajax({
      type: "POST",
      url: `http://localhost:8000/api/contactos/${id}`,
      contentType: "application/json",
      crossDomain: true,
      async: true,
      data: JSON.stringify(nuevoContacto),
      beforeSend: function() {
        console.log('Editando...');
      },
      success: function (data) {
        console.log('Éxito', data)
        listarContactos();
      },
      complete: function() {
        console.log('Edición completa');
      },
      error: function (error) {
        console.log(error)
      }
    })
  });
  
  }
  
  // Funcion para agregar un nuevo numero al contacto
  const nuevoNumero = (id) => {
    let contacto = contactos.find(contacto => contacto.id == id);
    console.log("Nuevo numero para el contacto: ", contacto);
  
    $('#editarSection').hide();
    $('#agregarSection').hide();
    $('#tabla').hide();
    $('#nuevoNumeroSection').show();
  
    // Recuperamos los datos del contacto para volver a mandarlos
    let Nombre = contacto.name;
    let Apellido = contacto.apellido;
    let Telefono = contacto.numero;
    let Direccion = contacto.direccion;
    let Email = contacto.email;
  
    let botonAgregarNumero = document.getElementById('botonAgregarNumero');
    botonAgregarNumero.addEventListener('click', () => {
  
      // Obtenemos el nuevo numero
      let nuevoTelefono = $('#telefonoNuevo').val();
  
      // Creamos un objeto con el campo otrosNumeros y dentro un array con el nuevo numero
      let nuevoNumero = {
        name: Nombre,
        apellido: Apellido,
        numero: Telefono,
        direccion: Direccion,
        email: Email,
        otrosNumeros: {
          "0": {
            telefono: nuevoTelefono,
          }
        }
      }
      
      // Hacemos la peticion Post con el id del contacto y mandamos el objeto con el nuevo numero
      $.ajax({
        type: "POST",
        url: `http://localhost:8000/api/contactos/${id}`,
        contentType: "application/json",
        crossDomain: true,
        async: true,
        data: JSON.stringify(nuevoNumero),
        beforeSend: function() {
          console.log('Agregando Numeros...');
        },
        success: function (data) {
          console.log('Éxito!', data)
          listarContactos();
        },
        complete: function() {
          console.log('Servicio completado');
        },
        error: function (error) {
          console.log(error)
        }
      })
    });
  }
  
  // Funcion para eliminar un contacto
const eliminarContacto = (id) => {
  let contacto = contactos.find(contacto => contacto.id == id);
  console.log('Eliminar: ', contacto);

  // Delete con el id del contacto
  $.ajax({
    type: "DELETE",
    url: `http://localhost:8000/api/contactos/${id}`,
    contentType: "application/json",
    crossDomain: true,
    async: true,
    beforeSend: function() {
      console.log('Cargando...');
    },
    success: function (data) {
      console.log('Éxito', data)

      // Reload a la página principal para visualizar el cambio
      listarContactos();
      window.location.reload();
    },
    complete: function() {
      console.log('Carga completa!');
    },
    error: function (error) {
      console.log(error)
    }
  })
}
  
  // Cancelar y ocultar el formulario de editar
  let botonCancelarEditar = document.getElementById('botonCancelarEditar');
  botonCancelarEditar.addEventListener('click', function() {
    $('#editarSection').hide();
    $('#agregarSection').show();
    $('#tabla').show();
    console.log('Cancelar');
  });
  
  // Cancelar y ocultar el formulario de agregar numero
  let botonCancelarNumero = document.getElementById('botonCancelarNumero');
  botonCancelarNumero.addEventListener('click', function() {
    $('#nuevoNumeroSection').hide();
    $('#agregarSection').show();
    $('#tabla').show();
    console.log('Cancelar');
  });
  